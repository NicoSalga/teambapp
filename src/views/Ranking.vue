<template>
  <div class="wrapper">
    <h1>Teambapp Ranking</h1>
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from '../components/AppNav';

export default {
  name: 'Ranking',
  components: { AppNav },
  data() {
    return {
      msg: 'Teambapp Ranking',
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
