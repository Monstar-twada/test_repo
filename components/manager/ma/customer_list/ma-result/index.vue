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
            <h4>{{ item.class }}</h4>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="email"
        label="車検満了日"
        cell-class="left"
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
        show="intention_to_replace"
        label="買換意向"
        :sortable="true"
        width="7%"
      >
        <template v-slot="item">
          <fg-checkbox
            theme="red"
            :value="item.statusSMS === '1'"
            @change="
              handleChange('intentionToReplace', item.customerId, $event)
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
            :value="item.statusSMS === '1'"
            @change="handleChange('delivered', item.customerId, $event)"
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="warehouse"
        label="車検入庫"
        :sortable="true"
        width="10%"
      >
        <template v-slot="item">
          <fg-switch
            :value="item.warehouse === '1'"
            @change="handleChange('warehouse', item.customerId, $event)"
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="reserve"
        label="本予約"
        :sortable="true"
        width="5%"
      >
        <template v-slot="item">
          <fg-checkbox
            :value="item.reserve === '1'"
            @change="handleChange('reserve', item.customerId, $event)"
          />
        </template>
      </fg-table-column>
      <fg-table-column show="dm" label="仮予約" :sortable="true" width="5%">
        <template v-slot="item">
          <fg-checkbox
            :value="item.statusDM === '1'"
            @change="handleChange('dm', item.customerId, $event)"
          />
        </template>
      </fg-table-column>
      <fg-table-column show="sms" label="検討中" :sortable="true" width="5%">
        <template v-slot="item">
          <fg-checkbox
            :value="item.statusSMS === '1'"
            @change="
              handleChange('intentionToReplace', item.customerId, $event)
            "
          />
        </template>
      </fg-table-column>
      <fg-table-column show="call" label="不通" :sortable="true" width="5%">
        <template v-slot="item">
          <fg-checkbox
            :value="item.statusCall === '1'"
            @change="handleChange('call', item.customerId, $event)"
          />
        </template>
      </fg-table-column>
      <fg-table-column
        show="call"
        label="他社流出"
        :sortable="true"
        width="10%"
      >
        <template v-slot="item">
          <fg-select
            :value="item.warehouse"
            :items="options"
            placeholder="選択"
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
