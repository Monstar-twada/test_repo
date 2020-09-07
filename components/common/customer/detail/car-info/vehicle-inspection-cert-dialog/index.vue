<template>
  <fg-dialog
    v-model="visible"
    class="customer-vic-dialog"
    persistent
    max-width="940px"
    title="車検証"
  >
    <div class="body-wrapper">
      <img src="/common/vehicle-inspection-certificate.jpg" alt="" />
    </div>
  </fg-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      carModels: ['A', 'B', 'C'],
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.customer-vic-dialog {
  .body-wrapper {
    padding: 40px;
    img {
      width: 100%;
    }
  }
}
</style>
