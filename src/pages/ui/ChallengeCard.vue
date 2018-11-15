<template>
    <v-flex lg8 sm12 xs12>
        <v-widget :title="data.discipline" content-bg="white">
            <v-btn icon slot="widget-header-action">
                <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
                <div class="md-subhead challenge-date">{{ data.dateTime | moment("calendar") }}</div>
                <v-flex lg5 sm5 xs12>
                    <v-avatar>
                        <img v-bind:src="data.challenger.avatarURL" alt="Challenger">
                    </v-avatar>
                    <div class="player-name">
                        {{ data.challenger.firstname }} {{ data.challenger.lastname }}
                    </div>
                </v-flex>
                <v-flex lg2 sm2 xs12>
                    <span>VS.</span>
                </v-flex>
                <v-flex lg5 sm5 xs12>
                    <v-avatar>
                        <img v-bind:src="data.challenged.avatarURL" alt="Challenger">
                    </v-avatar>
                    <div class="player-name">
                        {{ data.challenged.firstname }} {{ data.challenged.lastname }}
                    </div>
                </v-flex>
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
    export default {
        name: 'ChallengeCard',
        components: {},
        props: ['data'],
        data() {
            return {};
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .challenge-card-wrapper {
        margin: 9px;
    }
    .md-card-header {
        padding: 0;
    }
    .md-title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        background-color: aliceblue;
        letter-spacing: 5px;
        margin-top: 0px !important;
    }
    .challenge-date {
        background-color: #add8cf;
        line-height: 2;
        font-size: 16px;
    }
    .md-card-content {
        padding: 12px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .md-avatar.md-large {
        min-width: 90px;
        min-height: 90px;
        background-color: #e1e1e1;
    }
    .versus {
        font-size: 22px;
        font-weight: bold;
        font-style: italic;
        color: #757575;
    }
    .player-name {
        font-weight: bold;
        color: darkslategray;
    }
    .md-card-actions {
        padding: 0;
    }
    .md-card-actions .md-button {
        margin: 0px;
        background: #448aff;
        color: white;
        width: 99%;
    }
    span {
        vertical-align: middle;
        font-weight: normal;
        margin: 0;
        line-height: 1;
        font-size: 21px;
        font-family: Roboto, sans-serif;
    }
</style>