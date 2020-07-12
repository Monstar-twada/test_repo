<template>
  <div class="admin-body-container-wrapper mt30 staff-column-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>スタッフ一覧</h2>
        <Pagination />
      </div>
      <v-data-table
        :headers="headers"
        :items="itemList"
        :items-per-page="itemsPerPage"
        :page.sync="currentPage"
        hide-default-footer
      >
        <template v-slot:item.name="{ item }">
          <div class="table-avatar-wrapper">
            <v-avatar size="30">
              <v-img
                :src="require('~/static/breadcrumbs/' + item.image_path)"
              ></v-img>
            </v-avatar>
            {{ item.name }}
          </div>
        </template>
      </v-data-table>
    </div>
    <div class="right-wrapper"></div>
  </div>
</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'Staff',
  components: {
    Pagination,
  },
  data() {
    return {
      currentItem: {},
      headers: [
        {
          text: '名前',
          align: 'center',
          value: 'name',
          sortable: false,
        },
        {
          text: '権限',
          value: 'job',
          align: 'center',
          width: '200px',
          sortable: false,
        },
        { text: '勤続年数', value: 'year', align: 'center', sortable: false },
        {
          text: '電話番号',
          value: 'tel',
          align: 'center',
          width: '180px',
          sortable: false,
        },
        {
          text: '所属店舗',
          value: 'shop_name',
          align: 'center',
          sortable: false,
        },
      ],
      itemList: [
        {
          id: 10000001,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          year: '3年',
          image_path: 'person.png',
        },
        {
          id: 10000002,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          year: '10年',
          image_path: 'person.png',
        },
        {
          id: 10000003,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          year: '3年',
          image_path: 'person.png',
        },
        {
          id: 10000004,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          year: '10年',
          image_path: 'person.png',
        },
        {
          id: 10000005,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          year: '3年',
          image_path: 'person.png',
        },
        {
          id: 10000006,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          year: '10年',
          image_path: 'person.png',
        },
        {
          id: 10000007,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          year: '3年',
          image_path: 'person.png',
        },
        {
          id: 10000008,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          year: '10年',
          image_path: 'person.png',
        },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  created() {
    this.currentItem = this.itemList[0] || {}
  },
}
</script>

<style lang="scss">
.admin-body-container-wrapper {
  &.staff-column-wrapper {
    .table-avatar-wrapper {
      text-align: left;
      .v-avatar {
        margin-right: 8px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .right-wrapper {
      background: none;
    }
  }
}
</style>
