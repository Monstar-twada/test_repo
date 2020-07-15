<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :title-image="`send.svg`"
      :page="page"
      :is-title-plus="true"
      :title-plus-work="'/send/form'"
    />
    <CustomerInfo class="mt10 mb30" />
    <SearchBar />
    <SendList />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import SearchBar from '~/components/send/SearchBar.vue'
import CustomerInfo from '~/components/send/CustomerInfo'
import SendList from '~/components/send/SendList'

export default {
  components: {
    Breadcrumbs,
    SearchBar,
    CustomerInfo,
    SendList,
  },
  data: () => ({
    page: '送客',
    breadcrumbs: [
      {
        text: 'home',
        href: '/',
      },
      {
        text: '送客',
        href: '',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 900px;
}
</style>
