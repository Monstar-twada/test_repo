<template>
  <div class="admin-container-index-form">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    >
      <h2>[ 店舗詳細 ]</h2>
    </Breadcrumbs>
    <IndexForm />
  </div>
</template>

<script>
import IndexForm from './IndexForm';
import Breadcrumbs from '~/components/common/breadcrumbs/index';

export default {
  components: {
    Breadcrumbs,
    IndexForm,
  },
  data() {
    return {
      page: '管理',
      breadcrumbs: [
        {
          text: '管理',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
