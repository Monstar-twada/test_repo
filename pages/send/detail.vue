<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
    />
    <DetailContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import DetailContainer from '~/components/send/DetailContainer.vue'

export default {
  components: {
    Breadcrumbs,
    DetailContainer,
  },
  data: () => ({
    page: '送客',
    breadcrumbs: [
      {
        text: 'home',
        href: '/',
      },
      {
        text: '送客',
        href: '/send',
      },
      {
        text: '送客依頼詳細',
        href: '',
      },
    ],
  }),
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 900px;
}
</style>
