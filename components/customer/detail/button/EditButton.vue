<template>
  <button class="customer-edit-button" @click="$emit('click')">
    <i></i>
    <span>編集</span>
  </button>
</template>

<script>
export default {
  name: 'EditButton',
}
</script>

<style lang="scss">
.customer-edit-button {
  display: flex;
  align-items: center;
  height: 24px;
  border-radius: 12px;
  background: $white-300;
  padding: 0 12px;
  outline: none;
  border: 1px solid #ebf1f8;
  i {
    display: inline-block;
    margin-right: 4px;
    width: 12px;
    height: 12px;
    background: url('./img/pen.svg') no-repeat 0 0;
    background-size: cover;
  }
  span {
    font-size: 12px;
    color: $blue-100;
  }
}
</style>
