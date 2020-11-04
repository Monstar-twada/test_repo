<template>
  <div class="container"></div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  middleware: 'authenticated',
  layout: 'login',
  beforeCreate() {
    this.$router.push('/login/');
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
