<template>
  <div>
    <md-icon>chevron_right</md-icon><span class="md-subheading">{{ title }}</span>
  </div>
</template>

<script>

export default {
  name: 'SectionTitle',
  props: ['title'],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    text-align: left;
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
