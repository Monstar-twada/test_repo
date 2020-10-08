<template>
  <div class="ma-index">
    <div class="ma-index-title">
      <h2>今月のアクションリスト</h2>
      <fg-month-picker v-model="currentMonth" />
    </div>
    <fg-table :data="maIndexResultList">
      <fg-table-column
        show="車検"
        lable="vehicleInspection"
        width="10%"
        :sortable="false"
      >
        <template v-slot="item">
          <h3>{{ Number(item.registrationEndMonth.slice(4, 6)) }}月満期</h3>
          <h3>({{ Number(item.registrationEndMonth.slice(0, 4)) }})</h3>
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
          <div class="count">{{ item.targetTotalCount.toLocaleString() }}</div>
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
              item.callTotalCount.toLocaleString()
            }}&nbsp;コール済&nbsp;&nbsp;({{ fmtRatio(item.callTotalRatio) }})
          </span>
        </template>
      </fg-table-column>
      <fg-table-column show="内訳" lable="detail" width="52%" :sortable="false">
        <template v-slot="item">
          <div class="detail">
            <dl>
              <dt>車検入庫</dt>
              <dd>
                <span>{{ item.carInspectionTotalCount.toLocaleString() }}</span
                >件
              </dd>
            </dl>
            <dl>
              <dt>本予約</dt>
              <dd>
                <span>{{ item.reservationTotalCount.toLocaleString() }}</span
                >件
              </dd>
            </dl>
            <dl>
              <dt>仮予約</dt>
              <dd>
                <span>{{
                  item.tentiveReservationTotalCount.toLocaleString()
                }}</span
                >件
              </dd>
            </dl>
            <dl>
              <dt>買換意向</dt>
              <dd>
                <span>{{
                  item.purchaseIntentionTotalCount.toLocaleString()
                }}</span
                >件
              </dd>
            </dl>
            <dl>
              <dt>納車済</dt>
              <dd>
                <span>{{ item.deliveredTotalCount.toLocaleString() }}</span
                >件
              </dd>
            </dl>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column label width="16%" :sortable="false">
        <template v-slot="item">
          <nuxt-link
            :to="`/ma/customer_list?type=0000&date=${item.registrationEndMonth}`"
          >
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
      total: 7,
      limit: 7,
    },
    maIndexResultList: [],
    currentPage: 1,
    currentMonth: '',
    storeCode: null,
  }),
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
    currentMonth(val, oldVal) {
      if (val !== oldVal) {
        this.getMaIndexResult()
      }
    },
  },
  created() {
    this.storeCode = $nuxt.$store.state.auth.storeCode
    this.getCurrentMonth()
    this.getMaIndexResult()
  },
  methods: {
    getCurrentMonth() {
      const date = new Date()
      const year = date.getFullYear()
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      this.currentMonth = year.toString() + month.toString()
    },

    async getMaIndexResult() {
      const params = {}
      await this.$api
        .post(
          `/v1/attractingCustomersMonth/${this.storeCode}/${this.currentMonth}`,
          params
        )
        .then((res) => {
          this.maIndexResultList = res.results
        })
        .catch((err) => {
          console.error(err)
        })
    },
    fmtRatio(ratio) {
      return Math.round(ratio * 100) + '%'
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
}
.fg-table__table__body.ma-index-table-tbody {
  tr {
    height: 105px;

    &:last-child {
      border: 1px $--color-border solid;
    }
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
  font-size: 21px;
  font-weight: bold;
  text-align: right;
}

.progress {
  display: block;
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
