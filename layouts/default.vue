<template>
  <v-app
    :class="[
      'default-layout-container',
      isCollapsed ? 'next-action-is-collapsed' : '',
    ]"
  >
    <Sidebar :menu="menuList" />
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
      menuList: [
        {
          icon: 'bi',
          iconHover: 'bi-hover',
          link: '/bi',
          text: '経営状況',
        },
        {
          icon: 'ma',
          iconHover: 'ma-hover',
          link: '/ma',
          text: '集客',
        },
        {
          icon: 'customer',
          iconHover: 'customer-hover',
          link: '/customer',
          text: '顧客管理',
        },
        {
          icon: 'send',
          iconHover: 'send-hover',
          link: '/send',
          text: '送客',
        },
        {
          icon: 'setting',
          iconHover: 'setting-hover',
          link: '/admin',
          text: '管理',
        },
      ],
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
