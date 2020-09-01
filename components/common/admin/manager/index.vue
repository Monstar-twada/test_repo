<template>
  <div class="admin-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    >
      <template v-slot:right>
        <div class="tap-nav">
          <div>
            <v-tabs v-model="tab" background-color="transparent" dark>
              <v-tab v-for="item in tabs" :key="item.tab">
                {{ item.tab }}
              </v-tab>
            </v-tabs>
          </div>
        </div>
        <div v-if="tab === 0" class="import-icon">
          <img :src="require('./img/import-btn.svg')" />
        </div>
      </template>
    </Breadcrumbs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Company />
      </v-tab-item>
      <v-tab-item>
        <Shop />
      </v-tab-item>
      <v-tab-item>
        <Staff />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Company from './Company'
import Shop from './Shop'
import Staff from './Staff'
import Breadcrumbs from '~/components/common/breadcrumbs/index'

export default {
  components: {
    Breadcrumbs,
    Company,
    Shop,
    Staff,
  },
  data() {
    return {
      page: '管理',
      breadcrumbs: [
        {
          text: '管理',
        },
      ],
      tab: null,
      tabs: [
        {
          tab: '企業情報管理',
          content: 'aaaa',
        },
        {
          tab: '店舗管理',
          content: 'bbbb',
        },
        {
          tab: 'スタッフ管理',
          content: 'bbbb',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.admin-container {
  max-width: 1120px;
  width: 100%;
  background-color: transparent;
  .right-wrapper {
    width: 85% !important;
  }
  .tap-nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    .v-tabs {
      padding: 0;
      font-size: 14px;
      font-weight: bold;
      .v-tab {
        font-size: 14px;
        color: $white-300 !important;
      }
    }
  }
  .v-tabs-items {
    width: 100%;
    border-radius: 6px;
    background-color: transparent !important;
  }
}
</style>
