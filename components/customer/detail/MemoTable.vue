<template>
  <div class="customer-detail-memo-wrapper">
    <ColumnTitle title="活動メモ">
      <PlusButton border @click="editVisible = true" />
    </ColumnTitle>

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="memo-custom-table-wrapper"
    >
      <colgroup width="120"></colgroup>
      <colgroup width="120"></colgroup>
      <colgroup></colgroup>
      <colgroup width="120"></colgroup>
      <colgroup width="120"></colgroup>
      <thead>
        <tr>
          <th>交流日</th>
          <th>車種</th>
          <th>コメント</th>
          <th>担当者</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in itemList" :key="i">
          <td>{{ item.date }}</td>
          <td>{{ item.car_type }}</td>
          <td>
            {{ item.comment }}
          </td>
          <td>
            <div class="">
              <div>{{ item.shop }}</div>
              <div>{{ item.responsible }}</div>
            </div>
          </td>
          <td>
            <div class="flex">
              <RoundBorderButton />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <MemoEditDialog v-model="editVisible" />
  </div>
</template>
<script>
import MemoEditDialog from './memo-edit-dialog/index'
import ColumnTitle from '~/components/customer/ColumnTitle'
import PlusButton from '~/components/breadcrumbs/PlusButton'
import RoundBorderButton from '~/components/customer/detail/button/RoundBorderButton'
export default {
  name: 'MemoTable',
  components: {
    MemoEditDialog,
    ColumnTitle,
    PlusButton,
    RoundBorderButton,
  },
  data: () => ({
    headers: [
      { text: '交流日', align: 'center', value: 'date' },
      { text: '車種', value: 'car_type', align: 'center' },
      { text: 'コメント', value: 'comment', align: 'center' },
      { text: '担当者', value: 'responsible', align: 'center' },
      { text: '', value: 'edit', align: 'center' },
    ],
    itemList: [
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
    page: 1,
    editVisible: false,
  }),
}
</script>

<style lang="scss">
.customer-detail-memo-wrapper {
  .edit-button {
    cursor: pointer;
  }
  .memo-custom-table-wrapper {
    width: 100%;
    tr {
      th {
        background: $white-100;
        height: 40px;
        text-align: center;
        font-size: 12px;
        color: $blue-200;
      }
      td {
        height: 70px;
        text-align: center;
        font-size: 12px;
        color: $blue-200;
        position: relative;
        &:before {
          position: absolute;
          top: 15%;
          left: 0;
          content: '';
          background: $gray-100;
          width: 1px;
          height: 70%;
        }
        &:first-child {
          &:before {
            background: none;
          }
        }
      }
    }
    tbody {
      tr {
        &:nth-child(2n) td {
          background: $white-100;
        }
      }
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
