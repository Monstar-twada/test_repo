<template>
  <header class="breadcrumbs-container">
    <div class="breadcrumbs-wrapper">
      <div class="fg-breadcrumbs">
        <li v-for="(item, i) in items" :key="i">
          <fg-breadcrumbs-item :item="item" :final-flg="i === items.length - 1">
            <template v-if="item.text === 'home'">
              <i class="icon-home"></i>
            </template>
            <template v-else>{{ item.text }}</template>
          </fg-breadcrumbs-item>
        </li>
      </div>
      <UserInfo :task="task" />
    </div>
    <div class="page-title-wrapper">
      <div class="left-wrapper">
        <i class="title-prefix-icon">
          <img :width="iconWidth" :src="require('./img/' + titleImage)" />
        </i>
        <h1 class="d-inline">{{ page }}</h1>
        <h2 class="d-inline">{{ subTitle }}</h2>
        <slot name="left"></slot>
      </div>
      <div class="right-wrapper">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import UserInfo from './user-info/index'
export default {
  components: {
    UserInfo,
  },
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return []
      },
    },
    page: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    titleImage: {
      type: String,
      default: 'result.svg',
    },
    iconWidth: {
      type: [String, Number],
      default: 22,
    },
    task: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    items() {
      return [
        {
          text: 'home',
        },
        ...this.breadcrumbs,
      ]
    },
  },
}
</script>

<style lang="scss">
header.breadcrumbs-container {
  margin-top: 28px;
  padding: 0;

  .breadcrumbs-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .v-breadcrumbs__item {
      color: $--color-background !important;
    }

    .icon-home {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url('./img/home.svg') no-repeat 0 0;
      background-size: cover;
    }

    .icon-divider {
      display: inline-block;
      width: 7px;
      height: 11px;
      background: url('./img/right.svg') no-repeat 0 0;
      background-size: cover;
    }
  }

  .page-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    margin-bottom: 30px;

    .left-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .title-prefix-icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 10px;
        height: 24px;
        width: 30px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      h1 {
        color: $--color-white;
        display: flex;
        width: max-content;
      }

      h2 {
        margin: 5px 0 0 10px;
        color: $--color-white;
        font-size: 20px;
      }
    }

    .right-wrapper {
      display: flex;
      align-items: center;
    }
  }
}
</style>
