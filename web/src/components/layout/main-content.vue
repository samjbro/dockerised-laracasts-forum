<template>
  <section class="main-content">
    <a href="#!/threads">Threads</a>
    <threads v-show="view === 'threads'"/>
    <thread v-show="view === 'thread'"/>
  </section>
</template>

<script>
import { event } from '@/services'
import Threads from '@/components/threads/threads.vue'
import Thread from '@/components/threads/thread.vue'
export default {
  components: { Threads, Thread },
  data () {
    return {
      view: 'home'
    }
  },
  created () {
    event.on({
      [event.$names.LOAD_MAIN_CONTENT]: (view) => {
        this.view = view
      }
    })
  }
}
</script>
