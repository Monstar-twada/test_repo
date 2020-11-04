<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <EditBodyContainer />
  </div>
</template>

<script>
import EditBodyContainer from './EditBodyContainer';
import Breadcrumbs from '~/components/common/breadcrumbs/index';
export default {
  components: {
    Breadcrumbs,
    EditBodyContainer,
  },
  data() {
    return {
      page: '顧客管理 [車両編集]',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '/customer',
        },
        {
          text: '車両登録',
          // href: '/customer/car',
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
