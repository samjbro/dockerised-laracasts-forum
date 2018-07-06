import { replyStore, userStore, threadStore } from '@/stores'
import data from '../blobs/data'
const { replies, users, threads } = data

describe('stores/thread', () => {
  beforeEach(() => {
    userStore.init(_.cloneDeep(users))
    threadStore.init(_.cloneDeep(threads))
    replyStore.init(_.cloneDeep(replies))
  })
  afterEach(() => {
    userStore.state.users = []
    threadStore.state.threads = []
    replyStore.state.replies = []
  })

  describe('#init', () => {
    it('correctly gathers replies', () => {
      replyStore.state.replies.length.should.equal(1)
    })
    it('correctly sets reply owner', () => {
      replyStore.state.replies[0].owner.id.should.equal(1)
    })
    it('correctly sets reply thread', () => {
      replyStore.state.replies[0].thread.id.should.equal(1)
    })
  })

  describe('#byId', () => {
    it('correctly gets a reply by ID', () => {
      replyStore.byId(1).body.should.equal('This is the first reply')
    })
  })

  describe('#all', () => {
    it('correctly returns all replies', () => {
      replyStore.all.length.should.equal(1)
    })
  })
})
