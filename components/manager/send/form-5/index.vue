<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>依頼内容を選択してください</h2>
      <div class="context-form .form-5">
        <fg-input
          v-model="commit"
          placeholder="入力ください"
          type="textarea"
          clearable
        />
      </div>
    </div>
    <div class="footer-button-wrapper">
      <fg-button suffix-icon="arrow-right" border bold width="240px"
        >次へ</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        white-transparent
        round
        bold
        width="240px"
        >戻る</fg-button
      >
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
export default {
  components: {
    Breadcrumbs,
  },
  props: {},
  data() {
    return {
      page: '送客',
      breadcrumbs: [
        {
          text: '送客',
          href: '',
        },
        {
          text: '送客依頼フォーム',
          href: '',
        },
      ],
      commit:
        '・日時場所などの取り決めがある場合は記載してください\n・対応車両のメーカー・車種・ナンバー等の特徴はお書きください\n・対応してほしい作業内容',
    }
  },

  methods: {
    handleClick: (e) => {
      console.log(e)
    },
  },
}
</script>
<style>
.form-5 .fg-input textarea {
  resize: none;
}
</style>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 365px;
  margin: 0 auto;
  background: $white-300;
  border-radius: 6px;
  color: $blue-200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $gray-100 solid;
    padding-left: 20px;
  }

  &-form {
    width: 76%;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .fg-input {
      width: 100%;
      textarea {
        resize: none;
      }
    }
  }
}
.footer-button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
  .fg-button {
    display: flex;
    margin-top: 20px;
  }
}
</style>
