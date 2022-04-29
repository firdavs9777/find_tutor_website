<template>
  <header>
    <nav>
      <h1><router-link to="/" class="heading">Find a Coach </router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/auth');
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #a83b4f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading {
  font-size: 22px;
  text-align: center;
  margin: auto;
  padding: 0;
  justify-content: center;
}
.heading:hover,
.heading:active {
  font-size: 23px;
}
header a {
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border: 2px solid #f391e3;
  box-shadow: #adf391;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgb(27, 30, 184);
}
h1 {
  margin: 0;
}
h1 a {
  color: white;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
</style>
