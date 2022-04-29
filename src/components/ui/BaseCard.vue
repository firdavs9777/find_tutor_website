<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style>
.card {
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
