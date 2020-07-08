<template>
  <v-app class="background">
    <Sidebar />
    <nuxt />
  </v-app>
</template>
<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar,
  },
}
</script>
<style lang="scss">
.background {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  .container {
    padding: 0px !important;
  }
}
.v-application--wrap {
  flex-direction: row !important;
}
</style>
