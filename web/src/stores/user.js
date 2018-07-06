import Vue from 'vue'
import { each } from 'lodash'
import stub from '@/stubs/user'
export const userStore = {
  stub,
  cache: [],
  state: {
    users: [stub]
  },
  init (users) {
    this.all = users
    each(this.all, user => this.setupUser(user))
  },
  setupUser (user) {
    Vue.set(user, 'threads', [])
    Vue.set(user, 'replies', [])
    this.cache[user.id] = user
    return user
  },
  byId (id) {
    return this.cache[id]
  },
  set all (value) {
    this.state.users = value
  },
  get all () {
    return this.state.users
  }
}
