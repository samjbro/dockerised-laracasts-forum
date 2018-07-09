<template>
  <div class="app">
    <button
      v-if="! authenticated"
      @click="login">Log In</button>
    <main-content v-else/>
  </div>
</template>

<script>
import router from '@/router'
import { event } from '@/services'
import { sharedStore, userStore } from '@/stores'
import MainContent from './layout/main-content.vue'
export default {
  components: { MainContent },
  data () {
    return {
      authenticated: true
    }
  },
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
    },
    async login () {
      try {
        userStore.login()
        console.log('logged in!')
        this.authenticated = true
        this.init()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
