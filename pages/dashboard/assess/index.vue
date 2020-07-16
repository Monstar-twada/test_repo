<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="assess.svg"
    >
      <template v-slot:right>
        <FreeCarInputButton />
      </template>
    </Breadcrumbs>
    <Searchbar />
    <AssessResult class="mt30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import Searchbar from '~/components/assess/Searchbar.vue'
import AssessResult from '~/components/assess/AssessResult.vue'
import FreeCarInputButton from '~/components/assess/free-car-input-button/index'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    Searchbar,
    AssessResult,
    FreeCarInputButton,
  },
  data: () => ({
    page: '査定',
    breadcrumbs: [
      {
        text: '査定管理',
        href: '',
      },
    ],
  }),
}
</script>
