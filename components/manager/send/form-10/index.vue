<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>お客様のお名前を入力してください。</h2>
      <fg-form
        ref="form"
        :model="form"
        label-width="120px"
        class="context-form"
      >
        <fg-form-item label="氏名">
          <fg-row gutter="20">
            <fg-col span="12">
              <fg-input
                v-model="form.lastName"
                width="210px"
                placeholder="姓"
              ></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input
                v-model="form.firstName"
                width="210px"
                placeholder="名"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
      </fg-form>
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
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          lastName: '',
          firstName: '',
        }
      },
    },
  },
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
    }
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 365px;
  margin: 0 auto;
  background: $--color-white;
  border-radius: 6px;
  color: $--color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $--color-border solid;
    padding-left: 20px;
  }

  &-form {
    width: 60%;
    height: 300px;
    margin: 110px auto 0;
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
