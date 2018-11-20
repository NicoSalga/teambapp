<template>
    <v-flex lg6 sm12 xs12>
        <v-widget :title="data.discipline" content-bg="white">
            <v-btn icon slot="widget-header-action">
                <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
                <div class="md-subhead challenge-date">{{ data.dateTime | moment("calendar") }}</div>
                <v-layout row wrap>
                    <v-flex lg5 sm5 xs12 class="center-content">
                        <v-avatar lg12 sm12 xs12 :size="avatarSize">
                            <img v-bind:src="data.challenger.avatarURL" alt="Challenger">
                        </v-avatar>
                        <div lg12 sm12 xs12 class="player-name">
                            {{ data.challenger.firstname }} {{ data.challenger.lastname }}
                        </div>
                    </v-flex>
                    <v-flex lg2 sm2 xs12 class="center-content">
                        <span class="versus">VS.</span>
                    </v-flex>
                    <v-flex lg5 sm5 xs12 class="center-content">
                        <v-avatar lg12 sm12 xs12 :size="avatarSize">
                            <img v-bind:src="data.challenged.avatarURL" alt="Challenger">
                        </v-avatar>
                        <div lg12 sm12 xs12 class="player-name">
                            {{ data.challenged.firstname }} {{ data.challenged.lastname }}
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-widget>
    </v-flex>

    <!--div class="challenge-card-wrapper">
        <md-card>

            <md-card-actions class="md-layout">
                <div class="md-layout-item md-size-50">
                    <md-button class="md-primary">
                        +{{ data.challengerVotes}}
                    </md-button>
                </div>
                <div class="md-layout-item md-size-50">
                    <md-button class="md-primary">
                        +{{ data.challengedVotes}}
                    </md-button>
                </div>
            </md-card-actions>
        </md-card>
    </div-->
</template>

<script>
import VWidget from '@/components/VWidget';

export default {
  name: 'ChallengeCard',
  components: {
    VWidget,
  },
  props: ['data'],
  data () {
    return {
      avatarSize: 128,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .versus {
        font-size: 28px;
        font-style: italic;
        color: black;
        vertical-align: middle;
        font-weight: 100;
        margin: 0;
        line-height: 5;
        font-family: Roboto, sans-serif;
    }

    .player-name {
        font-weight: bold;
        color: darkslategray;
    }

    .challenge-date {
        background-color: #dceeff;
        line-height: 2;
        font-size: 16px;
        margin: -16px;
        margin-bottom: 0px;
        padding-left: 24px;
    }
    .center-content {
        text-align: center;
    }
</style>