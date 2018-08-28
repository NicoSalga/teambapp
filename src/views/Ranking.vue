<template>
  <div class="wrapper">
    <SectionTitle title="Ranking & Stats" />
    <br />
    <AppNav selected="ranking"/>
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
