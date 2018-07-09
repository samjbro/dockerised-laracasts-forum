<template>
  <form
    class="reply-form"
    @submit.prevent="addReply">
    Replying to {{ thread.title }}
    <div class="reply-form__group">
      <textarea
        id="body"
        v-model="formData.body"
        name="body"
        placeholder="Have something to say?"
        rows="5"
      />
    </div>
    <button type="submit">Add Reply</button>
  </form>
</template>

<script>
import { replyStore } from '@/stores'

export default {
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {
        body: ''
      }
    }
  },
  methods: {
    async addReply () {
      try {
        replyStore.store(this.thread, this.formData)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
