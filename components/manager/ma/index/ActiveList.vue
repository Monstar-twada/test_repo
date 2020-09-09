<template>
  <div class="ma-index">
    <div class="ma-index-title">
      <h2>今月のアクションリスト</h2>
      <fg-month-picker v-model="currentMonth" />
    </div>
    <fg-table :data="itemList.results">
      <fg-table-column
        show="車検"
        lable="vehicleInspection"
        width="10%"
        :sortable="false"
      >
        <template v-slot="item">
          <h3>{{ item.vehicleInspection }}</h3>
          <h3>({{ item.year }})</h3>
        </template>
      </fg-table-column>
      <fg-table-column
        show="対象者"
        lable="listCount"
        width="8%"
        cell-class="right"
        :sortable="false"
      >
        <template v-slot="item">
          <div class="count">{{ item.listCount.toLocaleString() }}</div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="進捗"
        lable="progress"
        width="14%"
        cell-class="left"
        :sortable="false"
      >
        <template v-slot="item">
          <span class="progress">
            -&nbsp;{{
              item.goal_count.toLocaleString()
            }}&nbsp;コール済&nbsp;&nbsp;({{ item.goal_percent }})
          </span>
        </template>
      </fg-table-column>
      <fg-table-column show="内訳" lable="detail" width="52%" :sortable="false">
        <template v-slot="item">
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
      </fg-table-column>
      <fg-table-column label width="16%" :sortable="false">
        <template v-slot="item">
          <nuxt-link to="/ma/customer_list?type=0000&date=202009">
            <fg-button
              v-if="item.listCount != 0"
              class="button"
              type="primary"
              suffix-icon="arrow-right"
              round
              bold
              >対象者一覧</fg-button
            >
          </nuxt-link>
        </template>
      </fg-table-column>
    </fg-table>
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
    itemList: {
      results: [
        {
          vehicleInspection: '1月満期',
          year: 2021,
          listCount: 1415,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 83,
          reserve: 1032,
          tentative_reserve: 233,
          intention_to_replace: 11,
          delivered: 3,
        },
        {
          vehicleInspection: '12月満期',
          year: 2020,
          listCount: 0,
          goal_count: 0,
          goal_percent: 0,
          warehouse: 0,
          reserve: 0,
          tentative_reserve: 0,
          intention_to_replace: 0,
          delivered: '0',
        },
        {
          vehicleInspection: '11月満期',
          year: 2020,
          listCount: 938,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 120,
          reserve: 83,
          tentative_reserve: 44,
          intention_to_replace: 23,
          delivered: 11,
        },
        {
          vehicleInspection: '10月満期',
          year: 2020,
          listCount: 917,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 92,
          reserve: 28,
          tentative_reserve: 12,
          intention_to_replace: 19,
          delivered: 11,
        },
        {
          vehicleInspection: '9月満期',
          year: 2020,
          listCount: 839,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 52,
          reserve: 43,
          tentative_reserve: 82,
          intention_to_replace: 9,
          delivered: 2,
        },
        {
          vehicleInspection: '8月満期',
          year: 2020,
          listCount: 938,
          goal_count: 34,
          goal_percent: '40%',
          warehouse: 120,
          reserve: 83,
          tentative_reserve: 44,
          intention_to_replace: 23,
          delivered: 11,
        },
        {
          vehicleInspection: '7月満期',
          year: 2020,
          listCount: 917,
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
.ma-index {
  .fg-table {
    thead {
      tr {
        th {
          font-size: 12px;
          font-weight: normal;
          height: 30px !important;
          color: $--color-primary !important;
          padding: 0 2px !important;
          background: $--color-background;
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
        color: $--color-primary;
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
            background: $--color-border;
          }
        }
        td:nth-child(2):after,
        td:nth-child(4):after {
          display: none;
        }
      }
    }
  }

  .theme--light.v-data-table .v-data-table__empty-wrapper {
    color: $--color-primary !important;
  }

  .theme--light.v-data-table .v-data-table__wrapper table tbody tr td {
    border-bottom: 1px $--color-border solid !important;
  }
  .theme--light.v-icon {
    color: $--color-primary !important;
  }
}
</style>
<style lang="scss" scoped>
.ma-index {
  background: $--color-white;
  color: $--color-primary;
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
