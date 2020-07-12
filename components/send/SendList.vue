<template>
  <div class="list page mt30 mb30">
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="table.items.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
    <v-data-table
      :headers="table.headers"
      :items="table.items"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.id="{ item }">
        <div class="id">
          <nuxt-link to="/matter/detail">{{ item.id }}</nuxt-link>
        </div>
      </template>
      <template v-slot:item.customerName="{ item }">
        <div class="customerName">
          <v-avatar :size="36">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="customerName--content">
            <span>{{ item.customerName[0] }}</span>
            <span>{{ item.customerName[1] }}</span>
          </div>
        </div>
      </template>
      <template v-slot:item.carInfo="{ item }">
        <div class="carInfo">
          {{ item.carInfo[0] }}<br />{{ item.carInfo[1] }}
          <div class="carInfo--badge">{{ item.carInfo[2] }}</div>
        </div>
      </template>
    </v-data-table>
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="table.items.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
  </div>
</template>

<script>
import PaginationComponent from '~/components/common/PaginationComponent.vue'
export default {
  name: 'SendList',
  components: {
    PaginationComponent,
  },
  data: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    table: {
      headers: [
        { text: '案件ID', value: 'id', sortable: true },
        { text: '顧客名', value: 'customerName', sortable: true },
        { text: '連絡先情報', value: 'tel', sortable: false },
        { text: '所有車', value: 'carInfo', sortable: false },
        { text: '登録ナンバー', value: 'number', sortable: false },
        { text: '依頼種別', value: 'kind', sortable: false },
        { text: 'ステータス', value: 'status', sortable: false },
      ],
      items: [
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '1234567890',
          customerName: ['米田 道春', '（31歳）'],
          tel: '080-1234-1234',
          carInfo: ['トヨタ', 'プリウス', '+2'],
          number: '足立 310 あ 1234',
          kind: '購入',
          status: '送客中',
        },
      ],
    },
  }),
  methods: {
    updatePageNumber(newPage) {
      this.currentPage = newPage
    },
  },
}
</script>
<style lang="scss">
.list {
  .theme--light.v-pagination {
    justify-content: flex-end !important;
    display: inline-flex;
    .v-pagination__navigation {
      box-shadow: none !important;
      width: 28px;
      height: 24px;
    }
    .v-pagination__item {
      display: inline-block;
      font-size: 14px !important;
      font-weight: bold !important;
      min-width: 16px !important;
      width: 20px !important;
      height: 20px !important;
      line-height: 20px !important;
      background: none !important;
      box-shadow: none !important;
      color: $white-300 !important;
      border-radius: 0px !important;
      transition: none !important;
    }
    .v-pagination__item--active {
      border-bottom: 1px $white-300 solid !important;
    }

    .v-pagination__item--active .primary {
      border-color: none !important;
    }
  }
  .v-data-table {
    table {
      border-radius: 6px !important;
      border-collapse: separate !important;
      border-spacing: 0 1em !important;
      thead {
        tr {
          th {
            color: $blue-200 !important;
            text-align: center !important;
            &:first-child {
              border-radius: 6px 0 0 0 !important;
            }
            &:last-child {
              border-radius: 0 6px 0 0 !important;
            }
          }
        }
      }
      tbody {
        tr {
          height: 60px !important;
          &:nth-child(even) {
            background-color: $white-100;
          }
          td {
            text-align: center;
            color: $blue-200 !important;
            border-bottom: none !important;
            font-size: 12px !important;
            .id {
              a {
                text-decoration: none;
                color: $blue-100;
              }
            }
            .customerName {
              display: flex;
              .v-avatar {
                margin-right: 10px;
              }
              &--content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                span:first-child {
                  font-size: 14px;
                  font-weight: bold;
                }
                span:last-child {
                  font-size: 10px;
                  font-weight: bold;
                }
              }
            }
            .carInfo {
              position: relative;
              width: 100px;
              text-align: left;
              &--badge {
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 1px 8px;
                border-radius: 10px;
                background-color: #1e5199;
                font-size: 12px;
                color: $white-300;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.list {
  width: 100%;
  &__paging {
    width: 100%;
    padding-top: 18.5px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    &--info {
      width: 100%;
      display: flex;
      align-items: baseline;
      p {
        margin-bottom: 0;
        color: $white-300;
        font-size: 14px;
        &.total {
          margin-right: 4.3px;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
