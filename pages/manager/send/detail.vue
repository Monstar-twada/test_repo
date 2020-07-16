<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <DetailContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
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
        text: '送客',
        href: '/send',
      },
      {
        text: '送客依頼詳細',
        href: '',
      },
    ],
  }),
}
</script>
