<template>
  <div class="admin-body-container-wrapper">
    <div class="left-wrapper">
      <div class="header-wrapper">
        <h2>スタッフ一覧</h2>
        <div class="add-staff">
          <p>スタッフ追加</p>
          <fg-button
            circle
            type="primary"
            icon="plus"
            width="30px"
            @click="visibleDialog = true"
          />
          <IndexDialog v-model="visibleDialog" />
        </div>
      </div>
      <fg-table :data="itemList" thead-class="thead-bg">
        <fg-table-column
          show="id"
          label="cars Manager ID"
          :sortable="false"
        ></fg-table-column>
        <fg-table-column show="name" label="氏名" :sortable="false">
          <template v-slot="item">
            <div class="table-avatar-wrapper">
              <fg-avatar
                size="30"
                :data="{
                  url: `${item.image_path}`,
                  name: `${item.name}`,
                }"
                text-width="120px"
                circle
                text-flex-direction-column
              ></fg-avatar>
            </div>
          </template>
        </fg-table-column>
        <fg-table-column show="job" label="権限" :sortable="false" />
        <fg-table-column show="shop_name" label="所属店舗" :sortable="false">
          <template v-slot="item">
            <div class="table-shop-wrapper">
              <p
                v-for="(shop, i) in item.shop_name"
                :key="`${i}`"
                class="table-shop-wrapper_item"
              >
                {{ shop }}
              </p>
            </div>
          </template>
        </fg-table-column>
        <fg-table-column show="tel" label="電話番号" :sortable="false" />
        <fg-table-column
          show="email"
          label="メールアドレス"
          :sortable="false"
        />
        <fg-table-column show label :sortable="false">
          <template v-slot="item">
            <fg-button
              width="63"
              border
              size="mini"
              prefix-icon="edit"
              @click="moveToEdit(item.id)"
              >編集</fg-button
            >
          </template>
        </fg-table-column>
      </fg-table>
    </div>
    <dl class="bottom-pagenation">
      <dd>
        <fg-pagination
          v-model="currentPage"
          :total="itemList.length"
          :page-size="itemsPerPage"
          theme="blue"
          hide-page-info
        ></fg-pagination>
      </dd>
    </dl>
  </div>
</template>

<script>
import IndexDialog from '~/components/common/admin/manager/staff/IndexDialog'

export default {
  name: 'Staff',
  components: {
    IndexDialog,
  },
  data() {
    return {
      visibleDialog: false,
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
          shop_name: ['cars足立'],
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000002,
          shop_name: ['cars足立', 'cars板橋'],
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000003,
          shop_name: ['cars足立', 'cars杉並'],
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000004,
          shop_name: ['cars大宮'],
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000005,
          shop_name: ['cars足立'],
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000006,
          shop_name: ['cars板橋'],
          name: '大倉 秀樹',
          job: 'マネージャー',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000007,
          shop_name: ['cars杉並'],
          name: '谷口 広大',
          job: 'スタッフ',
          tel: '03-1234-1234',
          image_path: 'person.png',
          email: 'aaaa@cars-enjoy.com',
        },
        {
          id: 10000008,
          shop_name: ['cars大宮'],
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
  color: $--color-primary;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .left-wrapper {
    background-color: $--color-white;
    width: 100%;
    .table-avatar-wrapper {
      text-align: left;
      .v-avatar {
        margin-right: 8px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .table-shop-wrapper {
      &_item {
        margin-bottom: 0;
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
