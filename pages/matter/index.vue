<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <div class="breadcrumbs">
        <!-- <nuxt-link to="/" class="breadcrumbs_home">
          <v-img
            class="breadcrumbs_home-logo"
            :src="require('~/static/breadcrumbs/home.svg')"
          >
          </v-img>
        </nuxt-link> -->
        <v-breadcrumbs nuxt :items="items">
          <template v-slot:divider>
            <v-img :src="require('~/static/breadcrumbs/right.svg')"> </v-img>
          </template>
        </v-breadcrumbs>
      </div>
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar,
  },
  data: () => ({
    items: [
      {
        text: 'home',
        disabled: false,
        to: '/',
      },
      {
        icon: 'home',
        text: '案件管理',
        disabled: false,
        to: 'breadcrumbs_link_1',
      },
    ],
  }),
}
</script>
<style lang="scss">
.v-application {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.v-application--wrap {
  flex-direction: row !important;
}
</style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 0px;
  width: 100%;
  .breadcrumbs {
    &_home {
      height: 15px;
      width: 15px;
      &-logo {
        height: 15px;
        width: 15px;
      }
    }
  }
}
</style>
