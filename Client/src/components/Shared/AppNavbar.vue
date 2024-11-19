<template>
  <nav>
    <h1>Todo App</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/">Login</router-link></li>
      <li v-if="isLoggedIn"><button @click="logout">Logout</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 10px 20px;
  color: white;
}
nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
nav li {
  margin-right: 15px;
}
nav a {
  color: white;
  text-decoration: none;
}
button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
button:hover {
  text-decoration: underline;
}
</style>
