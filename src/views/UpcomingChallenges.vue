<template>
  <div>
    <SectionTitle title="Upcoming Challenges" />
    <br />
    <AppNav></AppNav>
    <md-content class="tab-content-wrapper">
      <div class="md-layout">
        <div class="md-layout-item md-size-5">
        </div>
        <div class="md-layout-item md-size-90">
          <ol>
            <li v-for="(challenge, index) in challenges" :key="index">
              <ChallengeCard :data="challenge" />
            </li>
          </ol>

        </div>
        <div class="md-layout-item md-size-5">
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';
import ChallengeCard from '../components/ChallengeCard';

const challengeMock = {
  discipline: 'Ping Pong',
  dateTime: new Date(),
  challenger: {
    firstname: 'Martin',
    lastname: 'Baez',
    avatarURL: require('../assets/avatars/mbaez.png'), // eslint-disable-line
  },
  challengerVotes: 4,
  challenged: {
    firstname: 'Adrian',
    lastname: 'Gay Cattaneo',
    avatarURL: require('../assets/avatars/adrian.png'), // eslint-disable-line
  },
  challengedVotes: 5,
};

export default {
  name: 'UpcomingChallenges',
  components: { SectionTitle, AppNav, ChallengeCard },
  data() {
    return {
      challenges: [challengeMock],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-content-wrapper {
    padding: 30px 0px;
  }
  ol {
    list-style: none;
    padding: 0;
  }
</style>
