<template>
  <div class="container">
    <div>
      <h1 class="title">its just a sample to show the applied fonts</h1>
      <h2 class="subtitle">
        AdminConsole
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  middleware: 'authenticated',
  layout: 'login',
  mounted() {
    this.$router.push('/bi')
  },
}
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

.title {
  font-family: 'Yantramanav';
  display: block;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 50px;
  color: $blue-100;
}

.subtitle {
  font-family: 'Noto Sans JP';
  font-weight: 300;
  font-size: 25px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
