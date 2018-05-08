<template>
  <div class="wrapper">
    <h1>Labs Sportsbook Login</h1>
    <br />
    <form class="md-layout login-form">
      <md-field>
        <label for="username">Username</label>
        <md-input type="text" id="username" v-model="initial"></md-input>
      </md-field>
      <br />
      <md-field>
        <label for="password">Password</label>
        <md-input type="password" id="password" v-model="initial"></md-input>
      </md-field>

      <md-button class="md-raised login-btn" type="submit">Login</md-button>
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
.login-form {
  margin: auto;
}
.login-btn {
  margin:auto;
}
</style>
