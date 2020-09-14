<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>送客するお客様及び連絡先は以下でよろしいでしょうか？</h2>
      <div class="context-form form-3">
        <div class="context-form-left">
          <fg-avatar
            class="form3-profile"
            :data="{
              url: '/common/person_default.svg',
              name: `${profile.lastName} ${profile.firstName}`,
              subName: `（${profile.age || '-'}歳）`,
              summary: `${profile.lastNameKana} ${profile.firstNameKana}`,
            }"
            text-width="140px"
            circle
            text-flex-direction-column
          ></fg-avatar>
        </div>
        <div class="context-form-right"></div>
        <fg-form class="context-form-right-form">
          <fg-form-item label="携帯電話">
            <fg-input
              v-model="form.cellphoneNumber"
              size="small"
              width="120px"
            ></fg-input>
          </fg-form-item>

          <fg-form-item label="電話番号">
            <fg-input
              v-model="form.phoneNumber"
              size="small"
              width="120px"
            ></fg-input>
          </fg-form-item>

          <span class="attention">※ 電話番号はいずれか必須</span>
        </fg-form>
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
      profile: {
        lastName: '米田',
        firstName: '道春',
        lastNameKana: 'ヨネダ',
        firstNameKana: 'ミチハル',
        age: 31,
      },
    }
  },
}
</script>
<style>
.form-3 .text-wrapper.text-flex-direction-column .__summary {
  margin-left: 0;
  font-size: 10px;
  font-weight: normal;
}
</style>
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
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &-left {
      width: 50%;
    }
    &-right {
      width: 50%;

      &-form {
        width: 100%;
      }
    }

    .attention {
      font-size: 12px;
      font-weight: bold;
      color: $--color-warning;
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
