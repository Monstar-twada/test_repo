<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      :is-title-plus="true"
    />
    <CustomerInfo class="mt10 mb30" />
    <Searchbar />
    <SendList />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/send/Searchbar.vue'
import CustomerInfo from '~/components/send/CustomerInfo'
import SendList from '~/components/send/SendList'

export default {
  components: {
    Breadcrumbs,
    Searchbar,
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
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 900px;
}
</style>
