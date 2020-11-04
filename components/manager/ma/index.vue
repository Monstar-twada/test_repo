<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" title-image="ma.svg" :page="page" />
    <ActiveList />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index';
import ActiveList from '~/components/manager/ma/index/ActiveList';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    ActiveList,
  },
  data: () => ({
    page: '集客',
    breadcrumbs: [
      {
        text: '集客',
        href: '',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.subTitle {
  color: $--color-white;
  font-size: 12px;
  margin: 10px 0 0 20px;
  span {
    margin: 0 5px;
  }
}
.chart {
  width: 100%;
  padding: 20px;
  background: $--color-white;
  border-radius: 6px;
  overflow: hidden;
}
</style>
