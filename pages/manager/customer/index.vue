<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="page"
    >
      <template v-slot:right>
        <ImportButton class="mr15" @click="handleImportClick" />
        <PlusButton />
      </template>
    </Breadcrumbs>
    <Searchbar />
    <CustomerResult class="mt30" />

    <ImportDialog v-model="importVisible" />
  </div>
</template>

<script>
import PlusButton from '~/components/breadcrumbs/PlusButton'
import ImportButton from '~/components/customer/ImportButton'
import Breadcrumbs from '~/components/breadcrumbs/index'
import Searchbar from '~/components/customer/Searchbar.vue'
import CustomerResult from '~/components/customer/CustomerResult.vue'
import ImportDialog from '~/components/customer/import-dialog/index'

export default {
  components: {
    Breadcrumbs,
    Searchbar,
    CustomerResult,
    PlusButton,
    ImportButton,
    ImportDialog,
  },
  data: () => ({
    page: '顧客管理',
    breadcrumbs: [
      {
        text: '顧客管理',
        href: '',
      },
    ],
    importVisible: false,
  }),
  methods: {
    handleImportClick() {
      this.importVisible = true
    },
  },
}
</script>
<style lang="scss"></style>
