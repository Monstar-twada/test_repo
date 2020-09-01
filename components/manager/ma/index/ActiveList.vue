<template>
  <div class="ma-index">
    <div class="ma-index-title">
      <h2>今月のアクションリスト</h2>
      <fg-month-picker v-model="currentMonth" />
    </div>
    <v-data-table
      :headers="headers"
      :items="itemList.results"
      :items-per-page="itemList.limit"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.vehicle_inspection="{ item }">
        <h3>{{ item.vehicle_inspection }}</h3>
        <h3>({{ item.year }})</h3>
      </template>
      <template v-slot:item.list_count="{ item }">
        <div class="count">{{ item.list_count.toLocaleString() }}</div>
      </template>
      <template v-slot:item.progress="{ item }">
        <span class="progress">
          -&nbsp;{{
            item.goal_count.toLocaleString()
          }}&nbsp;コール済&nbsp;&nbsp;({{ item.goal_percent }})
        </span>
      </template>
      <template v-slot:item.detail="{ item }">
        <div class="detail">
          <dl>
            <dt>車検入庫</dt>
            <dd>
              <span>{{ item.warehouse.toLocaleString() }}</span
              >件
            </dd>
          </dl>
          <dl>
            <dt>本予約</dt>
            <dd>
              <span>{{ item.reserve.toLocaleString() }}</span
              >件
            </dd>
          </dl>
          <dl>
            <dt>仮予約</dt>
            <dd>
              <span>{{ item.tentative_reserve.toLocaleString() }}</span
              >件
            </dd>
          </dl>
          <dl>
            <dt>買換意向</dt>
            <dd>
              <span>{{ item.intention_to_replace.toLocaleString() }}</span
              >件
            </dd>
          </dl>
          <dl>
            <dt>納車済</dt>
            <dd>
              <span>{{ item.delivered.toLocaleString() }}</span
              >件
            </dd>
          </dl>
        </div>
      </template>
      <template v-slot:item.operation="{ item }">
        <nuxt-link to="/ma/customer_list?type=0000&date=202009">
          <fg-button
            v-if="item.list_count != 0"
            class="button"
            type="primary"
            suffix-icon="arrow-right"
            round
            bold
            >対象者一覧</fg-button
          >
        </nuxt-link>
      </template>
    </v-data-table>
    <h5 class="ma-index-command">
      ※連絡先が入力されていない顧客は表示しておりません
    </h5>
  </div>
</template>
<script>
export default {
  name: 'ActiveList',
  components: {},
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    inputValue2: '',
    headers: [
      {
        text: '車検',
        align: 'center',
        value: 'vehicle_inspection',
        width: '10%',
        sortable: false,
      },
      {
        text: '対象者',
        value: 'list_count',
        align: 'right',
        width: '8%',
        sortable: false,
      },
      {
        text: '進捗',
        value: 'progress',
        align: 'left',
        width: '13%',
        sortable: false,
      },
      {
        text: '内訳',
        value: 'detail',
        align: 'center',
        width: '50%',
        sortable: false,
      },
      {
        text: '',
        value: 'operation',
        align: 'center',
        sortable: false,
        width: '16%',
      },
    ],
    itemList: {
      results: [
        {
          vehicle_inspection: '1月満期',
          year: 2021,
          list_count: 51415,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 83,
          reserve: 1032,
          tentative_reserve: 233,
          intention_to_replace: 11,
          delivered: 3,
        },
        {
          vehicle_inspection: '12月満期',
          year: 2020,
          list_count: 0,
          goal_count: 0,
          goal_percent: 0,
          warehouse: 0,
          reserve: 0,
          tentative_reserve: 0,
          intention_to_replace: 0,
          delivered: '0',
        },
        {
          vehicle_inspection: '11月満期',
          year: 2020,
          list_count: 938,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 120,
          reserve: 83,
          tentative_reserve: 44,
          intention_to_replace: 23,
          delivered: 11,
        },
        {
          vehicle_inspection: '10月満期',
          year: 2020,
          list_count: 917,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 92,
          reserve: 28,
          tentative_reserve: 12,
          intention_to_replace: 19,
          delivered: 11,
        },
        {
          vehicle_inspection: '9月満期',
          year: 2020,
          list_count: 839,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 52,
          reserve: 43,
          tentative_reserve: 82,
          intention_to_replace: 9,
          delivered: 2,
        },
        {
          vehicle_inspection: '8月満期',
          year: 2020,
          list_count: 938,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 120,
          reserve: 83,
          tentative_reserve: 44,
          intention_to_replace: 23,
          delivered: 11,
        },
        {
          vehicle_inspection: '7月満期',
          year: 2020,
          list_count: 917,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 92,
          reserve: 28,
          tentative_reserve: 12,
          intention_to_replace: 19,
          delivered: 11,
        },
      ],
      total: 7,
      limit: 7,
    },
    currentPage: 1,
    currentMonth: {},
  }),
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
  },
  created() {
    this.getCurrentMonth()
  },
  methods: {
    getCurrentMonth() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      this.currentMonth = { year, month }
    },
  },
}
</script>

<style lang="scss">
.v-application--is-ltr
  .ma-index
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center !important;
}
.v-application .ma-index tr th.text-right:nth-child(2) {
  text-align: center;
}
.ma-index {
  .v-data-table {
    table {
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 30px !important;
            color: $blue-200 !important;
            padding: 0 2px !important;
            background: $white-100;
            border-bottom: none !important;
            i {
              display: none;
            }
          }
        }
      }
      tbody {
        tr {
          font-size: 12px;
          color: $blue-200;
          cursor: pointer;
          td {
            padding: 10px 5px !important;
            font-size: 12px !important;
            position: relative;
            font-weight: 300;
            height: 80px;
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
          td:nth-child(2):after,
          td:nth-child(4):after {
            display: none;
          }
        }
      }
    }
  }

  .theme--light.v-data-table .v-data-table__empty-wrapper {
    color: $blue-200 !important;
  }

  .theme--light.v-data-table .v-data-table__wrapper table tbody tr td {
    border-bottom: 1px $gray-100 solid !important;
  }
  .theme--light.v-icon {
    color: $blue-300 !important;
  }
}
</style>
<style lang="scss" scoped>
.ma-index {
  background: $white-300;
  color: $blue-200;
  border-radius: 6px;

  &-title {
    padding: 15px 0 15px 30px;

    h2 {
      display: inline;
    }
    .fg-month-picker {
      margin-left: 20px;
      display: inline-flex;
    }
  }
  &-command {
    display: block;
    padding: 20px 0 20px 40px;
  }
}

.detail {
  list-style: none;
  text-align: left;
  padding-left: 5%;
  padding-right: 5%;
  dl {
    margin: 5px 10px;
    font-family: 'Avenir Next';
    font-size: 14px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    dt {
      width: 60px;
    }
    dd {
      width: 90px;
      span {
        display: inline-block;
        width: 70px;
        text-align: right;
        font-size: 21px;
        font-weight: bold;
        padding: 0 5px;
      }
    }
  }
}

.count {
  display: inline-block;
  font-family: 'Avenir Next';
  font-size: 21px;
  font-weight: bold;
  text-align: right;
}

.progress {
  display: block;
  font-family: 'Avenir Next';
  font-size: 14px;
  height: 70px;
  line-height: 70px;
}

.button {
  width: 130px;
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
    //content: url('./img/fixed-tel.svg');
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
  }

  .mobile-tel:before {
    //content: url('./img/mobile-tel.svg');
    display: inline-block;
    width: 8px;
    height: 11px;
    margin: 0 5px 0 1px;
  }
}
</style>
