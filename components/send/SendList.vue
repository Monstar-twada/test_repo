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
          <nuxt-link to="/send/detail">{{ item.id }}</nuxt-link>
        </div>
      </template>
      <template v-slot:item.customerName="{ item }">
        <div class="customerName">
          <v-avatar :size="36">
            <img :src="require(`~/static/send/${item.img}`)" alt="John" />
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
          <div v-if="item.carInfo[2]" class="carInfo--badge">
            {{ item.carInfo[2] }}
          </div>
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
          customerName: ['米田 道治', '（64歳）'],
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          img: 'person_default.svg',
          number: '奈良 335 ら 318',
          kind: '購入',
          status: '送客中',
        },
        {
          id: '12345678901',
          customerName: ['山本篤', '（42歳）'],
          tel: '090-2323-4455',
          carInfo: ['マツダ', 'CX-5', ''],
          img: 'person_default.svg',
          number: '品川 500 さ 3423',
          kind: '売却',
          status: '対応中',
        },
        {
          id: '1234567892',
          customerName: ['北中真希子', '（36歳）'],
          tel: '080-8888-2040',
          carInfo: ['フォルクスワーゲン', 'ポロ', ''],
          img: 'person_default.svg',
          number: '大阪 103 す 4785',
          kind: '整備',
          status: '対応中',
        },
        {
          id: '1234567893',
          customerName: ['斎藤拓', '（58歳）'],
          tel: '080-7490-2041',
          carInfo: ['メルセデスベンツ', 'Aクラス', ''],
          img: 'person_default.svg',
          number: '神奈川 211 う 3984',
          kind: '鈑金',
          status: '対応中',
        },
        {
          id: '1234567894',
          customerName: ['島田一郎', '（47歳）'],
          tel: '080-5454-9745',
          carInfo: ['スバル', 'レガシー', ''],
          img: 'person_default.svg',
          number: '高松 659 ろ 3030',
          kind: '保険',
          status: '成約済',
        },
        {
          id: '1234567895',
          customerName: ['長谷川宏美', '（30歳）'],
          tel: '080-0090-3090',
          carInfo: ['ホンダ', 'N-BOX', ''],
          img: 'person_default.svg',
          number: '熊本 540 あ 2094',
          kind: 'アクセサリー',
          status: '成約済',
        },
        {
          id: '1234567896',
          customerName: ['森下千絵', '（29歳）'],
          tel: '090-2323-4455',
          carInfo: ['日産', 'ノート', ''],
          img: 'person_default.svg',
          number: '成田 870 ろ 2354',
          kind: '購入',
          status: '成約済',
        },
        {
          id: '1234567897',
          customerName: ['加藤雅之', '（39歳）'],
          tel: '080-8888-2040',
          carInfo: ['トヨタ', 'ヴェルファイア', ''],
          img: 'person_default.svg',
          number: '松戸 599 あ 2020',
          kind: '売却',
          status: '成約済',
        },
        {
          id: '1234567898',
          customerName: ['平岡和正', '（56歳）'],
          tel: '080-7490-2041',
          carInfo: ['BMW', 'Z4', ''],
          img: 'person_default.svg',
          number: '船橋 890 い 3294',
          kind: '整備',
          status: '成約済',
        },
        {
          id: '1234567899',
          customerName: ['鈴木翔子', '（46歳）'],
          tel: '080-5454-9745',
          carInfo: ['レクサス', 'NX', ''],
          img: 'person_default.svg',
          number: '市原 498 お 6931',
          kind: '鈑金',
          status: '見送済',
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
              width: max-content;
              text-align: left;
              &--badge {
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 1px 8px;
                border-radius: 10px;
                background-color: $blue-200;
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
