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
    <SendSales />
    <SearchBar />
    <SendList />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import PlusButton from '~/components/common/breadcrumbs/PlusButton'
import SendSales from '~/components/manager/send/index/send-sales/index'
import SearchBar from '~/components/manager/send/index/search-bar/index'
import SendList from '~/components/manager/send/index/send-list/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    PlusButton,
    SendSales,
    SearchBar,
    SendList,
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
