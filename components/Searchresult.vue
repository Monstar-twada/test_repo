<template>
  <div class="searchresult">
    <div class="pageinfo">
      <div class="numofitems">
        <h2>200</h2>
        <h3>件中 21〜40件を表示</h3>
      </div>
      <v-pagination
        v-model="page"
        :length="5"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class="pagination"
      ></v-pagination>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :sort-by="['案件ID', '登録日', '最終更新日時', '顧客名']"
      :sort-desc="[false, false, false, true]"
      multi-sort
      hide-default-footer
      class="datatable"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="pageinfo">
      <div class="numofitems">
        <h2>200</h2>
        <h3>件中 21〜40件を表示</h3>
      </div>
      <v-pagination
        v-model="page"
        :length="5"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class="pagination"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  components: {},
  data: () => ({
    page: 1,
    itemsPerPage: 10,
    pageCount: 0,
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
        col1: 'Frozen Yogurt',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt2',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt3',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt4',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt5',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt6',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt7',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt8',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt9',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
      {
        col1: 'Frozen Yogurt10',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0,
        col6: '1%',
        col7: '1%',
        col8: '1%',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.searchresult {
  width: 100%;
  height: 60px;
}
.pageinfo {
  width: 100%;
  padding-top: 18.5px;
  padding-bottom: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & .numofitems {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    h2 {
      margin-right: 4.3px;
      color: $white-300;
    }
    h3 {
      color: $white-300;
    }
  }
  & .pagination {
  }
}
</style>
