<template>
  <div class="admin-body-container-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>店舗一覧</h2>
        <Pagination />
      </div>
      <v-data-table
        :headers="headers"
        :items="itemList"
        :items-per-page="itemsPerPage"
        :page.sync="currentPage"
        group-by="area"
        hide-default-footer
      >
        <template v-slot:item.shop_name="{ item }">
          <div>{{ item.shop_name }}</div>
        </template>
        <template v-slot:item.postcode="{ item }">
          <div class="align-left">{{ item.postcode }}</div>
          <div class="align-left">{{ item.address }}</div>
        </template>
        <template v-slot:item.service="{ item }">
          <ServiceIcons :item="item" />
        </template>
      </v-data-table>
    </div>
    <div class="right-wrapper">
      <CompanyInfo :item="currentItem" />
    </div>
  </div>
</template>

<script>
import ServiceIcons from './ServiceIcons'
import CompanyInfo from './CompanyInfo'
import Pagination from './Pagination'
export default {
  name: 'Shop',
  components: {
    ServiceIcons,
    CompanyInfo,
    Pagination,
  },
  data() {
    const item = {
      id: 10000001,
      shop_name: 'cars足立',
      postcode: '〒120-0011',
      address: '東京都足立区中央本町1-20-1',
      tel: '03-1234-1234',
      mail: 'aaaa@cars-enjoy.com',
      company_name: '株式会社ファーストグループ',
      company_katakana: 'カブシキガイシャファーストグループ',
    }

    const itemList = []
    for (let i = 0; i < 20; i++) {
      itemList.push({
        ...item,
        id: item.id + i,
      })
    }

    return {
      currentItem: {},
      headers: [
        {
          text: '店名',
          align: 'center',
          value: 'shop_name',
          sortable: false,
        },
        {
          text: '所在地',
          value: 'postcode',
          align: 'center',
          width: '200px',
          sortable: false,
        },
        { text: '電話番号', value: 'tel', align: 'center', sortable: false },
        {
          text: 'メールアドレス',
          value: 'mail',
          align: 'center',
          width: '180px',
          sortable: false,
        },
        {
          text: '導入サービス',
          value: 'service',
          align: 'center',
          sortable: false,
        },
      ],
      itemList,
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  created() {
    this.currentItem = this.itemList[0] || {}
  },
}
</script>

<style lang="scss">
.admin-body-container-wrapper {
  display: flex;
  .left-wrapper {
    flex: 1;
    margin-right: 30px;
    background: #fff;
    border-radius: 6px;
  }
  .right-wrapper {
    flex: 0 0 220px;
    background: #fff;
    border-radius: 6px;
    height: fit-content;
  }
  .header-wrapper {
    margin: 22px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: $--color-primary;
    }
  }
  .v-data-table {
    margin-top: 16px;
    th {
      height: 30px !important;
      background: $--color-background;
      white-space: nowrap;
      border: 0 !important;
      span {
        line-height: 30px;
        color: $--color-primary-placeholder;
        font-weight: 400;
      }
    }
    td {
      color: $--color-primary;
      font-size: 0.75rem !important;
      height: auto !important;
      padding: 15px !important;
      border-bottom-color: $--color-border !important;
      .align-left {
        text-align: left;
      }
    }
  }
}
</style>
