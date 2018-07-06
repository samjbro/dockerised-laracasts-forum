<template>
  <article class="reply-item">
    <div class="reply-item__attribute reply-item__attribute--created_at">
      {{ reply.owner.name }} at {{ reply.created_at }}
    </div>
    <div class="reply-item__attribute reply-item__attribute--body">{{ reply.body }}</div>
    <br>
  </article>
</template>

<script>
export default {
  props: {
    reply: { type: Object, required: true }
  }
}
</script>
