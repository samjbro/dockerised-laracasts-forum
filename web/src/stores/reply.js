import Vue from 'vue'
import { each, unionBy } from 'lodash'
import stub from '@/stubs/reply'
import { userStore, threadStore } from '@/stores'

export const replyStore = {
  stub,
  cache: [],
  state: {
    replies: [stub]
  },
  init (replies) {
    this.all = replies
    each(this.all, reply => this.setupReply(reply))
  },
  get all () {
    return this.state.replies
  },
  set all (value) {
    this.state.replies = value
  },

  setupReply (reply) {
    const thread = threadStore.byId(reply.thread_id)
    const user = userStore.byId(reply.user_id)

    Vue.set(reply, 'thread', thread)
    thread.replies = unionBy(thread.replies || [], [reply], 'id')
    Vue.set(reply, 'owner', user)
    user.replies = unionBy(user.replies || [], [reply], 'id')

    this.cache[reply.id] = reply

    return reply
  },

  byId (id) {
    return this.cache[id]
  }
}
