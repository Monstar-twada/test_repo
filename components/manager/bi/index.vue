<template>
  <div class="business-information-page-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      icon-width="30"
      title-image="business-information.svg"
    >
      <template v-slot:left>
        <DateViewer v-model="selectedDate" class="ml15 mr25" />
        <MonthSelector v-model="selectedMonth" :items="monthItems" disabled />
      </template>
      <template v-slot:right>
        <TopRightTab v-model="tabIndex" :items="tabItems" disabled />
      </template>
    </Breadcrumbs>
    <keep-alive>
      <div v-if="tabIndex === 0">
        <Sales v-if="isMounted" />
        <SalesProductivity />
        <SalesBreakdown />
      </div>
      <CarSales v-else />
    </keep-alive>
  </div>
</template>

<script>
import Sales from './sales/index'
import SalesProductivity from './sales-productivity/index'
import SalesBreakdown from './sales-breakdown/index'
import TopRightTab from './TopRightTab'
import CarSales from './car-sales/index'
import DateViewer from '~/components/common/date-viewer/index'
import MonthSelector from '~/components/common/month-selector/index'
import Breadcrumbs from '~/components/common/breadcrumbs/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    Sales,
    SalesProductivity,
    SalesBreakdown,
    TopRightTab,
    CarSales,
    DateViewer,
    MonthSelector,
  },
  data: () => ({
    page: '経営状況',
    isMounted: false,
    breadcrumbs: [
      {
        text: '経営状況',
      },
    ],
    tabIndex: 0,
    tabItems: [
      {
        text: '整備',
      },
      {
        text: '車販',
      },
    ],
    selectedDate: '2020年1月-2020年6月',
    monthItems: [
      {
        text: '過去6ヶ月',
        value: 1,
      },
    ],
    selectedMonth: 1,
  }),
  mounted() {
    this.isMounted = true
  },
}
</script>
