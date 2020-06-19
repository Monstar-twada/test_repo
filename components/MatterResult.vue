<template>
  <div class="list">
    <div class="list__paging">
      <div class="list__paging--info">
        <p class="total">200</p>
        <p>件中 21〜40件を表示</p>
      </div>
      <v-pagination
        v-model="currentPage"
        :length="getTotalPage"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class="list__paging--pagenation"
      ></v-pagination>
    </div>
    <v-simple-table fixed-header height="300px" class="list__table">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="(head, i) in table.headers"
              :key="`thead-${i}`"
              class="text-center"
            >
              {{ head.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in table.items" :key="item.id" class="text-center">
            <td>
              <nuxt-link to="/matter/detail">{{ item.id }}</nuxt-link>
            </td>
            <td>{{ item.createdAt[0] }}<br />{{ item.createdAt[1] }}</td>
            <td>{{ item.updatedAt[0] }}<br />{{ item.updatedAt[1] }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.subCategory }}</td>
            <td>
              <v-avatar :size="36">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <span>{{ item.customer[1] }}</span>
              <span>{{ item.customer[2] }}</span>
            </td>
            <td>{{ item.phone }}</td>
            <td>{{ item.charge[0] }}<br />{{ item.charge[1] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="list__paging">
      <div class="list__paging--info">
        <p class="total">200</p>
        <p>件中 21〜40件を表示</p>
      </div>
      <v-pagination
        v-model="currentPage"
        :length="getTotalPage"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class="list__paging--pagination"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatterResult',
  components: {},
  data: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    pageCount: 0,
    table: {
      headers: [
        { text: '案件ID', sortable: true, value: 'col1' },
        { text: '登録日', sortable: true, value: 'col2' },
        { text: '最終更新日時', sortable: true, value: 'col3' },
        { text: 'カテゴリー', sortable: false, value: 'col4' },
        { text: 'サブカテゴリー', sortable: false, value: 'col5' },
        { text: '顧客名', sortable: true, value: 'col6' },
        { text: '連絡先電話番号', sortable: false, value: 'col7' },
        { text: '担当者', sortable: false, value: 'col8' },
      ],
      items: [
        {
          id: 'AT-123',
          createdAt: ['R2/11/31', '10:00'],
          updatedAt: ['R2/11/31', '10:00'],
          category: '買取',
          subCategory: 'AA',
          customer: ['url', '米田 道春', '（31歳）'],
          phone: '080-1234-1234',
          charge: ['cars足立店', '山田太郎'],
        },
      ],
    },
  }),
  computed: {
    getTotalPage() {
      return this.table.items.length / 10 + 1
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 60px;

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
    &--pagination {
    }
  }

  &__table {
    border-radius: 6px;
    thead {
      tr {
        th {
          color: $blue-200 !important;
          &:first-child {
            border-radius: 6px 0 0 0;
          }
          &:last-child {
            border-radius: 0 6px 0 0;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: $blue-200 !important;
        }
      }
    }
  }
}
</style>
