<template>
  <section class="threads">
    <thread-item
      v-for="thread in state.threads"
      :key="thread.id"
      :thread="thread"
    />
  </section>
</template>

<script>
import stub from '@/stubs/thread'
import { event } from '@/services'
import { threadStore } from '@/stores'
import ThreadItem from './thread-item.vue'
export default {
  components: { ThreadItem },
  data () {
    return {
      state: {
        threads: [stub]
      }
    }
  },
  created () {
    event.on({
      [event.$names.LOAD_MAIN_CONTENT]: (view) => {
        if (view === 'threads') {
          this.state.threads = threadStore.all
        }
      }
    })
  }
}
</script>
