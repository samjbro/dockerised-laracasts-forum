import { loadMainContent } from '@/services'
import { threadStore } from '@/stores'

export default {
  routes: {
    '/threads' () {
      loadMainContent('threads')
    },
    '/threads/(\\d+)' (id) {
      const thread = threadStore.byId(~~id)
      loadMainContent('thread', thread)
    }
  },

  init () {
    this.loadState()
    window.addEventListener('popstate', () => this.loadState(), true)
  },

  loadState () {
    Object.keys(this.routes).forEach(route => {
      const matches = window.location.hash.match(new RegExp(`^#!${route}$`))
      if (matches) {
        const [, ...params] = matches
        this.routes[route](...params)
        return false
      }
    })
  },

  go (path) {
    path = `#!/${path}`
    document.location.href = `${document.location.origin}${document.location.pathname}${path}`
  }
}
