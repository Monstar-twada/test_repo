<template>
  <div class="list page mt10 mb10">
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="table.items.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
    <v-data-table
      :headers="table.headers"
      :items="table.items"
      :items-per-page="10"
      :page.sync="page"
      hide-default-footer
      class="itemlistTable"
    >
      <template v-slot:item.id="{ item }">
        <div class="id">
          <nuxt-link to="/matter/detail">{{ item.id }}</nuxt-link>
        </div>
      </template>
      <template v-slot:item.createdAt="{ item }">
        <div class="createdAt">
          {{ item.createdAt[0] }}<br />{{ item.createdAt[1] }}
        </div>
      </template>
      <template v-slot:item.updatedAt="{ item }">
        <div class="updatedAt">
          {{ item.updatedAt[0] }}<br />{{ item.updatedAt[1] }}
        </div>
      </template>
      <template v-slot:item.customer="{ item }">
        <div class="customer">
          <v-avatar :size="36">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <span>{{ item.customer[1] }}</span>
          <span>{{ item.customer[2] }}</span>
        </div>
      </template>
      <template v-slot:item.charge="{ item }">
        <div class="charge">{{ item.charge[0] }}<br />{{ item.charge[1] }}</div>
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
  name: 'MatterResult',
  components: {
    PaginationComponent,
  },
  data: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    table: {
      headers: [
        { text: '案件ID', value: 'id', sortable: true },
        { text: '登録日', value: 'createdAt', sortable: true },
        { text: '最終更新日時', value: 'updatedAt', sortable: true },
        { text: 'カテゴリー', value: 'category', sortable: false },
        { text: 'サブカテゴリー', value: 'subCategory', sortable: false },
        { text: '顧客名', value: 'customer', sortable: true },
        { text: '連絡先電話番号', value: 'phone', sortable: false },
        { text: '担当者', value: 'charge', sortable: false },
      ],
      items: [
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
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
