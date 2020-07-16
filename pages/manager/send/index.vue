<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    >
      <template v-slot:right>
        <PlusButton @click="$router.push('/send/form')" />
      </template>
    </Breadcrumbs>
    <CustomerInfo class="mt10 mb30" />
    <SearchBar />
    <SendList />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import SearchBar from '~/components/send/SearchBar.vue'
import CustomerInfo from '~/components/send/CustomerInfo'
import SendList from '~/components/send/SendList'
import PlusButton from '~/components/breadcrumbs/PlusButton'

export default {
  components: {
    Breadcrumbs,
    SearchBar,
    CustomerInfo,
    SendList,
    PlusButton,
  },
  data: () => ({
    page: '送客',
    breadcrumbs: [
      {
        text: '送客',
        href: '',
      },
    ],
  }),
}
</script>
