<template>
  <div class="matching-list">
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="itemlist.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
    <v-data-table
      :headers="headers"
      :items="itemlist"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.owner="{ item }">
        <div class="user ml30">
          <v-avatar size="38" class="user__image">
            <v-img
              :src="require('~/static/breadcrumbs/' + item.image_path)"
            ></v-img>
          </v-avatar>
          <h3 class="pl5">{{ item.name }}</h3>
          <span>（{{ item.age }}際）</span>
        </div>
      </template>
      <template v-slot:item.car_info="{ item }">
        <div class="car">
          <h4>{{ item.car_maker }} {{ item.car_type }}</h4>
          <h4>{{ item.car_class }}</h4>
        </div>
      </template>
      <template v-slot:item.status="{ item }">
        <div class="status">
          <h4>{{ item.status }}</h4>
          <span v-if="item.keep">キープ中</span>
        </div>
      </template>
    </v-data-table>
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="itemlist.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
  </div>
</template>
<script>
import PaginationComponent from '~/components/common/PaginationComponent.vue'
export default {
  name: 'MatchingResult',
  components: {
    PaginationComponent,
  },
  data: () => ({
    headers: [
      {
        text: '案件ID',
        sortable: true,
        align: 'center',
        value: 'id',
        width: '100px',
      },
      { text: '車両情報', value: 'car_info', align: 'center', width: '300px' },
      { text: '希望価格', value: 'car_price', align: 'center' },
      { text: '車両保管場所', value: 'place', align: 'start', width: '130px' },
      {
        text: '出品者',
        value: 'owner',
        sortable: true,
        align: 'start',
        width: '250px',
      },
      { text: '車検残', value: 'car_inspection', align: 'center' },
      {
        text: '仕入れ期間',
        value: 'stock_period',
        sortable: true,
        align: 'center',
        width: '130px',
      },
      {
        text: 'ステータス',
        value: 'status',
        sortable: true,
        align: 'center',
        width: '130px',
      },
    ],
    itemlist: [
      {
        id: 'AT-101',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-102',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-103',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-104',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-105',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-106',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-107',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-108',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-109',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-110',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-111',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-112',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-113',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-114',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-115',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-116',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-117',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-118',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-119',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-120',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-121',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-122',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-123',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-124',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-125',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-126',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-127',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-128',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-129',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-130',
        name: '米田 道春',
        image_path: 'person.png',
        age: 31,
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_class: 'Sツーリングセレクション',
        car_price: '¥1,500,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: true,
      },
      {
        id: 'AT-131',
        name: '山本篤',
        image_path: 'person.png',
        age: 31,
        car_maker: 'マツダ',
        car_type: ' CX-5',
        car_class: '2.0 20S プロアクティブ',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-132',
        name: '北中 真希子',
        image_path: 'person.png',
        age: 31,
        car_maker: 'フォルクスワーゲン',
        car_type: 'ポロ',
        car_class: 'ＴＳＩコンフォートラインリミテッド',
        car_price: '¥1,340,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-133',
        name: '斎藤拓',
        image_path: 'person.png',
        age: 31,
        car_maker: 'メルセデスベンツ',
        car_type: 'Aクラス',
        car_class: 'Ａ１８０ スタイル',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
      {
        id: 'AT-134',
        name: '島田一郎',
        image_path: 'person.png',
        age: 31,
        car_maker: 'スバル',
        car_type: 'レガシー',
        car_class: 'Ｂ－スポーツ',
        car_price: '¥2,870,000',
        car_inspection: '7ヶ月',
        place: '東京都渋谷区渋谷2丁目',
        stock_period: '20日',
        status: '出品中',
        keep: false,
      },
    ],
    currentPage: 1,
    itemsPerPage: 10,
  }),
  methods: {
    updatePageNumber(newPage) {
      this.currentPage = newPage
    },
  },
}
</script>

<style lang="scss">
.v-application--is-ltr
  .matching-list
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center;
}

.matching-list {
  .v-data-table {
    table {
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 40px !important;
            color: $blue-200 !important;
          }
        }
      }
      tbody {
        tr {
          font-size: 12px;
          height: 70px !important;
          color: $blue-500;
        }
        tr:nth-child(even) {
          background-color: $white-100;
        }
      }
    }
  }

  .theme--light.v-data-table
    .v-data-table__wrapper
    table
    tbody
    tr:not(:last-child)
    td:not(.v-data-table__mobile-row) {
    border-bottom: none !important;
  }

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

  .theme--light.v-icon {
    color: $blue-300 !important;
  }
}
</style>
<style lang="scss" scoped>
.user {
  &__image {
    display: inline;
  }

  h3 {
    display: inline;
  }
  span {
    font-size: 12px;
    display: inline;
  }
}
.status {
  text-align: center;
  span {
    display: block;
    text-align: center;
    margin: 5px 8px;
    width: 84px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid $gray-100;
  }
}
</style>
