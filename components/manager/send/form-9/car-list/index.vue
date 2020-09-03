<template>
  <div class="car-list">
    <fg-pagination
      v-model="currentPage"
      class="m15"
      :total="table.items.length"
      :page-size="table.limit"
      theme="blue"
    />
    <v-data-table
      :headers="table.headers"
      :items="table.items"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.check="{ item }">
        <fg-checkbox @change="handleChange(item.id)" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'CarList',
  data: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    table: {
      headers: [
        {
          text: '',
          value: 'check',
          align: 'center',
          sortable: false,
          width: '6%',
        },
        {
          text: 'メーカー',
          value: 'maker',
          align: 'center',
          sortable: false,
          width: '18%',
        },
        {
          text: '車種',
          value: 'type',
          align: 'center',
          sortable: false,
          width: '18%',
        },
        {
          text: '登録ナンバー',
          value: 'carNumber',
          align: 'center',
          sortable: false,
          width: '16%',
        },
        {
          text: '初度登録年月',
          value: 'firstRegistrationDate',
          align: 'center',
          sortable: true,
          width: '14%',
        },
        {
          text: '車検満了日',
          value: 'inspectionExpirationDate',
          align: 'center',
          sortable: true,
          width: '14%',
        },
        {
          text: '最終取引日',
          value: 'lastTradingDate',
          align: 'center',
          sortable: true,
          width: '14%',
        },
      ],
      items: [
        {
          id: '1234567890',
          maker: 'トヨタ',
          type: 'プリウス',
          carNumber: '足立 310 あ 1234',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567891',
          maker: 'マツダ',
          type: 'CX-5',
          carNumber: '品川 500 さ 3423',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567892',
          maker: 'フォルクスワーゲン',
          type: 'ポロ',
          carNumber: '大阪 103 す 4785',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567893',
          maker: 'メルセデスベンツ',
          type: 'Aクラス',
          carNumber: '神奈川 211 う 3984',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567894',
          maker: 'スバル',
          type: 'レガシー',
          carNumber: '高松 659 ろ 3030',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567895',
          maker: 'ホンダ',
          type: 'N-BOX',
          carNumber: '熊本 540 あ 2094',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567896',
          maker: '日産',
          type: 'ノート',
          carNumber: '成田 870 ろ 2354',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567897',
          maker: 'トヨタ',
          type: '松戸 599 あ 2020',
          carNumber: '大阪 103 す 4785',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567898',
          maker: 'BMW',
          type: 'Z4',
          carNumber: '船橋 890 い 3294',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '1234567899',
          maker: 'レクサス',
          type: 'NX',
          carNumber: '市原 498 お 6931',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '2234567890',
          maker: 'トヨタ',
          type: 'プリウス',
          carNumber: '足立 310 あ 1234',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
        {
          id: '2234567891',
          maker: 'マツダ',
          type: 'CX-5',
          carNumber: '品川 500 さ 3423',
          firstRegistrationDate: '2020/09/20',
          inspectionExpirationDate: '2022/09/20',
          lastTradingDate: '2020/09/20',
        },
      ],
      limit: 10,
    },
  }),
  methods: {
    handleChange(id) {
      console.log('id', id)
    },
  },
}
</script>
<style lang="scss">
.v-application--is-ltr
  .car-list
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center;
}
.car-list {
  .v-data-table {
    table {
      border-radius: 6px !important;
      // border-collapse: separate !important;
      // border-spacing: 0 1em !important;
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
        }
      }
      tbody {
        tr {
          height: 70px !important;
          &:nth-child(even) {
            background-color: $white-100;
          }
          td {
            padding: 0 10px !important;
            color: $blue-200 !important;
            border-bottom: none !important;
            font-size: 12px !important;
            height: 70px !important;
            position: relative;
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
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.car-list {
  width: 100%;
}
</style>
