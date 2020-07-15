<template>
  <v-app
    :class="[
      'default-layout-container',
      isCollapsed ? 'next-action-is-collapsed' : '',
    ]"
  >
    <Sidebar />
    <div class="global-main-wrapper">
      <nuxt />
    </div>
    <NextAction v-model="isCollapsed" />
    <OnePointAdvice />
  </v-app>
</template>

<script>
import Sidebar from '~/components/siderbar/index'
import NextAction from '~/components/next-action/index'
import OnePointAdvice from '~/components/one-point-advice/index'
export default {
  components: {
    Sidebar,
    NextAction,
    OnePointAdvice,
  },
  data() {
    return {
      isCollapsed: false,
    }
  },
}
</script>

<style lang="scss">
$space: 60px;
$sideWidth: 210px;

.default-layout-container {
  background: url('~static/common/full.png') no-repeat top center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
}

.global-main-wrapper {
  margin: 0 $sideWidth + $space;
  padding-bottom: $space;
  width: 100%;
  transition: margin-right 0.3s ease-in-out;
}

.next-action-is-collapsed {
  .global-main-wrapper {
    margin-right: $space + 12;
  }
}
</style>
