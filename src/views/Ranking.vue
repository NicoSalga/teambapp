<template>
  <div class="wrapper">
    <SectionTitle title="Ranking & Stats" />
    <br />
    <AppNav />
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';

export default {
  name: 'Ranking',
  components: { SectionTitle, AppNav },
  data() {
    return {
      msg: 'Teambapp Ranking',
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
