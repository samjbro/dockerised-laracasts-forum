import localStore from 'local-storage'

export const ls = {
  get (key) {
    return localStore(key)
  },
  set (key, val) {
    return localStore(key, val)
  },
  remove (key) {
    return localStore.remove(key)
  }
}
