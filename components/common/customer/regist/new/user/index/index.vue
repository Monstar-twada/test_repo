<template>
  <div class="customer-regist-user-confirm-page">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      sub-title="登録確認"
      :page="pageTitle"
    >
    </Breadcrumbs>
    <FormWrapper />
  </div>
</template>

<script>
import FormWrapper from './FormWrapper'
import Breadcrumbs from '~/components/common/breadcrumbs/index'
export default {
  components: {
    Breadcrumbs,
    FormWrapper,
  },
  data() {
    return {
      pageTitle: '顧客管理',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '',
        },
        {
          text: '顧客登録',
          href: '',
        },
      ],
    }
  },
}
</script>
