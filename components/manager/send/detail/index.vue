<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    >
      <template v-slot:right>
        <fg-button type="primary" width="180px" white-transparent
          >キャンセル</fg-button
        >
      </template>
    </Breadcrumbs>
    <DetailContainer />
  </div>
</template>

<script>
import DetailContainer from './detail-container/index';
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue';

export default {
  layout: 'manager',
  components: {
    Breadcrumbs,
    DetailContainer,
  },
  data: () => ({
    page: '送客案件詳細',
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
};
</script>
