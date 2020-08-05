<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" title-image="ma.svg" :page="page">
      <template v-slot:left>
        <div class="subTitle">
          <span> &lt; </span>
          2020年6月
          <span> &gt; </span>
        </div>
      </template>
    </Breadcrumbs>
    <div class="chart">
      <Chart />
      <DataCol class="mt20" />
    </div>
    <MaTabs class="mt20" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index'
import Chart from '~/components/manager/ma/index/chart/index'
import MaTabs from '~/components/manager/ma/index/tabs/index'
import DataCol from '~/components/manager/ma/index/common/data-col/DataCol.vue'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    Chart,
    MaTabs,
    DataCol,
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
}
</script>
<style lang="scss" scoped>
.subTitle {
  color: $white-300;
  font-size: 12px;
  margin: 10px 0 0 20px;
  span {
    margin: 0 5px;
  }
}
.chart {
  width: 100%;
  padding: 20px;
  background: $white-300;
  border-radius: 6px;
  overflow: hidden;
}
</style>
