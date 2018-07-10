<template>
  <div class="login-wrapper">
    <img src="../assets/logo.png" style="width:27%;">
    <h1>Labs Teambapp Login</h1>
    <br />
    <form class="md-layout login-form">
      <md-field>
        <label for="username">Username</label>
        <md-input type="text" id="username" v-model="username"></md-input>
      </md-field>
      <br />
      <md-field>
        <label for="password">Password</label>
        <md-input type="password" id="password" v-model="userpass"></md-input>
      </md-field>

      <md-button
        class="md-raised md-primary login-btn"
        type="submit"
        v-on:click="login"
      >Login</md-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      if (this.isValidLogin(this.username, this.userpass)) {
        this.$router.push({ name: 'Dashboard' });
      }
    },
    isValidLogin() {
      // ToDo: real validation
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-wrapper {
  width: 450px;
  max-width: 450px;
  background-color: #fff;
}
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
