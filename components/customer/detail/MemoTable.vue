<template>
  <v-row class="customer-memo ma-0 pa-0">
    <div class="title">
      <h2>活動メモ</h2>
      <p><v-img :src="require('~/static/customer/btn-plus.svg')" /></p>
    </div>
    <v-data-table
      :headers="headers"
      :items="itemlist"
      :page.sync="page"
      hide-default-footer
      :item-class="1234"
      class="memolistTable"
    >
      <template v-slot:item.responsible="{ item }">
        <div class="">
          <h4>{{ item.shop }}</h4>
          <h4>{{ item.responsible }}</h4>
        </div>
      </template>
      <template v-slot:item.edit="{ item }">
        <div class="">
          <a :src="item.id">
            <v-img
              :src="require('~/static/customer/btn-edit.svg')"
              width="60"
            />
          </a>
        </div>
      </template>
    </v-data-table>
  </v-row>
</template>
<script>
export default {
  name: 'MemoTable',
  data: () => ({
    headers: [
      { text: '交流日', align: 'center', value: 'date' },
      { text: '車種', value: 'car_type', align: 'center' },
      { text: 'コメント', value: 'comment', align: 'center' },
      { text: '担当者', value: 'responsible', align: 'center' },
      { text: '', value: 'edit', align: 'center' },
    ],
    itemlist: [
      {
        id: 1,
        date: 'R2/11/31',
        car_type: 'プリウス',
        comment:
          '入電　SMSからの返信　5/15の9:30に無料12ヶ月点検の予約いただきました。',
        shop: 'cars足立店',
        responsible: ' 山田太郎',
      },
      {
        id: 2,
        date: 'R2/11/31',
        car_type: 'プリウス',
        comment:
          '入電　SMSからの返信　5/15の9:30に無料12ヶ月点検の予約いただきました。',
        shop: 'cars足立店',
        responsible: ' 山田太郎',
      },
      {
        id: 3,
        date: 'R2/11/31',
        car_type: 'プリウス',
        comment:
          '入電　SMSからの返信　5/15の9:30に無料12ヶ月点検の予約いただきました。',
        shop: 'cars足立店',
        responsible: ' 山田太郎',
      },
      {
        id: 4,
        date: 'R2/11/31',
        car_type: 'プリウス',
        comment:
          '入電　SMSからの返信　5/15の9:30に無料12ヶ月点検の予約いただきました。',
        shop: 'cars足立店',
        responsible: ' 山田太郎',
      },
    ],
  }),
}
</script>

<style lang="scss">
.customer-memo {
  .v-data-table {
    width: 100%;
    &__wrapper {
      table {
        tbody {
          tr {
            font-size: 12px;
            height: 70px !important;
            color: $blue-500;
            td {
              height: 50px !important;
              margin: 10px 0;
              //border-right: 1px $gray-100 solid;
            }
          }
          tr:nth-child(even) {
            background-color: $white-100;
          }
        }
      }
    }
  }
}

.theme--light.v-icon {
  color: $blue-300 !important;
}
</style>
<style lang="scss" scoped>
.customer-memo {
  margin-left: 0 !important;
  .title {
    width: 100%;
    height: 60px;
    border-bottom: 1px $gray-100 solid;
    color: $blue-200;

    h2 {
      float: left;
      line-height: 20px;
      margin: 20px auto 20px 20px;
    }

    p {
      float: right;
      margin: 20px;

      img {
        width: 30px;
      }
    }
  }
}
</style>
