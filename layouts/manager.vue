<template>
  <v-app
    :class="[
      'default-manager-layout-container',
      { 'next-action-is-collapsed': isCollapsed },
      { 'is-menu-collapsed': isMenuCollapsed },
    ]"
  >
    <Sidebar v-model="isMenuCollapsed" :menu-items="menuItems" />
    <div class="global-main-wrapper">
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

export default {
  components: {
    Sidebar,
    // NextAction,
    // OnePointAdvice,
  },
  data() {
    return {
      isCollapsed: false,
      isMenuCollapsed: false,
      menuItems: managerMenuItems,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/contants';

.default-manager-layout-container {
  background: url('~static/common/full.png') no-repeat top center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  overflow: auto;
  height: 100%;

  .global-main-wrapper {
    margin: 0 $sideSpaceWidth 0 $sideWidthNormal + $sideSpaceWidth;
    padding-bottom: $sideSpaceWidth;
    /*width: 100%;*/
    transition: margin 0.3s ease-in-out;
  }

  // &.next-action-is-collapsed {
  // .global-main-wrapper {
  // margin-right: $sideSpaceWidth + 12;
  // }
  // }

  &.is-menu-collapsed {
    .global-main-wrapper {
      margin-left: $sideWidthCollapsed + $sideSpaceWidth;
    }
  }
}
</style>
