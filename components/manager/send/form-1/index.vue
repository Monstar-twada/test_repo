<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <div v-for="(item, i) in cardList" :key="i" class="context-item">
        <SendCard
          :icon-src="item.iconSrc"
          :title="item.title"
          :sub-title="item.subTitle"
          :link="item.link"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import SendCard from '~/components/manager/send/form-1/card/index'
export default {
  components: {
    SendCard,
    Breadcrumbs,
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
      cardList: [
        {
          iconSrc: 'person',
          title: '既存顧客を送客する',
          subTitle: '自社の顧客をリストの中から検索し送客する',
          link: '',
        },
        {
          iconSrc: 'car',
          title: '新規顧客を送客する',
          subTitle: '会員登録せず、顧客情報と車両情報を入力して送客する',
          link: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-item {
    margin: 0 30px;
  }
}
</style>
