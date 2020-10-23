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
        :disabled="disabledBtn"
        @click="saveChange"
        >保存</fg-button
      >
    </div>
    <fg-table :data="itemList.results">
      <fg-table-column
        show="customerName"
        label="顧客名"
        cell-class="left"
        :sortable="true"
        width="16%"
      >
        <template v-slot="item">
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
      </fg-table-column>
      <fg-table-column
        show="maker"
        label="対象車両"
        cell-class="left"
        :sortable="false"
        width="12%"
      >
        <template v-slot="item">
          <div class="car">
            <h4>{{ item.maker }}</h4>
            <h4>{{ item.carType }}</h4>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="registrationEndDate"
        label="車検満了日"
        cell-class="center"
        :sortable="false"
        width="10%"
      ></fg-table-column>
      <fg-table-column
        show="tel"
        label="電話番号"
        cell-class="left"
        :sortable="false"
        width="11%"
      >
        <template v-slot="item">
          <div class="tel">
            <h4 class="fixed-tel">{{ item.phoneNumber }}</h4>
            <h4 class="mobile-tel">{{ item.cellPhoneNumber }}</h4>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="purchase"
        label="買換意向"
        :sortable="true"
        width="7%"
      >
        <template v-slot="item">
          <fg-checkbox
            theme="red"
            :value="item.purchaseIntention === '1'"
            @change="
              handleChange(
                'purchaseIntention',
                item.attractingCustomersId,
                $event,
                true
              )
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="delivered"
        label="納車済"
        :sortable="true"
        width="5%"
      >
        <template v-slot="item">
          <fg-checkbox
            theme="red"
            :value="item.deliveredFlag === 1"
            @change="
              handleChange('deliveredFlag', item.attractingCustomersId, $event)
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="carInspection"
        label="車検入庫"
        :sortable="true"
        width="10%"
      >
        <template v-slot="item">
          <fg-switch
            :value="item.carInspectionFlag === 1"
            @change="
              handleChange(
                'carInspectionFlag',
                item.attractingCustomersId,
                $event
              )
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="reservation"
        label="本予約"
        :sortable="true"
        width="5%"
      >
        <template v-slot="item">
          <fg-checkbox
            :value="item.reservationFlag === 1"
            @change="
              handleChange(
                'reservationFlag',
                item.attractingCustomersId,
                $event
              )
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="tentiveReservation"
        label="仮予約"
        :sortable="true"
        width="5%"
      >
        <template v-slot="item">
          <fg-checkbox
            :value="item.tentiveReservationFlag === 1"
            @change="
              handleChange(
                'tentiveReservationFlag',
                item.attractingCustomersId,
                $event
              )
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="underReview"
        label="検討中"
        :sortable="true"
        width="5%"
      >
        <template v-slot="item">
          <fg-checkbox
            :value="item.underReviewFlag === 1"
            @change="
              handleChange(
                'underReviewFlag',
                item.attractingCustomersId,
                $event
              )
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column show="failure" label="不通" :sortable="true" width="5%">
        <template v-slot="item">
          <fg-checkbox
            :value="item.failureFlag === 1"
            @change="
              handleChange('failureFlag', item.attractingCustomersId, $event)
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="outflow"
        label="他社流出"
        :sortable="false"
        width="10%"
      >
        <template v-slot="item">
          <fg-select
            :value="Number(item.outflow)"
            :items="options"
            placeholder="選択"
            @change="
              handleChangeSelect(
                'outflow',
                item.attractingCustomersId,
                $event.value
              )
            "
          />
        </template>
      </fg-table-column>
    </fg-table>
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
        :disabled="disabledBtn"
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
      type: [Object, Array],
      default: null,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    currentPage: 1,
    options: [
      {
        text: '選択',
        value: null,
      },
      {
        text: '買替',
        value: 1,
      },
      {
        text: '車検',
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
    storeCode: '',
  }),
  computed: {
    disabledBtn() {
      return this.$store.getters['popup/getSaveFlg'] === false
    },
  },
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
  },
  mounted() {
    this.storeCode = $nuxt.$store.state.auth.storeCode
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
    // TODO
    // 2改目バックボターを押したら、前のページを戻すという事象があるのため
    // 他のページテストが必要
    // window.removeEventListener('popstate', this.clickBrowserSystemButton)
  },
  methods: {
    handleChange(property, id, val, isToString = false) {
      let value = Number(val)
      if (isToString) value = value.toString()
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
      this.$store.dispatch(
        'popup/setFlg',
        !!Object.keys(this.status).length > 0
      )
    },

    handleChangeSelect(property, id, val) {
      const value = val === null ? val : val.toString()
      const item = this.findItemInfoById(id)
      if (value !== item[property]) {
        if (!this.status[id]) {
          this.status[id] = {}
          this.status[id][property] = value
        } else if (!this.status[id][property]) {
          this.status[id][property] = value
        }
      } else if (this.status[id][property]) {
        delete this.status[id][property]
        if (Object.keys(this.status[id]).length === 0) {
          delete this.status[id]
        }
      }
      this.$store.dispatch(
        'popup/setFlg',
        !!Object.keys(this.status).length > 0
      )
    },

    async saveChange() {
      const promises = []
      Object.keys(this.status).forEach((index) => {
        const itemData = this.findItemInfoById(index.toString())
        const {
          deliveredFlag,
          carInspectionFlag,
          reservationFlag,
          tentiveReservationFlag,
          underReviewFlag,
          failureFlag,
          outflow,
          purchaseIntention,
        } = itemData
        const params = {
          deliveredFlag,
          carInspectionFlag,
          reservationFlag,
          tentiveReservationFlag,
          underReviewFlag,
          failureFlag,
          outflow,
          purchaseIntention,
          ...this.status[index],
        }
        promises.push(
          this.$api.put(
            `/v1/attractingCustomer/${this.storeCode}/${index}`,
            params
          )
        )
      })
      await Promise.all(promises).then(() => {
        this.$store.dispatch('popup/setFlg', false)
        this.status = []
        setTimeout(() => {
          this.$emit('update-event')
        }, 300)
      })
    },

    saveChangeDailog() {
      if (this.$store.getters['popup/getSaveFlg']) {
        this.$confirm('入力したデータを保存しますか？')
          .then(() => {
            this.saveChangeDai()
            this.$store.dispatch('popup/setFlg', false)
            this.status = []
          })
          .catch((error) => {
            console.error({ error })
          })
      }
    },
    handleClickName(item) {
      if (this.$store.getters['popup/getSaveFlg']) {
        this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
          buttons: {
            ok: {
              text: '遷移する',
            },
          },
        })
          .then(() => {
            this.$store.dispatch('popup/setFlg', false)
            this.status = []
            this.$router.push({
              path: `/customer/detail/`,
              query: { customerCode: item.customerCode },
            })
          })
          .catch(() => {
            // console.log('cancel')
          })
      } else {
        this.$router.push({
          path: `/customer/detail/`,
          query: { customerCode: item.customerCode },
        })
      }
    },

    clickBrowserSystemButton() {
      if (!this.$store.getters['popup/getSaveFlg']) return
      this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
        buttons: {
          ok: {
            text: '遷移する',
          },
        },
      })
        .then(() => {
          this.$store.dispatch('popup/setFlg', false)
          this.status = []
          this.$router.back()
        })
        .catch(() => {
          // console.log('cancel')
        })
    },

    handleBeforeChange(next) {
      if (this.$store.getters['popup/getSaveFlg']) {
        this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
          buttons: {
            ok: {
              text: '遷移する',
            },
          },
        })
          .then(() => {
            this.$store.dispatch('popup/setFlg', false)
            this.status = []
            next()
          })
          .catch(() => {
            // console.log('cancel')
          })
      } else {
        next()
      }
    },
    findItemInfoById(id) {
      return this.itemList.results.find(
        (item) => item.attractingCustomersId === Number(id)
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.user {
  margin-left: 20px;
  cursor: pointer;
}
.car,
.tel {
  h4 {
    font-weight: 400;
  }
}
.tel {
  margin-left: 10%;
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
