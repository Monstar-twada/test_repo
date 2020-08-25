<template>
  <div class="admin-body-container-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>スタッフ一覧</h2>
        <div class="add-staff">
          <p>スタッフ追加</p>
          <fg-button circle type="primary" icon="plus" width="30px" />
        </div>
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
              <v-img :src="`/common/${item.image_path}`"></v-img>
            </v-avatar>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:item.edit="{ item }">
          <fg-button
            width="63"
            border
            size="mini"
            prefix-icon="edit"
            @click="moveToEdit(item.id)"
          >
            編集
          </fg-button>
        </template>
      </v-data-table>
    </div>
    <dl class="bottom-pagenation">
      <dd>
        <fg-pagination
          v-model="currentPage"
          :total="itemList.length"
          :page-size="itemsPerPage"
          hide-page-info
        ></fg-pagination>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Staff',
  data() {
    return {
      currentItem: {},
      headers: [
        {
          text: 'cars Manager ID',
          value: 'id',
          align: 'center',
          sortable: false,
        },
        {
          text: '氏名',
          align: 'center',
          value: 'name',
          sortable: false,
        },
        {
          text: '権限',
          value: 'job',
          align: 'center',
          sortable: false,
        },
        {
          text: '所属店舗',
          value: 'shop_name',
          align: 'center',
          sortable: false,
        },
        {
          text: '電話番号',
          value: 'tel',
          align: 'center',
          sortable: false,
        },
        {
          text: 'メールアドレス',
          value: 'email',
          align: 'center',
          sortable: false,
        },
        {
          text: '',
          value: 'edit',
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
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000002,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000003,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000004,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000005,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000006,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000007,
          shop_name: '足立店',
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000008,
          shop_name: '足立店＋その他複数店舗',
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  created() {
    this.currentItem = this.itemList[0] || {}
  },
  methods: {
    moveToEdit(id) {
      this.$router.push({
        path: `/admin/staff/edit/${id}`,
      })
    },
  },
}
</script>

<style lang="scss">
.admin-body-container-wrapper {
  color: $blue-200;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  .left-wrapper {
    background-color: $white-300;
    width: 100%;
    .table-avatar-wrapper {
      text-align: left;
      .v-avatar {
        margin-right: 8px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .header-wrapper {
      .add-staff {
        display: flex;
        align-items: center;
        & > p {
          font-size: 12px;
          margin: 0 10px 0 0;
        }
      }
    }
  }
  .bottom-pagenation {
    margin-top: 20px;
    background-color: transparent;
  }
}
</style>
