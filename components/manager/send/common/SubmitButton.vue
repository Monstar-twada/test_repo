<template>
  <div class="send-common-submit">
    <button class="send-common-submit__btn">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.send-common-submit {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  &__btn {
    font-size: 14px;
    font-weight: bold;
    color: $--color-white;
    width: 240px;
    height: 40px;
    border-radius: 50px;
    background-image: linear-gradient(99deg, #1295ce, $--color-primary-active);
  }
}
</style>
