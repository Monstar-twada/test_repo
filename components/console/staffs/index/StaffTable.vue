<template>
  <div class="staffs-table-container-wrapper">
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
        </div>
      </div>
      <fg-table :data="itemList" thead-class="thead-bg">
        <fg-table-column show="name" label="スタッフ名" :sortable="true">
          <template v-slot="item">
            <div class="table-avatar-wrapper">
              <fg-avatar
                size="30"
                :data="{
                  url: `/common/${item.image_path}`,
                  name: `${item.name}`,
                }"
                circle
                text-flex-direction-column
              ></fg-avatar>
            </div>
          </template>
        </fg-table-column>
        <fg-table-column show="department" label="所属部署" :sortable="false" />
        <fg-table-column show="role" label="権限" :sortable="false" />
        <fg-table-column
          show="email"
          label="メールアドレス"
          :sortable="false"
        />
        <fg-table-column
          show="logined"
          label="最終ログイン日"
          :sortable="false"
        />
        <fg-table-column show="manager" label="" :sortable="false">
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
export default {
  name: 'Staff',
  data() {
    return {
      currentItem: {},
      headers: [
        {
          text: 'スタッフ名',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: '所属部署',
          value: 'department',
          align: 'center',
          sortable: false,
        },
        {
          text: '権限',
          value: 'role',
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
          text: '最終ログイン日',
          value: 'logined',
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
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
        },
        {
          image_path: 'person.png',
          name: '谷口 広大',
          department: 'イノベーション本部',
          role: 'System Admin',
          email: 'aaaa@cars-enjoy.com',
          logined: '2020/02/02',
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
    moveToEdit(id) {},
  },
}
</script>

<style lang="scss">
.staffs-table-container-wrapper {
  color: $--color-primary;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .fg-table__table {
    .thead-bg {
      tr {
        border-bottom: 1px solid #dfe6f0;
        th {
          background-color: #f9f9f9;
        }
      }
    }
  }
  .left-wrapper {
    background-color: $--color-white;
    width: 100%;
    .table-avatar-wrapper {
      display: flex;
      justify-content: center;
      .v-avatar {
        margin-right: 8px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .header-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 25px 20px;
      .add-staff {
        display: flex;
        align-items: center;
        & > p {
          font-size: 12px;
          font-weight: bold;
          margin: 0 10px 0 0;
        }
      }
    }
  }
}
</style>
