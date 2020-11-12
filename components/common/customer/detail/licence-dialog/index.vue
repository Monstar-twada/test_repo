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
          <img :src="licenseImageFront" alt="" />
        </fg-col>
        <fg-col span="12">
          <img :src="licenseImageBack" alt="" />
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
      licenseImageFront: '',
      licenseImageBack: '',
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
    data: {
      handler(data) {
        // calls only if image is not null
        if (this.data.licenseImageBack !== null) {
          this.$api
            .get(`/v1/customers/${this.data.customerCode}/licenseImage/back`)
            .then((res) => {
              this.licenseImageBack = res.url
            })
            .catch(console.error)
        }
        if (this.data.licenseImageFront !== null) {
          this.$api
            .get(`/v1/customers/${this.data.customerCode}/licenseImage/front`)
            .then((res) => {
              this.licenseImageFront = res.url
            })
            .catch(console.error)
        }
      },
    },
  },
}
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
