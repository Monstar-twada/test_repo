<template>
  <div class="ma-list">
    <div class="pagination mb15">
      <fg-pagination
        v-model="currentPage"
        class="pagination-link"
        :total="itemList.total"
        :page-size="itemList.limit"
        :before-change="handleBeforeChange"
      />
      <fg-button
        class="pagination-button"
        type="white"
        size="small"
        border
        bold
        width="110"
        :disabled="saveFlg === false"
        @click="saveChange"
        >保存</fg-button
      >
    </div>
    <v-data-table
      :headers="headers"
      :items="itemList.results"
      :items-per-page="itemList.limit"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.name="{ item }">
        <div @click="handleClickName(item)">
          <fg-avatar
            class="user"
            :data="{
              url: '/common/person_default.svg',
              name: `${item.lastName} ${item.firstName}`,
              summary: `（${item.age || '-'}歳）`,
            }"
            text-width="120px"
            circle
            text-flex-direction-column
          ></fg-avatar>
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
      <template v-slot:item.intention_to_replace="{ item }">
        <fg-checkbox
          theme="red"
          :value="item.statusSMS === '1'"
          @change="handleChange('intentionToReplace', item.customerId, $event)"
        />
      </template>
      <template v-slot:item.delivered="{ item }">
        <fg-checkbox
          theme="red"
          :value="item.statusCall === '1'"
          @change="handleChange('delivered', item.customerId, $event)"
        />
      </template>
      <template v-slot:item.call="{ item }">
        <fg-checkbox :value="item.statusCall === '1'" />
      </template>
      <template v-slot:item.dm="{ item }">
        <fg-checkbox :value="item.statusDM === '1'" />
      </template>
      <template v-slot:item.sms="{ item }">
        <fg-checkbox :value="item.statusSMS === '1'" />
      </template>
      <template v-slot:item.reserve="{ item }">
        <fg-checkbox :value="item.reserve === '1'" />
      </template>
      <template v-slot:item.warehouse="{ item }">
        <fg-switch :value="item.warehouse === '1'" />
      </template>
      <template v-slot:item.other="{ item }">
        <fg-select
          :value="item.warehouse"
          :items="options"
          placeholder="選択"
        />
      </template>
      <template v-slot:no-data>
        <span>検索結果はありません。</span>
      </template>
    </v-data-table>
    <div class="pagination mt15">
      <fg-pagination
        v-model="currentPage"
        class="pagination-link"
        :total="itemList.total"
        :page-size="itemList.limit"
        :before-change="handleBeforeChange"
      />
      <fg-button
        class="pagination-button"
        type="white"
        size="small"
        border
        bold
        width="110"
        :disabled="saveFlg === false"
        @click="saveChange"
        >保存</fg-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaResult',
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
      { text: '顧客名', value: 'name', align: 'start', width: '14%' },
      {
        text: '対象車両',
        value: 'maker',
        align: 'start',
        width: '14%',
        sortable: false,
      },
      {
        text: '車検満了日',
        value: 'email',
        align: 'center',
        sortable: false,
        width: '10%',
      },
      {
        text: '電話番号',
        value: 'tel',
        align: 'start',
        sortable: false,
        width: '12%',
      },
      {
        text: '買換意向',
        value: 'intention_to_replace',
        align: 'center',
        width: '7%',
        sortable: false,
      },
      {
        text: '納車済',
        value: 'delivered',
        align: 'center',
        width: '5%',
        sortable: false,
      },
      {
        text: '車検入庫',
        value: 'warehouse',
        align: 'center',
        width: '10%',
        sortable: false,
      },
      {
        text: '本予約',
        value: 'reserve',
        align: 'center',
        width: '5%',
        sortable: false,
      },
      {
        text: '仮予約',
        value: 'dm',
        align: 'center',
        width: '5%',
        sortable: false,
      },
      {
        text: '検討中',
        value: 'sms',
        align: 'center',
        width: '5%',
        sortable: false,
      },
      {
        text: '不通',
        value: 'call',
        align: 'center',
        width: '5%',
        sortable: false,
      },
      {
        text: '他社流出',
        value: 'other',
        align: 'center',
        width: '10%',
        sortable: false,
      },
    ],
    currentPage: 1,
    options: [
      {
        text: '選択',
        value: 0,
      },
      {
        text: '車検',
        value: 1,
      },
      {
        text: '買替',
        value: 2,
      },
      {
        text: '廃車',
        value: 3,
      },
      {
        text: '不明',
        value: 4,
      },
    ],
    status: {},
    saveFlg: false,
  }),
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
  },
  mounted() {
    history.pushState(null, null, window.location.href)
    window.addEventListener(
      'popstate',
      () => {
        this.clickBrowserSystemButton()
      },
      false
    )
  },
  destroyed() {
    window.removeEventListener('popstate', this.clickBrowserSystemButton)
  },
  methods: {
    handleChange(property, id, val) {
      const value = Number(val).toString()
      if (!this.status[id]) {
        this.status[id] = {}
        this.status[id][property] = value
      } else if (!this.status[id][property]) {
        this.status[id][property] = value
      } else {
        delete this.status[id][property]
        if (Object.keys(this.status[id]).length === 0) {
          delete this.status[id]
        }
      }
      this.saveFlg = !!Object.keys(this.status).length > 0
    },

    saveChange() {
      if (this.saveFlg) {
        this.$confirm('入力したデータを保存しますか？')
          .then(() => {
            this.saveFlg = false
            this.status = []
          })
          .catch(() => {
            console.log('cancel')
          })
      }
    },
    handleClickName(item) {
      // console.log(JSON.stringify(item, null, 2))
      this.$router.push({
        path: `/customer/detail/`,
        query: { id: item.customerId },
      })
    },

    clickBrowserSystemButton() {
      if (!this.saveFlg) return
      this.$confirm('入力中のデータが失われます。画面遷移をしますか？')
        .then(() => {
          this.saveFlg = false
          this.status = []
          this.$router.back()
        })
        .catch(() => {
          console.log('cancel')
        })
    },

    handleBeforeChange(next) {
      if (this.saveFlg) {
        this.$confirm('入力中のデータが失われます。画面遷移をしますか？')
          .then(() => {
            this.saveFlg = false
            this.status = []
            next()
          })
          .catch(() => {
            console.log('cancel')
          })
      } else {
        next()
      }
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
            height: 70px !important;
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
          td:nth-child(5):after {
            display: none;
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
/*TODO delete*/
.ma-list .fg-avatar .text-wrapper .__name {
  line-height: 1.4;
}
</style>
<style lang="scss" scoped>
.user {
  margin-left: 20px;
}
.car,
.tel {
  h4 {
    font-weight: 400;
  }
}
.tel {
  .fixed-tel:before {
    content: url('./img/fixed-tel.svg');
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
  }

  .mobile-tel:before {
    content: url('./img/mobile-tel.svg');
    display: inline-block;
    width: 8px;
    height: 11px;
    margin: 0 5px 0 1px;
  }
}
.fg-checkbox,
.fg-switch {
  height: 70px;
}

.pagination {
  display: flex;
  justify-content: space-between;

  &-link {
    flex-basis: 87%;
  }

  &-button {
    flex-basis: 110px;
    text-align: center;
    justify-content: center;
  }
}
</style>
