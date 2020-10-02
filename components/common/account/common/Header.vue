<template>
  <div class="signin-header-wrapper">
    <Logo :logo-width="83" />
    <h1 class="signin-index-header-wrapper_head">
      {{ title }}
    </h1>
  </div>
</template>

<script>
import Logo from '~/components/common/logo/index'
export default {
  name: 'Header',
  components: {
    Logo,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.signin-header-wrapper {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 160px 1fr;
  align-items: center;
  &_head {
    font-size: 24px;
  }
}
</style>
