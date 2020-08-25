<template>
  <v-app
    :class="[
      'default-manager-layout-container',
      isCollapsed ? 'next-action-is-collapsed' : '',
    ]"
  >
    <Sidebar :menu-items="menuItems" />
    <div class="global-main-wrapper" :style="{ width }">
      <nuxt />
    </div>
    <!-- ProtoType版表示しない--->
    <!-- <NextAction v-model="isCollapsed" /> -->
    <!-- <OnePointAdvice /> -->
  </v-app>
</template>

<script>
import Sidebar from '~/components/common/sidebar/index'
// import NextAction from '~/components/manager/next-action/index'
// import OnePointAdvice from '~/components/manager/one-point-advice/index'
import { managerMenuItems } from '~/components/common/sidebar/menu-manager'
const SIDE_WIDTH = 210
const SPACE_WIDTH = 60
export default {
  components: {
    Sidebar,
    // NextAction,
    // OnePointAdvice,
  },
  data() {
    return {
      isCollapsed: false,
      menuItems: managerMenuItems,
      width: '100%',
    }
  },
  mounted() {
    this.initWidth()
    window.addEventListener('resize', this.onWinResize, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWinResize, false)
  },
  methods: {
    initWidth() {
      this.width = window.innerWidth - SIDE_WIDTH - SPACE_WIDTH * 2 + 'px'
    },
    onWinResize() {
      this.initWidth()
    },
  },
}
</script>

<style lang="scss">
$space: 60px;
$sideWidth: 210px;

.default-manager-layout-container {
  background: url('~static/common/full.png') no-repeat top center !important;
  background-size: cover !important;
  background-attachment: fixed !important;

  .global-main-wrapper {
    margin: 0 $space 0 $sideWidth + $space;
    padding-bottom: $space;
    /*width: 100%;*/
    transition: margin-right 0.3s ease-in-out;
  }

  // &.next-action-is-collapsed {
  // .global-main-wrapper {
  // margin-right: $space + 12;
  // }
  // }
}
</style>
