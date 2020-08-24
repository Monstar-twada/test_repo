<template>
  <div class="admin-body-container-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>店舗一覧</h2>
        <div class="admin-btn">
          <v-img
            :max-width="105"
            :max-height="30"
            :src="require(`./img/area-btn.svg`)"
            @click="moveToForm"
          ></v-img>
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
        <template v-slot:item.manager="{ item }">
          <div class="manager-column">
            <v-avatar :size="24">
              <img :src="require(`./img/${item.manager.image}.svg`)" alt="" />
            </v-avatar>
            <p>
              {{ item.manager.name }}
              <span>{{ item.manager.other }}</span>
            </p>
          </div>
        </template>
        <template v-slot:item.manager="{ item }">
          <div class="manager-column">
            <v-avatar :size="24">
              <img :src="require(`./img/${item.manager.image}.svg`)" alt="" />
            </v-avatar>
            <p>
              {{ item.manager.name }}
              <span>{{ item.manager.other }}</span>
            </p>
          </div>
        </template>
        <template v-slot:item.editBtn="{ item }">
          <v-img
            class="admin-btn"
            :src="require('./img/btn-edit.svg')"
            @click="moveToEdit(item.id)"
          >
          </v-img>
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
      manager: {
        image: 'person-default',
        name: '谷口広大',
        other: '(他1名)',
      },
      staffAmount: 4,
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
      manager: {
        image: 'person-default',
        name: '谷口広大',
        other: '(他1名)',
      },
      staffAmount: 4,
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
          text: 'マネージャー',
          value: 'manager',
          align: 'center',
          sortable: false,
        },
        {
          text: 'スタッフ数',
          value: 'staffAmount',
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
.admin-body-container-wrapper {
  width: 100%;
  display: flex;
  .admin-btn {
    cursor: pointer;
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
      color: $blue-200;
    }
  }
  .v-data-table {
    margin-top: 16px;
    th {
      height: 30px !important;
      background: $white-100;
      white-space: nowrap;
      border-bottom: 1px solid $gray-100 !important;
      span {
        line-height: 30px;
        color: $blue-500;
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
          background-color: $white-100;
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
      color: $blue-200;
      font-size: 0.75rem !important;
      height: auto !important;
      padding: 15px !important;
      border-bottom-color: $gray-100 !important;
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
