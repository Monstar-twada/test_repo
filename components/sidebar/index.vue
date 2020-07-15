<template>
  <div class="global-sidebar-wrapper">
    <div :class="['top-wrapper', isFirstIndex ? 'radius-br' : '']">
      <div class="logo">
        <img :src="require(`./img/logo-${logoName}.svg`)" alt="" />
      </div>
      <h5>株式会社ファーストグループ</h5>

      <div class="select-wrapper">
        <AsideSelector v-model="selectedResult" :list="selectList" />
      </div>
    </div>
    <v-list>
      <v-list-item-group ref="menu" v-model="index">
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :class="[
            i === index - 1 ? 'radius-br' : '',
            i === index + 1 ? 'radius-tr' : '',
          ]"
          @click="handleMenuClick"
        >
          <template v-slot:default="{ active }">
            <nuxt-link :to="item.link">
              <v-list-item-icon class="mr-4">
                <v-img
                  :src="
                    require(`./img/${active ? item.iconHover : item.icon}.svg`)
                  "
                ></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div :class="['bottom-space', isLastIndex ? 'radius-tr' : '']"></div>
  </div>
</template>

<script>
import AsideSelector from './AsideSelector'
import { managerMenuItems } from './menu-manager'
import { dashboardMenuItems } from './menu-dashboard'

export default {
  name: 'Sidebar',
  components: {
    AsideSelector,
  },
  data() {
    const isManager = this.$isManager
    return {
      selectedResult: 1,
      // item's index in menu
      index: -1,
      menuItems: isManager ? managerMenuItems : dashboardMenuItems,
      logoName: isManager ? 'manager' : 'dashboard',
      selectList: [
        {
          title: '営業管理',
        },
        {
          text: 'cars全店',
          value: 1,
        },
        {
          text: '関西エリア',
          value: 2,
        },
        {
          text: '関東エリア',
          value: 3,
        },
        {
          title: '店舗管理',
        },
        {
          text: 'cars奈良中央',
          value: 5,
        },
        {
          text: 'cars大阪',
          value: 6,
        },
        {
          text: 'cars足立',
          value: 7,
        },
      ],
    }
  },
  computed: {
    isFirstIndex() {
      return this.index === 0
    },
    isLastIndex() {
      return this.index === this.menuItems.length - 1
    },
  },
  watch: {
    selectedResult(val) {
      console.log('selectedResult change', val)
    },
    '$nuxt._route'() {
      this.resetRouteIndex()
    },
  },

  created() {
    this.resetRouteIndex()
  },

  methods: {
    resetRouteIndex() {
      const route = $nuxt._route
      const path = '/' + route.path.split('/')[1]
      this.index = this.menuItems.findIndex((item) => item.link === path)
    },
    handleMenuClick(e) {
      const tempIndex = this.index
      const timer = setTimeout(() => {
        this.index = tempIndex
        clearTimeout(timer)
      }, 0)
    },
  },
}
</script>
<style lang="scss">
.global-sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 210px;
  display: flex;
  flex-direction: column;
  // border-bottom-right-radius
  .radius-br {
    border-bottom-right-radius: 6px;
  }
  // border-top-right-radius
  .radius-tr {
    border-top-right-radius: 6px;
  }

  .top-wrapper {
    padding: 24px 0 20px;
    background: #fff;
    .logo {
      margin: 0 auto;
      width: 110px;
      img {
        max-width: 100%;
      }
    }
    h5 {
      margin: 25px 15px 7px 15px;
      color: $blue-100;
      font-weight: 400;
    }

    .select-wrapper {
      margin: 0 15px;
    }
  }

  a {
    display: flex;
    width: 100%;
    text-decoration: none;
  }

  .bottom-space {
    flex-grow: 1;
    background: #fff;
  }

  .v-list {
    padding: 0 !important;
    margin: 0 !important;
    background: none !important;

    .v-list-item__title {
      font-size: 14px !important;
      color: $blue-200 !important;
    }

    .v-list-item {
      background: $white-300;
      // remove black background when on click
      .v-ripple__container {
        display: none;
      }
    }

    .v-list-item--active {
      background: transparent !important;
      .v-list-item__title {
        color: $white-100 !important;
      }
      &::before {
        opacity: 0 !important;
      }
    }

    .theme--light.v-select .v-select__selection--comma {
      color: $blue-100 !important;
    }
  }
}
</style>
