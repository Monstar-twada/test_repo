<template>
  <div class="customer-regist-user-confirm-page">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      sub-title="登録確認"
      :page="pageTitle"
    >
    </Breadcrumbs>
    <ConfirmWrapper />
  </div>
</template>

<script>
import ConfirmWrapper from './ConfirmWrapper';
import Breadcrumbs from '~/components/common/breadcrumbs/index';
export default {
  components: {
    Breadcrumbs,
    ConfirmWrapper,
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
          text: '顧客編集',
          href: '',
        },
      ],
    };
  },
};
</script>
