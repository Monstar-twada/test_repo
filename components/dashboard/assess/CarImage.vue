<template>
  <div>
    <div class="tab">
      <h3 class="title">車両画像</h3>
      <div class="container">
        <div
          v-for="i in loadedImage"
          :key="i.imageKey"
          class="tab_box mr20 mb20"
        >
          <v-img class="tab_box--image" :src="`${i.src}`" />
        </div>
        <div class="tab_box vh_center mr20 mb20">
          <v-btn class="mx-2" fab dark color="white">
            <input
              id="image"
              ref="file"
              type="file"
              accept="image/*"
              name="image"
              @change="createImage()"
            />
            <v-icon color="blue">mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarImamge',
  data() {
    return {
      loadedImage: [],
    }
  },
  methods: {
    createImage(image) {
      const imageSrc = this.$refs.file.files[0]
      const imageName = this.$refs.file.files[0].name
      const imageKey = this.loadedImage.length
      if (imageSrc) {
        const imageUpload = { key: imageKey, name: imageName, src: imageSrc }
        this.loadedImage.push(imageUpload)
        this.previewImage(imageKey, imageSrc)
      }
    },
    previewImage(imageKey, imageSrc) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target.result
        this.loadedImage[imageKey].src = result
      }
      reader.readAsDataURL(imageSrc)
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: $--color-primary;
  font-weight: 600;
  margin-bottom: 25px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  padding: 0;
}
.tab {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  &_box {
    height: 183px;
    width: 183px;
    background-color: #f2f6fa;
    input {
      position: absolute;
      left: 0;
      top: -16px;
      border-radius: 50%;
      height: 56px;
      width: 56px;
      opacity: 0;
      cursor: pointer;
      z-index: 9999;
    }
    &__image {
      height: 183px;
      width: 183px;
    }
  }
  p {
    font-size: 12px;
    font-family: 'Noto Sans JP';
    color: $--color-primary;
    margin-bottom: 10px;
  }
}
</style>
