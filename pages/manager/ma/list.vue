<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" title-image="ma.svg" :page="page">
      <template v-slot:left>
        <div class="subTitle">
          <h3>[ 6月満期車検 対象者リスト ]</h3>
        </div>
      </template>
    </Breadcrumbs>
    <Searchbar />
    <MaResult class="mt30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import Searchbar from '~/components/ma/detail/Searchbar.vue'
import MaResult from '~/components/ma/detail/MaResult.vue'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Breadcrumbs,
    Searchbar,
    MaResult,
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
  margin: 5px 0 0 20px;
  h3 {
    font-size: 20px;
  }
}
</style>
