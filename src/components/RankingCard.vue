<template>
    <md-table md-card class="ranking-card">
      <md-table-row>
        <md-table-head colSpan="3" class="ranking-table-head">
          <div class="md-headline ranking-card-title">
            <span class="discipline">{{ discipline }}</span> Ranking
            <br/>
            <span class="location ranking-card-subtitle">({{ location }})</span>
          </div>
        </md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-head>Rank</md-table-head>
        <md-table-head>Username</md-table-head>
        <md-table-head>Win-Loss Ratio</md-table-head>
      </md-table-row>
      <md-table-row v-for="user in users" :key="user.rank">
        <md-table-cell md-numeric>{{ user.rank }}</md-table-cell>
        <md-table-cell class="left-align">{{ user.name }}</md-table-cell>
        <md-table-cell class="left-align" md-numeric>{{ user.WLR }}</md-table-cell>
      </md-table-row>
    </md-table>
</template>

<script>

export default {
  name: 'RankingCard',
  props: ['discipline', 'location', 'users'],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ranking-card {
    background-color: #f7fbff;
  }
  .ranking-card-title, .ranking-card-subtitle {
    text-align: left;
    line-height: 1;
  }
  .ranking-card-title {
    font-size:18px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .ranking-card-subtitle {
    font-size:12px;
    font-weight: bold;
  }
  .discipline, .location {
    color: #90a0ff;
  }
  .discipline {
    text-shadow: 2px 2px black;
  }
  .left-align {
    text-align: left;
  }
</style>
