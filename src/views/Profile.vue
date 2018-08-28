<template>
  <div class="wrapper">
    <SectionTitle title="User Profile" />
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';

export default {
  name: 'Profile',
  components: { SectionTitle, AppNav },
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
