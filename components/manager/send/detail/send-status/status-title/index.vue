<template>
  <div class="send-status-title">
    <div class="send-status-title-top">
      <div class="send-status-title-top-left">
        <img :src="require(`./img/${info.statusIcon}.svg`)" />
        <div class="send-status-title-top-info">
          <h2>{{ info.id }} {{ info.name }}</h2>
          <h5>{{ info.maker }} {{ info.type }}</h5>
        </div>
      </div>
      <div class="send-status-title-top-right">
        <slot></slot>
      </div>
    </div>
    <div class="send-status-title-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendStatusTitle',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.send-status-title {
  width: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border-bottom: 1px $--color-border solid;
    padding: 20px;
    color: $--color-primary;
    background: $--color-white;

    &-left {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h5 {
        font-weight: normal;
        color: $--color-primary-placeholder;
      }
    }
  }
}
</style>
