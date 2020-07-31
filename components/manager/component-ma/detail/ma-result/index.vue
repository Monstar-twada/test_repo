<template>
  <div class="ma-list">
    <GlobalPagination
      v-model="currentPage"
      class="mb15"
      :total="itemList.total"
      :page-size="itemList.limit"
    />
    <v-data-table
      :headers="headers"
      :items="itemList.results"
      :items-per-page="itemList.limit"
      :page.sync="currentPage"
      hide-default-footer
      @click:row="
        (item) => {
          $router.push({
            path: '/customer/detail/',
            query: { id: item.customerId },
          })
        }
      "
    >
      <template v-slot:item.name="{ item }">
        <div class="user">
          <v-avatar size="38" class="user__image">
            <v-img :src="require('~/static/customer/profile-edit.svg')"></v-img>
          </v-avatar>
          <div class="user__name ml10">
            <h3>{{ item.lastName }}&nbsp;&nbsp;{{ item.firstName }}</h3>
            <span>({{ item.age ? item.age : 'ー' }}歳)</span>
          </div>
        </div>
      </template>
      <template v-slot:item.address="{ item }">
        <div class="address">
          <h4>{{ item.city }}{{ item.address1 }}{{ item.address2 }}</h4>
        </div>
      </template>
      <template v-slot:item.maker="{ item }">
        <div class="car">
          <h4>{{ item.maker }}</h4>
          <h4>{{ item.class }}</h4>
        </div>
      </template>
      <template v-slot:item.tel="{ item }">
        <div class="tel">
          <h4 class="fixed-tel">{{ item.phoneNumber }}</h4>
          <h4 class="mobile-tel">{{ item.cellPhoneNumber }}</h4>
        </div>
      </template>
      <template v-slot:item.call="{ item }">
        <BooleanFlg :flg="item.statusCall === '1'" />
      </template>
      <template v-slot:item.dm="{ item }">
        <BooleanFlg :flg="item.statusDM === '1'" />
      </template>
      <template v-slot:item.sms="{ item }">
        <BooleanFlg :flg="item.statusSMS === '1'" />
      </template>
      <template v-slot:item.reserve="{ item }">
        <BooleanFlg :flg="item.reserve === '1'" />
      </template>
      <template v-slot:item.warehouse="{ item }">
        <BooleanFlg :flg="item.warehouse === '1'" />
      </template>
      <template v-slot:no-data>
        <span>検索結果はありません。</span>
      </template>
    </v-data-table>
    <GlobalPagination
      v-model="currentPage"
      class="mt10"
      :total="itemList.total"
      :page-size="itemList.limit"
    />
  </div>
</template>
<script>
import GlobalPagination from '~/components/common/global-pagination/index'
import BooleanFlg from '~/components/manager/component-ma/detail/BooleanFlg.vue'
export default {
  name: 'CustomerResult',
  components: {
    GlobalPagination,
    BooleanFlg,
  },
  props: {
    itemList: {
      type: Object,
      default: null,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        sortable: true,
        align: 'center',
        value: 'customerId',
        width: '6%',
      },
      { text: '顧客名', value: 'name', align: 'start', width: '18%' },
      {
        text: '住所',
        value: 'address',
        align: 'start',
        width: '12%',
        sortable: false,
      },
      {
        text: '対象車両',
        value: 'maker',
        align: 'start',
        width: '10%',
        sortable: false,
      },
      {
        text: '電話番号',
        value: 'tel',
        align: 'start',
        sortable: false,
        width: '12%',
      },
      {
        text: 'メールアドレス',
        value: 'email',
        align: 'center',
        sortable: false,
        width: '12%',
      },
      {
        text: 'コール',
        value: 'call',
        align: 'center',
        width: '6%',
        sortable: false,
      },
      {
        text: 'DM',
        value: 'dm',
        align: 'center',
        width: '6%',
        sortable: false,
      },
      {
        text: 'SMS',
        value: 'sms',
        align: 'center',
        width: '6%',
        sortable: false,
      },
      {
        text: '予約',
        value: 'reserve',
        align: 'center',
        width: '6%',
        sortable: false,
      },
      {
        text: '入庫',
        value: 'warehouse',
        align: 'center',
        width: '6%',
        sortable: false,
      },
    ],
    currentPage: 1,
  }),
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss">
.v-application--is-ltr
  .ma-list
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center;
}
.ma-list {
  .v-data-table {
    table {
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 40px !important;
            color: $blue-200 !important;
            padding: 0 2px !important;
            i {
              display: none;
            }
          }
          th.sortable {
            span {
              position: relative;
              &:before {
                content: '';
                position: absolute;
                top: calc(50% - 4px);
                right: -10px;
                width: 7px;
                height: 4px;
                background: url('./img/table-sort-arrow-normal.svg') no-repeat 0
                  0;
                transform: rotate(180deg);
              }
              &:after {
                content: '';
                position: absolute;
                top: calc(50% + 2px);
                right: -10px;
                width: 7px;
                height: 4px;
                background: url('./img/table-sort-arrow-normal.svg') no-repeat 0
                  0;
              }
            }
          }
          th.asc {
            span {
              font-weight: bold;
              &:before {
                background: url('./img/table-sort-arrow.svg');
              }
            }
          }
          th.desc {
            span {
              font-weight: bold;
              &:after {
                background: url('./img/table-sort-arrow.svg');
              }
            }
          }
        }
      }
      tbody {
        tr {
          font-size: 12px;
          height: 70px !important;
          color: $blue-200;
          cursor: pointer;
          td {
            padding: 0 5px !important;
            font-size: 12px !important;
            position: relative;
            font-weight: 300;
            &:not(:last-child):after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              top: 15%;
              right: 0;
              background: $gray-100;
            }
          }
        }
        tr:nth-child(even) {
          background-color: $white-100;
        }
      }
    }
  }

  .theme--light.v-data-table .v-data-table__empty-wrapper {
    color: $blue-200 !important;
  }

  .theme--light.v-data-table
    .v-data-table__wrapper
    table
    tbody
    tr:not(:last-child)
    td:not(.v-data-table__mobile-row) {
    border-bottom: none !important;
  }
  .theme--light.v-icon {
    color: $blue-300 !important;
  }
}
</style>
<style lang="scss" scoped>
.id a {
  text-decoration: none;
}
.user {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__name {
    text-align: left;
    span {
      font-size: 10px;
      font-weight: bold;
    }
  }
}

.address,
.car,
.tel {
  h4 {
    font-weight: 400;
  }
}
.tel {
  .fixed-tel:before {
    content: url('./img/fixed_tel.svg');
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
  }

  .mobile-tel:before {
    content: url('./img/mobile_tel.svg');
    display: inline-block;
    width: 8px;
    height: 11px;
    margin: 0 5px 0 1px;
  }
}
</style>
