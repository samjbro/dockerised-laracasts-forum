<template>
  <div class="app">
    <main-content/>
  </div>
</template>

<script>
import router from '@/router'
import { event } from '@/services'
import { sharedStore } from '@/stores'
import MainContent from './layout/main-content.vue'
export default {
  components: { MainContent },
  created () {
    event.on({
      [event.$names.APP_READY]: () => {
        router.init()
      }
    })
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      try {
        await sharedStore.init()
        event.emit(event.$names.APP_READY)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
