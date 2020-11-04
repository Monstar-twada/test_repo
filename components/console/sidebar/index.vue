<template>
  <div class="console-sidebar-wrapper">
    <div :class="['top-wrapper', isFirstIndex ? 'radius-br' : '']">
      <div class="logo">
        <img :src="require(`./img/logo-console.svg`)" alt />
      </div>
    </div>
    <ul class="sidebar-list">
      <li
        v-for="(item, i) in menuItems"
        :key="i"
        class="sidebar-list-item"
        :class="[
          i === index - 1 ? 'radius-br' : '',
          i === index ? 'sidebar-list-item--active' : '',
          i === index + 1 ? 'radius-tr' : '',
        ]"
        @click="handleMenuClick"
      >
        <nuxt-link :to="item.link">
          <div class="sidebar-list-item__content">
            <h4 class="sidebar-list-item__title">{{ item.text }}</h4>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div :class="['bottom-space', isLastIndex ? 'radius-tr' : '']"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      collapsed: this.value,
      selectedResult: 8,
      // item's index in menu
      index: -1,
      menuItems: [
        {
          link: '/company_all',
          text: '契約企業一覧',
        },
        {
          link: '/template',
          text: 'テンプレート管理',
        },
        {
          link: '/staffs',
          text: 'スタッフ管理',
        },
      ],
    };
  },
  computed: {
    isFirstIndex() {
      return this.index === 0;
    },
    isLastIndex() {
      return this.index === this.menuItems.length - 1;
    },
    popupPosition() {
      return this.collapsed ? 'right' : '';
    },
  },
  watch: {
    selectedResult() {
      // console.log('selectedResult change', val)
    },
    $route() {
      this.resetRouteIndex();
    },
    value(val) {
      if (this.collapsed !== val) {
        this.collapsed = val;
      }
    },
    collapsed(val) {
      this.$emit('input', val);
    },
  },
  created() {
    this.resetRouteIndex();
  },
  methods: {
    resetRouteIndex() {
      const route = this.$route;
      const path = '/' + route.path.split('/')[1];
      this.index = this.menuItems.findIndex((item) => item.link === path);
    },
    handleMenuClick() {
      const tempIndex = this.index;
      const timer = setTimeout(() => {
        this.index = tempIndex;
        clearTimeout(timer);
      }, 0);
    },
  },
};
</script>

<style lang="scss">
@import '../../../assets/scss/contants';

@mixin transitionMixin($name) {
  transition: $name 0.3s ease-in-out;
}

.console-sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: $sideWidthNormal;
  display: flex;
  flex-direction: column;
  @include transitionMixin(width);
  white-space: nowrap;
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
    background: $--color-white;
    overflow: hidden;
    .logo {
      margin: 24px auto 0;
      width: 110px;
      @include transitionMixin(all);
      img {
        max-width: 100%;
      }
    }
  }

  .bottom-space {
    flex-grow: 1;
    background: $--color-white;
  }

  .sidebar-list-item__content {
    @include transitionMixin(all);
  }

  .sidebar-list {
    padding: 0 !important;
    margin: 0 !important;
    background: none !important;

    .sidebar-list-item__title {
      font-size: 14px !important;
      color: $--color-primary !important;
    }

    .sidebar-list-item {
      padding: 0;
      background: $--color-white;
      a {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
        text-decoration: none;
        box-sizing: border-box;
        padding: 0 16px;
      }
      // remove black background when on click
      .v-ripple__container {
        display: none;
      }
    }

    .sidebar-list-item--active {
      background: transparent !important;
      &::before {
        opacity: 0 !important;
      }
    }
  }
}
</style>
