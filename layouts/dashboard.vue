<template>
  <v-app class="default-dashboard-layout-container">
    <Sidebar :menu-items="menuItems" />
    <div class="global-main-wrapper">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/sidebar/index'
import { dashboardMenuItems } from '~/components/sidebar/menu-dashboard'
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      menuItems: dashboardMenuItems,
    }
  },
}
</script>

<style lang="scss">
$space: 60px;
$sideWidth: 210px;

.default-dashboard-layout-container {
  background: url('~static/common/full.png') no-repeat top center !important;
  background-size: cover !important;
  background-attachment: fixed !important;

  .global-main-wrapper {
    margin: 0 $space 0 $sideWidth + $space;
    padding-bottom: $space;
    width: 100%;
  }
}
</style>
