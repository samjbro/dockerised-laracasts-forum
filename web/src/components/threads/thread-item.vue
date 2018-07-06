<template>
  <article class="thread-item">
    <h4 class="thread-item__attribute thread-item__attribute--title">
      <div>{{ thread.creator.name }} said:</div>
      <a
        href=""
        @click.prevent="showThread">
        {{ thread.title }}
      </a>
    </h4>
    <div class="thread-item__attribute thread-item__attribute--body">{{ thread.body }}</div>
    <hr>
  </article>
</template>

<script>
import router from '@/router'
export default {
  props: {
    thread: { type: Object, required: true }
  },
  methods: {
    showThread () {
      router.go(`threads/${this.thread.id}`)
    }
  }
}
</script>
