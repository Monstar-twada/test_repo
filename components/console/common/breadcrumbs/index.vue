<template>
  <header class="breadcrumbs-container">
    <div class="breadcrumbs-wrapper">
      <v-breadcrumbs :items="items" class="pa-0">
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
      <UserInfo :task="task" />
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
      color: #333 !important;
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
}
</style>
