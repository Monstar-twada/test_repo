<template>
  <div class="ma-list">
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
      @click:row="
        (itemlist) => {
          $router.push(`/customer/detail/`)
        }
      "
    >
      <template v-slot:item.name="{ item }">
        <div class="user">
          <v-avatar size="38" class="user__image">
            <v-img :src="require('~/static/customer/profile-edit.svg')"></v-img>
          </v-avatar>
          <div class="user__name ml10">
            <h3>{{ item.name }}</h3>
            <span>({{ item.age }}歳)</span>
          </div>
        </div>
      </template>
      <template v-slot:item.maker="{ item }">
        <div class="car">
          <h4>{{ item.car_maker }}</h4>
          <h4>{{ item.car_type }}</h4>
        </div>
      </template>
      <template v-slot:item.tel="{ item }">
        <div class="tel">
          <h4 class="fixed-tel">{{ item.fixed_tel }}</h4>
          <h4 class="mobile-tel">{{ item.mobile_tel }}</h4>
        </div>
      </template>
      <template v-slot:item.call="{ item }">
        <BooleanFlg :flg="item.call" />
      </template>
      <template v-slot:item.dm="{ item }">
        <BooleanFlg :flg="item.dm" />
      </template>
      <template v-slot:item.sms="{ item }">
        <BooleanFlg :flg="item.sms" />
      </template>
      <template v-slot:item.order="{ item }">
        <BooleanFlg :flg="item.order" />
      </template>
      <template v-slot:item.storing="{ item }">
        <BooleanFlg :flg="item.storing" />
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
import BooleanFlg from '~/components/ma/detail/BooleanFlg.vue'
export default {
  name: 'CustomerResult',
  components: {
    PaginationComponent,
    BooleanFlg,
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        sortable: true,
        align: 'center',
        value: 'id',
        width: '50px',
      },
      { text: '顧客名', value: 'name', align: 'center', width: '180px' },
      {
        text: '住所',
        value: 'address',
        align: 'start',
        width: '100px',
        sortable: false,
      },
      {
        text: '対象車両',
        value: 'maker',
        align: 'start',
        width: '80px',
        sortable: false,
      },
      { text: '電話番号', value: 'tel', align: 'start', sortable: false },
      {
        text: 'メールアドレス',
        value: 'mail',
        align: 'center',
        sortable: false,
      },
      {
        text: 'コール',
        value: 'call',
        align: 'center',
        width: '60px',
        sortable: false,
      },
      {
        text: 'DM',
        value: 'dm',
        align: 'center',
        width: '60px',
        sortable: false,
      },
      {
        text: 'SMS',
        value: 'sms',
        align: 'center',
        width: '60px',
        sortable: false,
      },
      {
        text: '予約',
        value: 'order',
        align: 'center',
        width: '60px',
        sortable: false,
      },
      {
        text: '入庫',
        value: 'storing',
        align: 'center',
        width: '60px',
        sortable: false,
      },
    ],
    itemlist: [
      {
        id: 12301,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: false,
        storing: false,
      },
      {
        id: 12302,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: false,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12303,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12304,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: false,
        storing: false,
      },
      {
        id: 12305,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: false,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12306,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12307,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: false,
        storing: false,
      },
      {
        id: 12308,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: false,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12309,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12310,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: false,
        storing: false,
      },
      {
        id: 12311,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: false,
        dm: false,
        sms: true,
        order: true,
        storing: false,
      },
      {
        id: 12312,
        name: '米田 道春',
        address: '東京都渋谷区渋谷2丁目',
        image_path: 'person.png',
        age: 31,
        fixed_tel: '03-1234-1234',
        mobile_tel: '080-1234-1234',
        mail: 'yoneda@gmail.com',
        car_maker: 'トヨタ',
        car_type: 'プリンス',
        call: true,
        dm: false,
        sms: true,
        order: true,
        storing: false,
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
                background: url('../../customer/custom-table/img/table-sort-arrow-normal.svg')
                  no-repeat 0 0;
                transform: rotate(180deg);
              }
              &:after {
                content: '';
                position: absolute;
                top: calc(50% + 2px);
                right: -10px;
                width: 7px;
                height: 4px;
                background: url('../../customer/custom-table/img/table-sort-arrow-normal.svg')
                  no-repeat 0 0;
              }
            }
          }
          th.asc {
            span {
              font-weight: bold;
              &:before {
                background: url('../../customer/custom-table/img/table-sort-arrow.svg');
              }
            }
          }
          th.desc {
            span {
              font-weight: bold;
              &:after {
                background: url('../../customer/custom-table/img/table-sort-arrow.svg');
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
            padding: 0 8px !important;
            font-size: 12px !important;
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
.id a {
  text-decoration: none;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;

  &__name {
    text-align: left;
    span {
      font-size: 10px;
      font-weight: bold;
    }
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
.tel {
  .fixed-tel:before {
    content: url('../img/fixed_tel.svg');
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
  }

  .mobile-tel:before {
    content: url('../img/mobile_tel.svg');
    display: inline-block;
    width: 8px;
    height: 11px;
    margin: 0 5px 0 1px;
  }
}
</style>
