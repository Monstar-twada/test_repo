<template>
  <v-dialog v-model="visible" persistent scrollable max-width="670px">
    <v-card class="change-car-dialog-card">
      <DialogHeader title="車両選択" @close="visible = false" />
      <PaginationComponent
        :current-page.sync="currentPage"
        :total="itemList.length"
        :per-page="itemsPerPage"
        @updateEvent="updatePageNumber"
      />
      <table border="0" cellpadding="0" cellspacing="0">
        <colgroup width="150"></colgroup>
        <colgroup width="100"></colgroup>
        <colgroup width="250"></colgroup>
        <thead>
          <tr>
            <th>メーカー</th>
            <th>車種</th>
            <th>グレード</th>
            <th>登録ナンバー</th>
          </tr>
        </thead>
      </table>
      <v-card-text style="height: 450px;">
        <table border="0" cellpadding="0" cellspacing="0">
          <colgroup width="150"></colgroup>
          <colgroup width="100"></colgroup>
          <colgroup width="250"></colgroup>
          <tbody>
            <tr v-for="(item, i) in itemList" :key="i">
              <td>{{ item.car_maker }}</td>
              <td>{{ item.car_type }}</td>
              <td v-html="item.grade"></td>
              <td>{{ item.car_number }}</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
import PaginationComponent from '~/components/common/PaginationComponent.vue'
export default {
  components: {
    DialogHeader,
    PaginationComponent,
  },
  props: {
    value: Boolean,
  },
  data() {
    const item = {
      id: 10000001,
      car_maker: 'フォルクスワーゲン',
      car_type: 'プリンス',
      grade: 'Aプレミアム<br>”ツーリングセレクション”',
      car_number: '大阪 103 す 4785',
    }
    const itemList = []

    for (let i = 0; i < 10; i++) {
      itemList.push({
        ...item,
        id: item.id + i,
      })
    }
    return {
      visible: this.value,
      itemList,
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    updatePageNumber(newPage) {
      this.currentPage = newPage
    },
  },
}
</script>

<style lang="scss">
.change-car-dialog-card {
  position: relative;
  table {
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
  }
  .v-card__text {
    padding: 0 !important;
  }
}
</style>
