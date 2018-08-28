<template>
  <div>
    <SectionTitle title="Ranking & Stats" />
    <br />
    <AppNav selected="ranking"/>
    <md-content class="tab-content-wrapper">
      <div class="md-layout">
        <div class="md-layout-item md-size-50">
          <RankingCard :users="rankingUsers" :discipline="discipline" :location="location" />
        </div>
        <div class="md-layout-item md-size-5">
        </div>
        <div class="md-layout-item md-size-45">
          <UserStatsCard :data="userStatsData" />
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import AppNav from '../components/AppNav';
import UserStatsCard from '../components/UserStatsCard';
import RankingCard from '../components/RankingCard';

export default {
  name: 'Ranking',
  components: { RankingCard, UserStatsCard, SectionTitle, AppNav },
  data() {
    return {
      location: 'Buenos Aires office',
      discipline: 'Ping Pong',
      rankingUsers: [
        {
          rank: 1,
          name: 'Jane Doe',
          WLR: 0.91,
        },
        {
          rank: 2,
          name: 'Jack Pallance',
          WLR: 0.82,
        },
        {
          rank: 3,
          name: 'John Doe',
          WLR: 0.7,
        },
        {
          rank: 4,
          name: 'Juan de los Palotes',
          WLR: 0.55,
        },
        {
          rank: 5,
          name: 'Joss Stoner',
          WLR: 0.3,
        },
      ],
      userStatsData: {
        username: 'John Doe',
        userlevel: 1,
        totalWins: 7,
        totalLosses: 3,
        WLR: 0.7,
        averageScoreRounded: 18,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-content-wrapper {
    padding: 30px 0px;
  }
</style>
