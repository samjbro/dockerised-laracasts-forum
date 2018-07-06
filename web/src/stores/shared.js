import { assign } from 'lodash'
import { http } from '@/services'
import { threadStore, replyStore, userStore } from '.'

export const sharedStore = {
  state: {
    threads: [],
    replies: [],
    users: []
  },
  init () {
    return new Promise((resolve, reject) => {
      http.get('data', ({ data }) => {
        assign(this.state, data)
        userStore.init(this.state.users)
        threadStore.init(this.state.threads)
        replyStore.init(this.state.replies)
        resolve(data)
      }, error => reject(error))
    })
  }
}
