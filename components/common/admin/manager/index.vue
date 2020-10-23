<template>
  <div class="admin-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <div class="tabs-nav">
      <fg-tabs>
        <fg-tabs-item name="企業情報管理">
          <Company />
        </fg-tabs-item>
        <fg-tabs-item name="店舗管理">
          <Shop />
        </fg-tabs-item>
        <fg-tabs-item name="スタッフ管理">
          <Staff />
        </fg-tabs-item>
      </fg-tabs>
    </div>
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
  width: 100%;
  background-color: transparent;
  .tabs-nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    .fg-tabs {
      width: 100%;
      margin-top: -70px;

      .fg-tabs-header {
        padding-left: 100px;
      }
    }
  }
}
</style>
