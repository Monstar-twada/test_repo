<template>
  <v-app :class="isCollapsed ? 'next-action-is-collapsed' : ''">
    <Sidebar />
    <div class="global-main-wrapper">
      <nuxt />
    </div>
    <NextAction v-model="isCollapsed" />
  </v-app>
</template>

<script>
import Sidebar from '~/components/siderbar/index'
import NextAction from '~/components/next-action/index'
export default {
  components: {
    Sidebar,
    NextAction,
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

body {
  background: url('~static/common/full.png') no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
}

.v-application {
  background: none !important;
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
