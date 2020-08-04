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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarImamge',
  data() {
    return {
      loadedImage: [
        { imagekey: 1, src: '1.png' },
        { imagekey: 1, src: '2.png' },
        { imagekey: 1, src: '1.png' },
        { imagekey: 1, src: '2.png' },
        { imagekey: 1, src: '1.png' },
        { imagekey: 1, src: '2.png' },
        { imagekey: 1, src: '1.png' },
        { imagekey: 1, src: '2.png' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: $blue-200;
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
  background: $white-300;
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
    color: $blue-200;
    margin-bottom: 10px;
  }
}
</style>
