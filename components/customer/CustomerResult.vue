<template>
  <div class="customer-list">
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
      :page.sync="page"
      hide-default-footer
      class="itemlistTable"
      :item-class="itemListClass"
    >
      <template v-slot:item.id="{ item }">
        <div class="id">
          <nuxt-link to="/customer/detail">{{ item.id }}</nuxt-link>
        </div>
      </template>
      <template v-slot:item.name="{ item }">
        <div class="user">
          <v-avatar size="38" class="user__image">
            <v-img
              :src="require('~/static/breadcrumbs/' + item.image_path)"
            ></v-img>
          </v-avatar>
          <h3 class="pl5">{{ item.name }}</h3>
          <span>（{{ item.age }}際）</span>
        </div>
      </template>
      <template v-slot:item.maker="{ item }">
        <div class="car">
          <h3>{{ item.car_maker }}</h3>
          <h4>{{ item.car_type }}</h4>
          <h4 class="car__more">+1</h4>
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
  name: 'CustomerResult',
  components: {
    PaginationComponent,
  },
  data: () => ({
    headers: [
      {
        text: '顧客ID',
        sortable: true,
        align: 'center',
        value: 'id',
      },
      { text: '顧客名', value: 'name', align: 'center', width: '300px' },
      { text: '連絡先情報', value: 'tel', align: 'center' },
      { text: '所有車', value: 'maker', align: 'start', width: '120px' },
      { text: '登録ナンバー', value: 'car_number', align: 'center' },
      { text: '車検満了日', value: 'inspection_finish_date', align: 'center' },
      { text: '初度登録年月', value: 'registration_date', align: 'center' },
    ],
    itemlist: [
      {
        id: 10000001,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000002,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000003,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000004,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000005,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000006,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000007,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000008,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000009,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000010,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000011,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000012,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000013,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000014,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000015,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000016,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000017,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000018,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000019,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000020,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000018,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000019,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
      },
      {
        id: 10000020,
        name: '米田　道春',
        image_path: 'person.png',
        age: 31,
        tel: '080-1234-1234',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        car_number: '品川 300 あ 1234',
        inspection_finish_date: 'R2/02/24',
        registration_date: 'R1/01/19',
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
.customer-list {
  .v-data-table {
    table {
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 40px !important;
            color: $blue-200 !important;
            text-align: center;
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
.car {
  position: relative;

  &__more {
    position: absolute;
    top: 20px;
    right: 2px;
    display: block;
    text-align: center;
    width: 30px;
    height: 18px;
    border-radius: 8px;
    background-color: $blue-200;
    color: $white-300;
  }
}

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
