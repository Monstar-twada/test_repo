<template>
  <fg-dialog
    v-model="visible"
    class="customer-vic-dialog"
    persistent
    max-width="940px"
    title="車検証"
  >
    <div class="body-wrapper">
      <pdf :src="url" />
      <!-- <pdf
        src="https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf"
      /> -->
      <!-- <img :src="url" alt="" /> -->
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
    customerCode: {
      type: String,
      default: '',
    },
    carCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: this.value,
      url: '',
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
    carCode() {
      this.getImage()
    },
  },
  mounted() {
    this.getImage()
    console.log(this.url)
  },
  methods: {
    async getImage() {
      if (!this.customerCode || !this.carCode) return
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.customerCode}/cars/${this.carCode}/registrationImage`
        )
        this.url = res.url
        this.url = encodeURI(this.url)
      } catch (err) {
        this.$ui.error('[vehicle-inspection-cert-dialog]', err)
      }
    },
  },
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
