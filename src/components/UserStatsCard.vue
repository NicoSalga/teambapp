<template>
    <md-table md-card>
      <md-table-row>
        <md-table-head colSpan="2">
          <div class="md-headline user-stats-card-title">
            User Stats for <span class="username">{{ data.username }}</span>
          </div>
          <div class="md-subhead user-stats-card-subtitle">User level: {{ data.userlevel }}</div>
        </md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="left-align">Total Wins</md-table-cell>
        <md-table-cell md-numeric>{{ data.totalWins }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="left-align">Total Losses</md-table-cell>
        <md-table-cell md-numeric>{{ data.totalLosses }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="left-align">Win-Loss Ratio</md-table-cell>
        <md-table-cell md-numeric>{{ data.WLR }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="left-align">Average Score (rounded)</md-table-cell>
        <md-table-cell md-numeric>{{ data.averageScoreRounded}}</md-table-cell>
      </md-table-row>
    </md-table>
</template>

<script>

export default {
  name: 'UserStatsCard',
  components: {},
  props: ['data'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-stats-card {
    background-color: #f7fbff;
  }
  .user-stats-card-title, .user-stats-card-subtitle {
    text-align: left;
    line-height: 1;
  }
  .user-stats-card-title {
    font-size:14px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .user-stats-card-subtitle {
    font-size:12px;
    font-weight: bold;
  }
  .username {
    color: #90a0ff;
  }
  .left-align {
    text-align: left;
  }
</style>
