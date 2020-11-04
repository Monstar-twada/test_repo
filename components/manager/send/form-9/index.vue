<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <div class="title">
        <h2>送客する車両は以下にございますか？</h2>
        <span>車両が登録されていない場合は追加してください→</span>
      </div>
      <CarList />
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
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue';
import CarList from '~/components/manager/send/form-9/car-list/index';
export default {
  components: {
    Breadcrumbs,
    CarList,
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          lastName: '',
          firstName: '',
        };
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
      car: {
        maker: 'トヨタ',
        type: 'プリウス',
      },
      project: [
        {
          iconSrc: 'buy',
        },
        {
          iconSrc: 'sale',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 900px;
  margin: 0 auto;
  background: $--color-white;
  border-radius: 6px;
  color: $--color-primary;

  .title {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $--color-border solid;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 12px;
      margin-right: 20px;
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
