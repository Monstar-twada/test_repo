<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <BodyContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index'
import BodyContainer from '~/components/admin/BodyContainer'

export default {
  components: {
    Breadcrumbs,
    BodyContainer,
  },
  data() {
    return {
      page: '管理',
      breadcrumbs: [
        {
          text: '管理',
          href: '/admin',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
