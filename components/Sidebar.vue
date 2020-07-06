<template>
  <v-navigation-drawer class="sidebar">
    <div class="sidebar_container">
      <div class="sidebar_container_top p20">
        <v-img
          class="sidebar_container_top_logo"
          :src="require('~/static/common/logo.svg')"
        >
        </v-img>
        <h5>株式会社ファーストグループ</h5>
        <v-select
          background-color="#F2F6FA"
          height="35"
          class="sidebar_container_select ml10 mr10"
          label="cars足立"
          dense
          solo
          :items="items"
        >
        </v-select>
      </div>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :ref="`list${i}`"
            @click="clickEvent"
          >
            <template v-slot:default="{ active }">
              <v-list-item-icon class="mr-4">
                <v-img
                  v-if="!active"
                  :src="require(`~/static/sidebar/${item.icon}.svg`)"
                ></v-img>
                <v-img
                  v-else
                  :src="require(`~/static/sidebar/${item.iconHover}.svg`)"
                ></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="space"></div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  // props: {
  //   source: String,
  // },
  name: 'Sidebar',
  // components: {},
  data: () => ({
    drawer: null,
    left: true,
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    items: [
      {
        icon: 'result',
        iconHover: 'result-hover',
        text: '案件管理',
      },
      {
        icon: 'assessment',
        iconHover: 'assessment-hover',
        text: '査定',
      },
      {
        icon: 'customer',
        iconHover: 'customer-hover',
        text: '顧客管理',
      },
      {
        icon: 'matching',
        iconHover: 'matching-hover',
        text: 'マッチング',
      },
      {
        icon: 'setting',
        iconHover: 'setting-hover',
        text: '管理',
      },
    ],
    model: 1,
  }),

  methods: {
    clickEvent() {
      console.log('dom', this.$refs)
    },
  },
}
</script>
<style lang="scss">
.v-navigation-drawer {
  background-color: transparent !important;
  max-width: 210px !important;
  height: 800px !important;
}
.v-input__slot {
  box-shadow: none !important;
  .v-label {
    color: $blue-100 !important;
  }
}

.v-list {
  padding: 0 !important;
  margin: 0 !important;
}

.v-list-item {
  background-color: $white-300 !important;
}
.v-list-item__title {
  font-size: 14px !important;
  color: $blue-200 !important;
}
.v-list-item--active {
  background-color: transparent !important;
  .v-list-item__title {
    color: $white-100 !important;
  }

  &::before {
    opacity: 0 !important;
  }
}
.v-list-item__content {
  //color: $blue-100 !important;
}
.theme--light.v-select .v-select__selection--comma {
  color: $blue-100 !important;
}
</style>
<style scoped lang="scss">
.sidebar {
  //padding-top: 25px;
  &_container {
    &_top {
      background-color: $white-300;
      &_logo {
        width: 110px;
        height: 75px;
        margin: 0 auto;
      }
      h5 {
        margin-top: 28px;
        padding-left: 10px;
        color: $blue-100;
        margin-bottom: 7px;
        font-weight: 400;
      }
    }
    .space {
      width: 100%;
      height: 300px;
      background: $white-300;
    }
  }
}
</style>
