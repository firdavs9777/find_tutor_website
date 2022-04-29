<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <!-- Transition for router-->
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
.router-enter-active,
.router-leave-active {
  transition: opacity 0.2s ease-out;
}
.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
