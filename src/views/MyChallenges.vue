<template>
  <div class="wrapper">
    <h1>My Challenges</h1>
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from '../components/AppNav';
import ChallengeCard from '../components/ChallengeCard';

export default {
  name: 'MyChallenges',
  components: { AppNav, ChallengeCard },
  data() {
    return {
      msg: 'Your Challenges in Teambapp App',
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
