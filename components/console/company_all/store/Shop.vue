<template>
  <div class="console-shop-container-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>店舗一覧<span> [ 岡田自動車株式会社 ]</span></h2>
        <div class="shop-btn">
          <p>店舗追加</p>
          <fg-button circle type="primary" icon="plus"></fg-button>
        </div>
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
        <template v-slot:item.editBtn="{ item }">
          <fg-button
            width="63"
            border
            size="mini"
            prefix-icon="edit"
            @click="moveToEdit(item.id)"
          >
            編集
          </fg-button>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import ServiceIcons from './ServiceIcons'
export default {
  name: 'Shop',
  components: {
    ServiceIcons,
  },
  data() {
    const item = {
      id: 10000001,
      area: '東京エリア',
      shop_name: 'cars足立',
      postcode: '〒120-0011',
      address: '東京都足立区中央本町1-20-1',
      tel: '03-1234-1234',
      mail: 'aaaa@cars-enjoy.com',
      company_name: '株式会社ファーストグループ',
      company_katakana: 'カブシキガイシャファーストグループ',
    }
    const item2 = {
      id: 10000001,
      area: '奈良エリア',
      shop_name: 'cars足立',
      postcode: '〒120-0011',
      address: '東京都足立区中央本町1-20-1',
      tel: '03-1234-1234',
      mail: 'aaaa@cars-enjoy.com',
      company_name: '株式会社ファーストグループ',
      company_katakana: 'カブシキガイシャファーストグループ',
    }

    const itemList = []
    for (let i = 0; i < 4; i++) {
      itemList.push({
        ...item,
        id: item.id + i,
      })
    }
    for (let i = 0; i < 4; i++) {
      itemList.push({
        ...item2,
        id: item2.id + i,
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
        {
          text: '',
          value: 'editBtn',
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
  methods: {
    moveToForm() {
      this.$router.push({
        path: `/admin/area/new`,
      })
    },
    moveToEdit(id) {
      this.$router.push({
        path: `/admin/area/edit/${id}`,
      })
    },
  },
}
</script>

<style lang="scss">
.console-shop-container-wrapper {
  width: 100%;
  display: flex;
  .shop-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      font-size: 12px;
      font-weight: bold;
      margin-right: 12px;
    }
  }
  .left-wrapper {
    flex: 1;
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
      span {
        font-size: 12px;
      }
    }
  }
  .v-data-table {
    margin-top: 16px;
    th {
      height: 30px !important;
      background-color: #f2f2f2;
      white-space: nowrap;
      border-bottom: 1px solid $--color-border !important;
      span {
        line-height: 30px;
        color: $--color-primary-placeholder;
        font-weight: 400;
      }
    }
    tr {
      &.v-row-group__header {
        height: 34px !important;
        border-bottom: none !important;
        & > td {
          border-bottom: none !important;
          height: 34px !important;
          background-color: #f2f2f2;
          font-size: 12px;
          padding: 0 18px !important;
          font-weight: bold;
          button:last-child {
            display: none;
          }
        }
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
      .manager-column {
        width: 100%;
        display: flex;
        align-items: center;
        .v-avatar {
          margin-right: 10px;
        }
        p {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0;
          span {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
