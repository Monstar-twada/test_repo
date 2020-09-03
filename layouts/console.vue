<template>
  <v-app class="default-console-layout-container">
    <Sidebar />
    <div class="console-main-wrapper">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/console/sidebar/index'

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isCollapsed: false,
      isMenuCollapsed: false,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/contants';

.default-console-layout-container {
  background: url('~static/console/full.png') no-repeat top center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  overflow: auto;
  height: 100%;

  .console-main-wrapper {
    margin: 0 $sideSpaceWidth 0 $sideWidthNormal + $sideSpaceWidth;
    padding-bottom: $sideSpaceWidth;
    /*width: 100%;*/
    transition: margin 0.3s ease-in-out;
  }
}
</style>
