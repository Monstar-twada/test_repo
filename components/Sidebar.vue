<template>
  <v-navigation-drawer class="sidebar">
    <div class="sidebar_container">
      <v-img
        class="sidebar_container_logo"
        :src="require('~/static/common/logo.svg')"
      >
      </v-img>
      <h5>株式会社ファーストグループ</h5>
      <v-select
        background-color="#F2F6FA"
        height="35"
        class="sidebar_container_select"
        label="cars足立"
        dense
        solo
        :items="items"
      >
      </v-select>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-img
                :src="require(`~/static/sidebar/${item.icon}.svg`)"
              ></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
        text: '案件管理',
      },
      {
        icon: 'assessment',
        text: '査定',
      },
      {
        icon: 'customer',
        text: '顧客管理',
      },
      {
        icon: 'matching',
        text: 'マッチング',
      },
      {
        icon: 'setting',
        text: '管理',
      },
    ],
    model: 1,
  }),
}
</script>
<style lang="scss">
.v-navigation-drawer {
  max-width: 210px !important;
}
.v-input__slot {
  box-shadow: none !important;
  .v-label {
    color: $blue-100 !important;
  }
}
.v-list-item__content {
  color: $blue-100 !important;
}
.theme--light.v-select .v-select__selection--comma {
  color: $blue-100 !important;
}
</style>
<style scoped lang="scss">
.sidebar {
  padding-top: 25px;
  &_container {
    padding: 0px 13px;
    &_logo {
      width: 110px;
      height: 75px;
      margin: 0 auto;
    }
    h5 {
      margin-top: 28px;
      color: $blue-100;
      margin-bottom: 7px;
      font-weight: 400;
    }
    &_select {
    }
  }
}
</style>
