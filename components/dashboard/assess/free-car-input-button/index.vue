<template>
  <button class="free-car-input-button" @click="$emit('click')">
    <h3>フリー車種入力から作成</h3>
    <img width="30" :src="require('./img/btn-plus.svg')" />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.free-car-input-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 20px;
  width: 230px;
  height: 40px;
  border-radius: 20px;
  background: $white-300;
  outline: none;
  h3 {
    color: $blue-100;
  }
  .img {
    width: 30px;
    height: 30px;
  }
}
</style>
