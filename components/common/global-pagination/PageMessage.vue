<template>
  <div class="global-pagination-message-wrapper" :class="['__' + theme]">
    <strong>{{ total }}</strong>
    <span>件中 {{ message }}件を表示</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    theme: {
      type: String,
      default: 'white',
    },
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
$normalHeight: 24px;
.global-pagination-message-wrapper {
  line-height: $normalHeight;
  strong {
    display: inline-block;
    font-size: 24px;
    font-family: 'Avenir Next', 'Helvetica', Arial;
  }
  span {
    font-size: 14px;
  }
  &.__white {
    strong,
    span {
      color: $white-300;
    }
  }
}
</style>
