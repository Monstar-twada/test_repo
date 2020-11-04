<template>
  <div class="default-console-layout-container">
    <Sidebar />
    <div class="console-main-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/console/sidebar/index';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isCollapsed: false,
      isMenuCollapsed: false,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/contants';

.default-console-layout-container {
  background: linear-gradient(135deg, #eee, #f9f9f9);
  overflow: auto;
  min-height: 100vh;

  .console-main-wrapper {
    margin: 0 $sideSpaceWidth 0 $sideWidthNormal + $sideSpaceWidth;
    padding-bottom: $sideSpaceWidth;
    /*width: 100%;*/
    transition: margin 0.3s ease-in-out;
  }
}
</style>
