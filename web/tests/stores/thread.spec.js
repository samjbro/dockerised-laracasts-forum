import { threadStore, userStore } from '@/stores'
import data from '../blobs/data'
const { threads, users } = data

describe('stores/thread', () => {
  beforeEach(() => {
    userStore.init(_.cloneDeep(users))
    threadStore.init(_.cloneDeep(threads))
  })

  afterEach(() => {
    userStore.state.users = []
    threadStore.state.threads = []
  })

  describe('#init', () => {
    it('correctly gathers threads', () => {
      threadStore.state.threads.length.should.equal(1)
    })

    it('correctly sets thread creator', () => {
      threadStore.state.threads[0].creator.id.should.equal(1)
    })
  })

  describe('#byId', () => {
    it('correctly gets a thread by ID', () => {
      threadStore.byId(1).title.should.equal('First Thread')
    })
  })

  describe('#all', () => {
    it('correctly returns all threads', () => {
      threadStore.all.length.should.equal(1)
    })
  })
})
