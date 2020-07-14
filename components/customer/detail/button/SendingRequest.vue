<template>
  <button class="sending-request-button" @click="$emit('click')">
    <i></i>
    <span>送客依頼</span>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.sending-request-button {
  height: 30px;
  border-radius: 15px;
  background: $white-300;
  padding: 0 15px;
  outline: none;
  i {
    display: inline-block;
    background: url('./img/car.svg') no-repeat 0 0;
    background-size: cover;
    width: 24px;
    height: 11px;
  }
  span {
    font-size: 12px;
    color: $blue-100;
    line-height: 30px;
  }
}
</style>
