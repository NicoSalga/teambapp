<template>
  <div class="wrapper">
    <div>
      <md-button v-on:click="AddChallenge" class="md-fab md-primary md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>
      <md-tabs>
        <!--md-tab id="tab-home"
                md-label="Home" md-icon="home"
                to="/dashboard"></md-tab-->
        <md-tab id="tab-upcoming-challenges"
                md-label="Upcoming Challenges" md-icon="today"
                to="/upcoming"></md-tab>
        <md-tab id="tab-my-challenges"
                md-label="My Challenges" md-icon="perm_contact_calendar"
                to="/my-challenges"></md-tab>
        <md-tab id="tab-rankings"
                md-label="Rankings" md-icon="list_alt"
                to="/ranking"></md-tab>
        <md-tab id="tab-profile"
                md-label="Profile" md-icon="account_circle"
                to="/profile"></md-tab>
      </md-tabs>
      <ModalForm v-bind:showModal="displayModal" v-bind:cancelModal="CancelModal"></ModalForm>
    </div>
  </div>
</template>

<script>
import ModalForm from '../components/ModalForm';
export default {
  name: 'AppNav',
  components: { ModalForm },
  data() {
    return {
      displayModal: false,
    };
  },
  methods: {
    AddChallenge() {
      this.displayModal = true;
    },
    CancelModal() {
      this.displayModal = false;
    },
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
