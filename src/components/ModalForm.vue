<template>
  <div>
    <md-dialog-prompt
      :md-active.sync="showModal"
      md-confirm-text="Done"
      md-cancel-text="Cancel"
      @md-cancel="cancelModal" />
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  props: ['showModal', 'cancelModal'],
};
</script>
