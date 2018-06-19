<template>
  <div class="wrapper">
    <h1>Teambapp Dashboard</h1>
    <br />
    <div>
      <md-tabs>
        <md-tab id="tab-upcoming-challenges"
                md-label="Upcoming Challenges" md-icon="today"></md-tab>
        <md-tab id="tab-my-challenges"
                md-label="My Challenges" md-icon="perm_contact_calendar"></md-tab>
        <md-tab id="tab-rankings"
                md-label="Rankings" md-icon="list_alt"></md-tab>
        <md-tab id="tab-profile"
                md-label="Profile" md-icon="account_circle"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      msg: 'Welcome to Labs Dashboard Teambapp App',
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
