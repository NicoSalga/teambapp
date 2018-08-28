<template>
  <div class="wrapper">
    <div>
      <md-button v-on:click="AddChallenge" class="md-fab md-primary md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>
      <md-tabs md-sync-route>
        <md-tab id="tab-upcoming-challenges"
                to="/upcoming"
                md-label="Upcoming Challenges" md-icon="today"></md-tab>
        <md-tab id="my-challenges"
                to="/my-challenges"
                md-label="My Challenges" md-icon="perm_contact_calendar"></md-tab>
        <md-tab id="ranking"
                to="/ranking"
                md-label="Rankings & Stats" md-icon="list_alt"></md-tab>
        <md-tab id="tab-profile"
                to="/profile"
                md-label="Profile" md-icon="account_circle"></md-tab>
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
