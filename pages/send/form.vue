<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
    />
    <FormContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import FormContainer from '~/components/send/FormContainer.vue'

export default {
  components: {
    Breadcrumbs,
    FormContainer,
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
        text: '送客依頼フォーム',
        href: '',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 900px;
}
</style>
