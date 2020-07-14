<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="page"
    >
      <div class="subTitle">
        <span> &lt; </span>
        2020年6月
        <span> &gt; </span>
      </div>
    </Breadcrumbs>
    <Searchbar />
    <MaResult class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/ma/Searchbar.vue'
import MaResult from '~/components/ma/MaResult.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
    MaResult,
  },
  data: () => ({
    page: '集客',
    breadcrumbs: [
      {
        text: 'home',
        href: '/',
      },
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
</style>
