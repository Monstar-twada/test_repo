<template>
  <fg-dialog
    v-model="visible"
    class="customer-licence-dialog"
    persistent
    max-width="940px"
    title="免許証"
  >
    <div class="body-wrapper">
      <fg-row gutter="20">
        <fg-col span="12">
          <img :src="data.licenseImageFront" alt="" />
        </fg-col>
        <fg-col span="12">
          <img :src="data.licenseImageBack" alt="" />
        </fg-col>
      </fg-row>
    </div>
  </fg-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: this.value,
    };
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
.customer-licence-dialog {
  .body-wrapper {
    padding: 40px;
    img {
      width: 100%;
    }
  }
}
</style>
