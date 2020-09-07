<template>
  <div class="customer-index-table-wrapper">
    <fg-pagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pb15"
    />
    <fg-table-experiment
      :headers="headers"
      :list="list"
      padding="lr10"
      rounded
      head-bottom-border
      head-font-weight-normal
      stripe
      td-space-vertical-line
      body-min-height="300px"
      placeholder="検索結果はありません"
    >
      <tr
        v-for="(item, i) in list"
        :key="i"
        class="cur"
        @click="clickRow(item)"
      >
        <td class="high-light">
          {{ item.customerId }}
        </td>
        <td class="is-left">
          <fg-avatar
            text-flex-direction-column
            circle
            text-width="120px"
            :data="fmtAvatar(item)"
          />
        </td>
        <td class="is-left">
          <div class="table-item-tel">
            <fg-text>
              <fg-icon name="mobile" color="$color.primary" />{{ item.tel }}
            </fg-text>
            <fg-text>
              <fg-icon name="email" color="$color.primary" />yoneda@gmail.com
            </fg-text>
          </div>
        </td>
        <td>
          <dl style="display: inline-block; text-align: left;">
            <dd>{{ item.maker }}</dd>
            <dd>{{ item.class || '-' }}</dd>
          </dl>
        </td>
        <td>{{ fmtCarNumber(item) }}</td>
        <td>{{ item.inspectionExpirationDate | fmtDate }}</td>
        <td>{{ item.firstRegistrationDate | fmtDate }}</td>
        <td>{{ item.inspectionExpirationDate | fmtDate }}</td>
        <td>
          <div style="text-align: center;">
            <fg-tag
              :class="{ hide: i % 5 === 0 }"
              color="#fff"
              size="small"
              round
              bg-color="#2993D9"
              border-color="#2993D9"
              width="42px"
              >買換</fg-tag
            >
            <fg-tag
              :class="{ hide: i % 6 === 0 }"
              color="#fff"
              size="small"
              round
              bg-color="#12AACE"
              border-color="#12AACE"
              width="42px"
              >乗換</fg-tag
            >
          </div>
          <div style="text-align: center;">
            <fg-tag
              :class="{ hide: i % 2 === 0 }"
              color="#fff"
              size="small"
              round
              bg-color="#0DBEA9"
              border-color="#0DBEA9"
              width="42px"
              >車検</fg-tag
            >
            <fg-tag
              :class="{ hide: i % 3 === 0 }"
              color="#fff"
              size="small"
              round
              bg-color="#1DDB99"
              border-color="#1DDB99"
              width="42px"
              >6ヶ月</fg-tag
            >
          </div>
        </td>
      </tr>
    </fg-table-experiment>

    <fg-pagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pt15"
    />
  </div>
</template>

<script>
import {
  fmtAvatar,
  fmtCarNumber,
  fmtDate,
} from '~/components/common/customer/common/helper'
export default {
  filters: {
    fmtDate,
  },
  components: {},
  props: {
    query: {
      type: Object,
      default() {
        return {}
      },
    },
    tableData: {
      type: Object,
      default() {
        return {
          total: 0,
        }
      },
    },
  },
  data() {
    return {
      headers: [
        {
          text: '顧客ID',
          align: 'center',
          value: 'id',
          sortable: true,
        },
        {
          text: '顧客名',
          value: 'name',
          align: 'center',
          width: '200px',
          sortable: true,
        },
        { text: '連絡先情報', align: 'center', width: 180 },
        { text: '所有車', align: 'start', width: '120px' },
        { text: '登録ナンバー', align: 'center' },
        {
          text: '車検満了日',
          align: 'center',
        },
        {
          text: '初度登録年月',
          align: 'center',
        },
        { text: '最終取引日', align: 'center' },
        { text: 'フラグ', align: 'center', width: 150 },
      ],
    }
  },
  computed: {
    list() {
      return this.tableData.results || []
    },
  },
  methods: {
    clickRow(item) {
      // console.log(JSON.stringify(item, null, 2))
      this.$router.push({
        path: `/customer/detail/`,
        query: { id: item.customerId },
      })
    },
    fmtCarNumber,
    fmtAvatar,
  },
}
</script>

<style lang="scss">
.customer-index-table-wrapper {
  .high-light {
    color: $--color-primary-active;
  }
  td {
    .table-item-tel {
      .fg-icon {
        margin-right: 2px;
      }
    }
    .fg-tag {
      margin: 2px;
      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
