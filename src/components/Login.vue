<template>
  <div class="hello">
    <h1>Labs Sportsbook Login</h1>

    <form>
      <label for="username">Username</label>
      <input type="text" id="username">
      <label for="password">Password</label>
      <input type="password" id="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Labs Sportsbook App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
