<template>
  <div class="send-card">
    <div class="send-card-icon">
      <img :src="require(`./img/${iconSrc}.svg`)" />
    </div>
    <h2>{{ title }}</h2>
    <h3>{{ subTitle }}</h3>
    <fg-button type="primary" width="240px" bold @click="$router.push(link)">{{
      btnText
    }}</fg-button>
  </div>
</template>
<script>
export default {
  name: 'SendCard',
  props: {
    iconSrc: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '次へ',
    },
  },
};
</script>
<style lang="scss" scoped>
.send-card {
  width: 340px;
  height: 395px;
  background: $--color-white;
  border-radius: 6px;
  padding: 40px;
  text-align: center;
  color: $--color-primary;

  &-icon {
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  h3 {
    width: 220px;
    margin: 25px auto;
    font-weight: normal;
  }
}
</style>
