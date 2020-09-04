<template>
  <div class="content__row">
    <div class="content__row--title">
      <p>{{ title }}</p>
    </div>
    <div class="content__row--body">
      <slot v-if="kind === 'custom'" />
      <div v-if="kind === 'base'" class="content__row--body--base">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmRowContainer',
  props: {
    title: {
      type: String,
      default: '',
    },
    kind: {
      type: String,
      default: 'custom',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  &__row {
    &--title {
      padding: 10px 10px 10px 10px;
      font-size: 12px;
      display: flex;
      border-right: 1px solid $--color-background-hover;
      p {
        margin-bottom: 0;
        padding-bottom: 10px;
      }
    }
    display: grid;
    grid-template-columns: 130px 440px;
    &--body {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 12px;
      p {
        margin-bottom: 0;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
