<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <Searchbar />
    <MatterResult />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import Searchbar from '~/components/matter/Searchbar.vue'
import MatterResult from '~/components/matter/MatterResult'

export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    Searchbar,
    MatterResult,
  },
  data() {
    return {
      page: '案件管理',
      breadcrumbs: [
        {
          text: '案件管理',
          href: '/matter',
        },
      ],
    }
  },
}
</script>
