<template>
  <div class="event-fixed-add-button" @click="$emit('click')">
    <img src="./img/battery.svg" alt="" />
    <div class="text">活動報告</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$size: 80px;
.event-fixed-add-button {
  position: fixed;
  z-index: 100;
  bottom: 50px;
  right: 10px;
  width: $size;
  height: $size;
  border: 3px solid $--color-primary-active;
  background: $--color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
  .text {
    margin-top: 4px;
    font-weight: bold;
    font-size: 10px;
  }
}
</style>
