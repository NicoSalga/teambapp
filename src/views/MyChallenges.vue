<template>
  <div class="wrapper">
    <SectionTitle title="My Challenges" />
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';
import ChallengeCard from '../components/ChallengeCard';

export default {
  name: 'MyChallenges',
  components: { SectionTitle, AppNav, ChallengeCard },
  data() {
    return {
      msg: 'Your Challenges in Teambapp App',
    };
  },
};
</script>
