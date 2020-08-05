<template>
  <div class="assess-list">
    <PaginationComponent
      :current-page.sync="currentPage"
      :total="itemlist.length"
      :per-page="itemsPerPage"
      @updateEvent="updatePageNumber"
    />
    <v-data-table
      :headers="headers"
      :items="itemlist"
      :items-per-page="10"
      :page.sync="currentPage"
      hide-default-footer
    >
      <template v-slot:item.name="{ item }">
        <div class="user">
          <v-avatar size="38" class="user__image">
            <v-img
              class="d-inline"
              :src="require('~/static/breadcrumbs/' + item.image_path)"
            ></v-img>
          </v-avatar>
          <h3 class="pl5 d-inline">{{ item.name }}</h3>
          <h4 class="pl5 d-inline">（{{ item.age }}歳）</h4>
        </div>
      </template>
      <template v-slot:item.responsible="{ item }">
        <div>
          <h3>{{ item.shop }}</h3>
          <h4>{{ item.responsible }}</h4>
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
  name: 'AssessResult',
  components: {
    PaginationComponent,
  },
  data() {
    return {
      headers: [
        {
          text: '案件ID',
          sortable: true,
          align: 'center',
          value: 'id',
        },
        {
          text: '作成日',
          value: 'create_date',
          sortable: true,
          align: 'center',
          width: '50px',
        },
        {
          text: '顧客名',
          value: 'name',
          sortable: true,
          align: 'start',
          width: '250px',
        },
        { text: '電話番号', value: 'tel', align: 'center' },
        { text: 'メーカー', value: 'car_maker', align: 'center' },
        { text: '車種', value: 'car_type', align: 'center' },
        { text: '型式', value: 'car_model', align: 'center' },
        { text: 'グレード', value: 'grade', align: 'center', width: '100px' },
        { text: '査定金額', value: 'assess_amount', align: 'center' },
        { text: '担当者', value: 'responsible', align: 'center' },
      ],
      itemlist: [
        {
          id: 'AT-1231',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1232',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1233',
          create_date: 'R2/11/31 10:00',
          name: '北中真希子',
          image_path: 'person.png',
          age: 36,
          tel: '080-8888-2040',
          car_maker: 'フォルクスワーゲン',
          car_type: 'ポロ',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1234',
          create_date: 'R2/11/31 10:00',
          name: '斎藤拓',
          image_path: 'person.png',
          age: 58,
          tel: '080-8888-2040',
          car_maker: 'メルセデスベンツ',
          car_type: 'Aクラス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1235',
          create_date: 'R2/11/31 10:00',
          name: '島田一郎',
          image_path: 'person.png',
          age: 47,
          tel: '080-8888-2040',
          car_maker: 'スバル',
          car_type: 'レガシー',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1236',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1237',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1238',
          create_date: 'R2/11/31 10:00',
          name: '北中真希子',
          image_path: 'person.png',
          age: 36,
          tel: '080-8888-2040',
          car_maker: 'フォルクスワーゲン',
          car_type: 'ポロ',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1239',
          create_date: 'R2/11/31 10:00',
          name: '斎藤拓',
          image_path: 'person.png',
          age: 58,
          tel: '080-8888-2040',
          car_maker: 'メルセデスベンツ',
          car_type: 'Aクラス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1240',
          create_date: 'R2/11/31 10:00',
          name: '島田一郎',
          image_path: 'person.png',
          age: 47,
          tel: '080-8888-2040',
          car_maker: 'スバル',
          car_type: 'レガシー',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1241',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1242',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1243',
          create_date: 'R2/11/31 10:00',
          name: '北中真希子',
          image_path: 'person.png',
          age: 36,
          tel: '080-8888-2040',
          car_maker: 'フォルクスワーゲン',
          car_type: 'ポロ',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1244',
          create_date: 'R2/11/31 10:00',
          name: '斎藤拓',
          image_path: 'person.png',
          age: 58,
          tel: '080-8888-2040',
          car_maker: 'メルセデスベンツ',
          car_type: 'Aクラス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1245',
          create_date: 'R2/11/31 10:00',
          name: '島田一郎',
          image_path: 'person.png',
          age: 47,
          tel: '080-8888-2040',
          car_maker: 'スバル',
          car_type: 'レガシー',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1246',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1247',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1248',
          create_date: 'R2/11/31 10:00',
          name: '北中真希子',
          image_path: 'person.png',
          age: 36,
          tel: '080-8888-2040',
          car_maker: 'フォルクスワーゲン',
          car_type: 'ポロ',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1249',
          create_date: 'R2/11/31 10:00',
          name: '斎藤拓',
          image_path: 'person.png',
          age: 58,
          tel: '080-8888-2040',
          car_maker: 'メルセデスベンツ',
          car_type: 'Aクラス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1250',
          create_date: 'R2/11/31 10:00',
          name: '島田一郎',
          image_path: 'person.png',
          age: 47,
          tel: '080-8888-2040',
          car_maker: 'スバル',
          car_type: 'レガシー',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1251',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1252',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1253',
          create_date: 'R2/11/31 10:00',
          name: '北中真希子',
          image_path: 'person.png',
          age: 36,
          tel: '080-8888-2040',
          car_maker: 'フォルクスワーゲン',
          car_type: 'ポロ',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1254',
          create_date: 'R2/11/31 10:00',
          name: '斎藤拓',
          image_path: 'person.png',
          age: 58,
          tel: '080-8888-2040',
          car_maker: 'メルセデスベンツ',
          car_type: 'Aクラス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1255',
          create_date: 'R2/11/31 10:00',
          name: '島田一郎',
          image_path: 'person.png',
          age: 47,
          tel: '080-8888-2040',
          car_maker: 'スバル',
          car_type: 'レガシー',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1256',
          create_date: 'R2/11/31 10:00',
          name: '米田　道春',
          image_path: 'person.png',
          age: 31,
          tel: '080-1234-1234',
          car_maker: 'トヨタ',
          car_type: 'プリンス',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
        {
          id: 'AT-1257',
          create_date: 'R2/11/31 10:00',
          name: '山本篤',
          image_path: 'person.png',
          age: 42,
          tel: '090-2323-4455',
          car_maker: 'マツダ',
          car_type: 'CX-5',
          car_model: 'ZVW51-AHXHB (T)',
          grade: 'Aプレミアム”ツーリングセレクション”',
          assess_amount: '1,594,000円',
          shop: 'cars足立',
          responsible: '山田太郎',
        },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  methods: {
    updatePageNumber(newPage) {
      this.currentPage = newPage
    },
  },
}
</script>

<style lang="scss">
.v-application--is-ltr
  .assess-list
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center;
}
.assess-list {
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
          td {
            font-size: 12px;
            height: 70px !important;
            color: $blue-400 !important;
          }
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
  .theme--light.v-icon {
    color: $blue-300 !important;
  }
}
</style>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: space-between;
  &__text {
    h1,
    h3 {
      display: inline;
      color: $white-300;
    }
  }
}
</style>
