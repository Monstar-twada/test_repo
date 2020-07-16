<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      icon-width="30"
      title-image="buisnessinformation.svg"
    >
      <template v-slot:left>
        <div class="ml15">
          <h5 style="color: #fff;">2020年1月-2020年6月</h5>
        </div>
        <Select
          :customwidth="120"
          :customheight="25"
          custombackground="transparent"
          placeholder="過去6ヶ月"
          disabled
          class="titlepage__datepick--select ml25"
        />
      </template>
    </Breadcrumbs>
    <Sales />
    <SalesProductivity />
    <SalesBreakdown />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index'
import Sales from '~/components/bi/Sales.vue'
import SalesProductivity from '~/components/bi/SalesProductivity.vue'
import SalesBreakdown from '~/components/bi/SalesBreakdown.vue'
import Select from '~/components/common/Select.vue'
export default {
  layout: 'manager',
  components: {
    Breadcrumbs,
    Sales,
    SalesProductivity,
    SalesBreakdown,
    Select,
  },
  data: () => ({
    page: '経営状況',
    breadcrumbs: [
      {
        text: '経営状況',
        href: '/admin',
      },
    ],
  }),
}
</script>
