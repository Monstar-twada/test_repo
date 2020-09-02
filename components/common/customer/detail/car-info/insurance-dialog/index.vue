<template>
  <fg-dialog
    v-model="visible"
    class="customer-insurance-dialog"
    persistent
    max-width="940px"
    title="保険情報"
  >
    <div class="body-wrapper">
      <fg-row gutter="40">
        <fg-col span="12">
          <TextContent label="連番" content="I-123456"></TextContent>
          <TextContent label="得意先" content="米田 道治"></TextContent>
          <TextContent label="車両情報" content="C-123456"></TextContent>
        </fg-col>
        <fg-col span="12">
          <TextContent label="メーカー全角名称" content="トヨタ"></TextContent>
          <TextContent label="車種名" content="プリウス"></TextContent>
          <TextContent
            label="車両登録番号"
            content="品川 310 あ 1234"
          ></TextContent>
        </fg-col>
      </fg-row>

      <div class="mt20">
        <SubTitle sub-title="契約者情報(保険データより)" />
      </div>

      <fg-row gutter="40">
        <fg-col span="12">
          <TextContent
            label="お客様氏名 (カナ)"
            content="ヨネダ ミチハル"
          ></TextContent>
          <TextContent
            label="お客様氏名 (漢字)"
            content="米田 道治"
          ></TextContent>
          <TextContent
            label="住所 (カナ)"
            content="トウキョウトシブヤクシブヤ2チョウメ"
          ></TextContent>
          <TextContent
            label="住所"
            content="東京都渋谷区渋谷2丁目"
          ></TextContent>
          <TextContent label="住所数字" content="00000"></TextContent>
          <TextContent label="お客様郵便番号" content="1500002"></TextContent>
        </fg-col>
        <fg-col span="12">
          <TextContent
            label="電話(自宅/会社)"
            content="03-2587-0009"
          ></TextContent>
          <TextContent label="電話(携帯)" content="080-1234-1234"></TextContent>
          <TextContent label="免許の色数字" content="-"></TextContent>
          <TextContent label="免許の色" content="ゴールド"></TextContent>
          <TextContent label="免許更新年月" content="-"></TextContent>
        </fg-col>
      </fg-row>

      <div class="mt20">
        <SubTitle sub-title="保険情報(保険データより)" />
      </div>

      <fg-row gutter="40">
        <fg-col span="12">
          <TextContent label="保険種目" content="3"></TextContent>
          <TextContent label="保険種類数字" content="9K"></TextContent>
          <TextContent label="保険種類" content=""></TextContent>
          <TextContent label="保険会社数字" content="9"></TextContent>
          <TextContent label="保険会社" content=""></TextContent>
          <TextContent label="証券番号" content="M123456789"></TextContent>
          <TextContent label="新規更新区分数字" content="3"></TextContent>
          <TextContent label="新規更新区分" content=""></TextContent>
          <TextContent label="証券番号枝番" content="2"></TextContent>
          <TextContent label="満期年月日" content="20200417"></TextContent>
          <TextContent label="始期年月日" content="20200417"></TextContent>
          <TextContent label="変更解約日" content=""></TextContent>
          <TextContent label="更新区分" content=""></TextContent>
          <TextContent label="旧保険会社数字" content="9"></TextContent>
          <TextContent label="旧保険会社" content=""></TextContent>
          <TextContent
            label="登録番号下4桁(原付5桁)"
            content="1803"
          ></TextContent>
        </fg-col>
        <fg-col span="12">
          <TextContent
            label="登録番号"
            content="シナガワ 310 ア 1234"
          ></TextContent>
          <TextContent label="車台番号" content="L123S-1234567"></TextContent>
          <TextContent label="車名" content="プリウス"></TextContent>
          <TextContent label="初度登録年月" content="201512"></TextContent>
          <TextContent label="車両保険金額" content="105"></TextContent>
          <TextContent label="車両免責金額" content="5"></TextContent>
          <TextContent label="車両免責金額2" content="10"></TextContent>
          <TextContent label="長期車両2年目金額" content="0"></TextContent>
          <TextContent label="長期車両3年目金額" content="0"></TextContent>
          <TextContent label="長期車両4年目金額" content="0"></TextContent>
          <TextContent label="長期車両5年目金額" content="0"></TextContent>
          <TextContent label="車両特約数字" content=""></TextContent>
          <TextContent label="車両特約" content="15"></TextContent>
          <TextContent label="ロードサービス数字" content="2"></TextContent>
          <TextContent label="ロードサービス" content=""></TextContent>
        </fg-col>
      </fg-row>
    </div>
  </fg-dialog>
</template>

<script>
import TextContent from '../../../common/TextContent'
import SubTitle from '../../../common/SubTitle'
export default {
  components: {
    TextContent,
    SubTitle,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      visible: this.value,
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
.customer-insurance-dialog {
  .body-wrapper {
    padding: 40px 90px;
    .fg-row {
      padding-top: 10px;
      &:before {
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 1px;
        background: $gray-100;
        transform: translateX(-1px);
      }
    }
    .text-content {
      dt {
        flex: 0 0 144px;
      }
    }
  }
}
</style>
