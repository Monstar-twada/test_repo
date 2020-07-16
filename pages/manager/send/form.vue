<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <FormContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import FormContainer from '~/components/send/FormContainer.vue'

export default {
  layout: 'manager',
  components: {
    Breadcrumbs,
    FormContainer,
  },
  data: () => ({
    page: '送客',
    breadcrumbs: [
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
