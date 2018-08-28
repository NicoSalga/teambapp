<template>
  <div class="wrapper">
    <SectionTitle title="Upcoming Challenges" />
    <br />
    <AppNav></AppNav>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';
import ChallengeCard from '../components/ChallengeCard';

export default {
  name: 'UpcomingChallenges',
  components: { SectionTitle, AppNav, ChallengeCard },
  data() {
    return {
      msg: 'Upcoming Challenges in Teambapp',
    };
  },
};
</script>
