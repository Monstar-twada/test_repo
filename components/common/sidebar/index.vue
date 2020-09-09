<template>
  <div class="global-sidebar-wrapper">
    <button class="sidebar-control-button" @click="collapsed = !collapsed">
      <fg-icon name="d-arrow-left"></fg-icon>
    </button>
    <div :class="['top-wrapper', isFirstIndex ? 'radius-br' : '']">
      <div class="logo">
        <img :src="require(`./img/logo-${logoName}.svg`)" alt />
      </div>
      <div class="company">株式会社ファーストグループ</div>

      <div class="select-wrapper">
        <fg-select
          v-model="selectedResult"
          :items="selectList"
          theme="light-blue"
          size="medium"
          item-prefix="- "
          :offset-left="24"
          :popup-position="popupPosition"
        >
          <template v-slot:prefix>
            <img :src="require('./img/icon-shop-select.svg')" alt="" />
          </template>
        </fg-select>
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
              <v-list-item-icon>
                <img
                  :width="item.width"
                  :src="
                    require(`./img/${active ? item.iconHover : item.icon}.svg`)
                  "
                />
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
export default {
  props: {
    value: Boolean,
    menuItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    const isManager = this.$isManager
    const isConsole = this.$isConsole
    return {
      collapsed: this.value,
      selectedResult: 8,
      // item's index in menu
      index: -1,
      logoName: isManager ? 'manager' : isConsole ? 'console' : 'dashboard',
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
        {
          text: 'cars天理',
          value: 8,
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
    popupPosition() {
      return this.collapsed ? 'right' : ''
    },
  },
  watch: {
    selectedResult(val) {
      console.log('selectedResult change', val)
    },
    $route() {
      this.resetRouteIndex()
    },
    value(val) {
      if (this.collapsed !== val) {
        this.collapsed = val
      }
    },
    collapsed(val) {
      this.$emit('input', val)
    },
  },
  created() {
    this.resetRouteIndex()
  },
  methods: {
    resetRouteIndex() {
      const route = this.$route
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
@import '../../../assets/scss/contants';

@mixin transitionMixin($name) {
  transition: $name 0.3s ease-in-out;
}

.global-sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: $sideWidthNormal;
  display: flex;
  flex-direction: column;
  @include transitionMixin(width);
  white-space: nowrap;
  .sidebar-control-button {
    position: absolute;
    z-index: 1;
    top: 6px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ebf1f8;
    border: 0;
    width: 24px;
    height: 16px;
    border-radius: 8px 0 0 8px;
    outline: none;
  }
  // border-bottom-right-radius
  .radius-br {
    border-bottom-right-radius: 6px;
  }
  // border-top-right-radius
  .radius-tr {
    border-top-right-radius: 6px;
  }

  .top-wrapper {
    padding-bottom: 15px;
    background: #fff;
    overflow: hidden;
    .company {
      margin: 26px 15px 0 15px;
      color: $--color-primary-active;
      font-weight: 400;
      font-size: 10px;
      @include transitionMixin(all);
      height: 12px;
      line-height: 12px;
      overflow: hidden;
    }
    .logo {
      margin: 24px auto 0;
      width: 110px;
      @include transitionMixin(all);
      img {
        max-width: 100%;
      }
    }
    .select-wrapper {
      margin: 7px 15px 0;
      height: 35px;
      @include transitionMixin(all);
      .fg-input {
        @include transitionMixin(all);
        .__l {
          @include transitionMixin(all);
        }
        .__r {
          overflow: hidden;
        }
      }
    }
  }

  .bottom-space {
    flex-grow: 1;
    background: #fff;
  }

  .v-list-item__content {
    @include transitionMixin(all);
  }

  .v-list {
    padding: 0 !important;
    margin: 0 !important;
    background: none !important;

    .v-list-item__title {
      font-size: 14px !important;
      color: $--color-primary !important;
    }

    .v-list-item {
      background: $--color-white;
      padding: 0;
      a {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
        text-decoration: none;
        box-sizing: border-box;
        padding: 0 16px;
        .v-list-item__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: auto;
          margin: 0 12px 0 0;
          width: 24px;
          height: 24px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      // remove black background when on click
      .v-ripple__container {
        display: none;
      }
    }

    .v-list-item--active {
      background: transparent !important;
      .v-list-item__title {
        color: $--color-background !important;
      }
      &::before {
        opacity: 0 !important;
      }
    }
  }
}

.is-menu-collapsed {
  .global-sidebar-wrapper {
    width: $sideWidthCollapsed;
    .sidebar-control-button {
      .fg-icon {
        transform: rotate(180deg);
      }
    }
    .top-wrapper {
      .logo {
        margin-top: 36px;
        width: 40px;
      }
      .company {
        height: 0;
        opacity: 0;
      }
      .select-wrapper {
        margin: 7px -2px 0;
        .fg-input {
          input {
            color: transparent;
          }
          .__l {
            left: 21px;
          }
          .__r {
            width: 0;
          }
        }
      }
    }
  }
}
</style>
