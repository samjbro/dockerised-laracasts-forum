<template>
  <div class="thread">
    <thread-item
      :thread="thread"
    />
    <h4>
      Replies:
    </h4>
    <reply-item
      v-for="reply in thread.replies"
      :key="reply.id"
      :reply="reply"
    />
  </div>
</template>

<script>
import { event } from '@/services'
import stub from '@/stubs/thread'
import ThreadItem from './thread-item.vue'
import ReplyItem from '@/components/replies/reply-item.vue'
export default {
  components: { ThreadItem, ReplyItem },
  data () {
    return {
      thread: stub
    }
  },
  created () {
    event.on({
      [event.$names.LOAD_MAIN_CONTENT]: (route, thread) => {
        if (route === 'thread') {
          this.thread = thread
        }
      }
    })
  }
}
</script>
