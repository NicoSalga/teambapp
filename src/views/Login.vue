<template>
  <div class="login-wrapper">
    <img src="../assets/logo.png" style="width:27%;">
    <h1>Labs Teambapp Login</h1>
    <br />
    <form class="md-layout login-form">
      <md-field>
        <label for="username">Username</label>
        <md-input type="text" id="username" v-model="input.username"></md-input>
      </md-field>
      <br />
      <md-field>
        <label for="password">Password</label>
        <md-input type="password" id="password" v-model="input.userpass"></md-input>
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
import auth from '../services/auth';

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        userpass: '',
      },
    };
  },
  methods: {
    login() {
      auth.login(this.input.username, this.input.userpass, (loggedIn) => {
        if (!loggedIn) {
          this.error = true;
          /* eslint-disable no-alert */
          alert('The username and / or password is incorrect');
          /* eslint-enable no-alert */
        } else {
          this.$router.push({ name: 'UpcomingChallenges' });
        }
      });
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
  margin: auto;
}
</style>
