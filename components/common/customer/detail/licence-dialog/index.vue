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
          <pdf v-if="isPdfFront" :src="licenseImageFront" />
          <img v-else :src="licenseImageFront" alt="" />
        </fg-col>
        <fg-col span="12">
          <pdf v-if="isPdfBack" :src="licenseImageBack" />
          <img v-else :src="licenseImageBack" alt="" />
        </fg-col>
      </fg-row>
    </div>
  </fg-dialog>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf,
  },
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
      isPdfFront: null,
      isPdfBack: null,
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
              this.checkFile(res.url, 'back')
              this.licenseImageBack = res.url
            })
            .catch(console.error)
        }
        if (this.data.licenseImageFront !== null) {
          this.$api
            .get(`/v1/customers/${this.data.customerCode}/licenseImage/front`)
            .then((res) => {
              this.checkFile(res.url, 'front')
              this.licenseImageFront = res.url
            })
            .catch(console.error)
        }
      },
    },
  },
  methods: {
    // checks if the file is PDF
    checkFile(link, ImageType) {
      if (ImageType === 'front') {
        link.indexOf('.pdf') > 0
          ? (this.isPdfFront = true)
          : (this.isPdfFront = false)
      } else if (ImageType === 'back') {
        link.indexOf('.pdf') > 0
          ? (this.isPdfBack = true)
          : (this.isPdfBack = false)
      }
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
