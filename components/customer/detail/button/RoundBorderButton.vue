<template>
  <button class="round-border-icon-text-button" @click="$emit('click')">
    <i :class="icon"></i>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '編集',
    },
    icon: {
      type: String,
      default: 'pen',
    },
  },
}
</script>

<style lang="scss">
.round-border-icon-text-button {
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
    &.pen {
      background: url('./img/pen.svg') no-repeat 0 0;
    }
    &.calendar {
      background: url('./img/calendar.svg') no-repeat 0 0;
    }
    &.invitation {
      width: 13px;
      height: 10px;
      background: url('./img/invitation.svg') no-repeat 0 0;
    }
    background-size: cover;
  }
  span {
    font-size: 12px;
    color: $blue-100;
  }
}
</style>
