<template>
  <v-img
    class="logo"
    :src="require(`~/components/common/sidebar/img/logo-${logoName}.svg`)"
    :width="logoWidth"
  />
</template>
<script>
export default {
  name: 'Logo',
  props: {
    logoWidth: {
      type: Number,
      default: 160,
    },
  },
  data() {
    return {
      logoName: this.$isManager
        ? 'manager'
        : this.$isConsole
        ? 'console'
        : 'dashboard',
    }
  },
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  margin: 0 auto;
}
</style>
