<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style scoped>
.badge {
  background-color: rgb(216, 199, 199);
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 1rem;
}
.frontend {
  color: #fff;
  background-color: #00098d;
}
.backend {
  background-color: #71008d;
  color: #fff;
}
.career {
  background-color: #8d006e;
  color: white;
}
</style>
