import { userStore } from '@/stores'
import data from '../blobs/data'
const { users } = data

describe('stores/user', () => {
  beforeEach(() => {
    userStore.init(_.cloneDeep(users))
  })
  afterEach(() => {
    userStore.state.users = []
  })

  describe('#init', () => {
    it('correctly gathers users', () => {
      userStore.state.users.length.should.equal(1)
    })
  })

  describe('#byId', () => {
    it('correctly gets a user by ID', () => {
      userStore.byId(1).name.should.equal('First User')
    })
  })

  describe('#all', () => {
    it('correctly returns all users', () => {
      userStore.all.length.should.equal(1)
    })
  })
})
