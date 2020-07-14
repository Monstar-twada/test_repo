<template>
  <v-dialog v-model="visible" max-width="480px">
    <v-card class="questionnaire-results-dialog-card">
      <DialogHeader title="アンケート結果" @close="visible = false" />
      <ul class="remark">
        <li>取引種別：車検</li>
        <li>回答日時：2020/05/25 9:00</li>
        <li>店舗：cars足立</li>
      </ul>
      <dl class="list-wrapper">
        <template v-for="(item, i) in questionnaireList">
          <dt :key="item.q">{{ item.q }}</dt>
          <dd :key="i">
            <div>{{ item.w }}</div>
          </dd>
        </template>
      </dl>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  components: {
    DialogHeader,
  },
  props: {
    value: Boolean,
  },
  data() {
    const dataTypeList = [
      '顧客データ（Vertice）',
      '車両データ（Vertice）',
      '顧客データ（ブロードリーフ NSクラウド）',
      '車両データ（ブロードリーフ NSクラウド）',
      '顧客データ（ブロードリーフ NSオンプレ）',
      '車両データ（ブロードリーフ NSオンプレ）',
    ]
    return {
      dataType: dataTypeList[0],
      visible: this.value,
      dataTypeList,
      questionnaireList: [
        {
          q: '本日のご来店目的を教えて下さい。',
          w:
            '本日のご来店目的を教えて下さい。本日のご来店目的を教えて下さい。本日のご来店目的を教えて下さい。',
        },
        {
          q: '気になる点はございますか？',
          w: '気になる点はございますか？',
        },
        {
          q: 'あと何回車検を受けられる予定でしょうか？',
          w: 'あと何回車検を受けられる予定でしょうか？',
        },
        {
          q: 'ご購入を検討されているお車があれば教えて下さい。',
          w: 'ご購入を検討されているお車があれば教えて下さい。',
        },
      ],
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
  methods: {},
}
</script>

<style lang="scss">
.questionnaire-results-dialog-card {
  position: relative;
  ul.remark {
    display: flex;
    border-bottom: 1px solid $gray-100;
    list-style: none;
    justify-content: flex-start;
    height: 50px;
    align-items: center;
    padding: 0;
    li {
      margin: 0 10px 0 20px;
      color: $blue-200;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .list-wrapper {
    padding-bottom: 23px;
    dt {
      margin: 20px 23px 0;
      font-size: 14px;
      font-weight: bold;
      color: $blue-200;
      &:before {
        content: 'Q. ';
        color: $blue-200;
        font-size: 20px;
      }
    }
    dd {
      margin: 14px 23px 10px 47px;
      div {
        padding: 10px 13px;
        background: $white-100;
        border-radius: 4px;
        display: flex;
        align-items: center;
        border: 1px solid $gray-100;
        font-size: 12px;
        color: $blue-200;
        text-align: justify;
      }
    }
  }
}
</style>
