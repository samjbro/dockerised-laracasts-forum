import Vue from 'vue'
import { each, unionBy } from 'lodash'
import stub from '@/stubs/thread'
import { userStore } from '@/stores'
export const threadStore = {
  stub,
  cache: [],
  state: {
    threads: [stub]
  },

  init (threads) {
    this.all = threads
    each(this.all, thread => this.setupThread(thread))
  },

  get all () {
    return this.state.threads
  },

  set all (value) {
    this.state.threads = value
  },

  setupThread (thread) {
    const user = userStore.byId(thread.user_id)
    Vue.set(thread, 'replies', [])
    Vue.set(thread, 'creator', user)
    user.threads = unionBy(user.threads || [], [thread], 'id')
    this.cache[thread.id] = thread
    return thread
  },

  byId (id) {
    return this.cache[id]
  }
}
