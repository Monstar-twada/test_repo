<template>
  <v-container>
    <v-row align="center" justify="space-between" class="upload-image ma-0">
      <v-col cols="6" class="pa-0 ma-0">
        <div class="upload-image__upload">
          <h4>選択してください</h4>
          <v-img
            class="mt10"
            :src="require('~/static/customer/upload-image.svg')"
            width="90"
          />
          <input
            id="image"
            ref="file"
            type="file"
            accept="image/*"
            name="image"
            @change="previewImage"
          />
        </div>
      </v-col>
      <v-col cols="6" class="pa-0 ma-0">
        <v-img :src="loadedImage" width="118" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'UplaodImage',
  data() {
    return {
      loadedImage: require('~/static/customer/apologize.svg'),
    }
  },
  methods: {
    previewImage(image) {
      const imageSrc = this.$refs.file.files[0]
      if (!imageSrc) return
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target.result
        this.loadedImage = result
      }
      reader.readAsDataURL(imageSrc)
    },
  },
}
</script>
<style lang="scss" scoped>
.upload-image {
  border: 1px $gray-100 solid;
  border-radius: 5px;
  flex: 0 0 auto !important;
  width: 300px;
  height: 100px;
  &__upload {
    margin: 20px 0 0 20px;
    height: 60px;
    width: 100px;
    position: relative;
    input {
      position: absolute;
      left: 0;
      top: 26px;
      border-radius: 50%;
      height: 30px;
      width: 90px;
      opacity: 0;
      cursor: pointer;
      z-index: 9999;
    }
    .v-image {
      cursor: pointer;
    }
  }
}
</style>
