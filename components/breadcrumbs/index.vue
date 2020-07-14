<template>
  <header class="breadcrumbs-container">
    <div class="breadcrumbs-wrapper">
      <v-breadcrumbs :items="breadcrumbs" class="pa-0">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            <i v-if="item.text === 'home'" class="icon-home"></i>
            <template v-else>{{ item.text }}</template>
          </v-breadcrumbs-item>
        </template>
        <template v-slot:divider>
          <i class="icon-divider"></i>
        </template>
      </v-breadcrumbs>
      <UserInfo />
    </div>
    <div class="page-title-wrapper">
      <div class="left-wrapper">
        <v-img
          class="title-icon mr-2"
          :src="require('~/static/breadcrumbs/' + titleImage)"
        />
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
  },
  data() {
    return {
      isManager: true,
    }
  },
  methods: {},
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
      color: $white-100 !important;
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
      justify-content: flex-start;

      .title-icon {
        margin-top: 8px;
        height: 22px;
        max-width: 22px;
      }

      h1 {
        color: $white-300;
        display: flex;
      }

      h2 {
        margin: 5px 0 0 10px;
        color: $white-300;
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
