<template>
  <div class="wrapper">
    <h1>User Profile</h1>
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from './AppNav';

export default {
  name: 'Profile',
  components: { AppNav },
  data() {
    return {
      msg: 'User Profile Settings',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  /*min-width: 900px;*/
}
h1 {
  font-weight: normal;
}
</style>
