<template>
  <BusinessInformation />
</template>

<script>
import BusinessInformation from '~/components/manager/bi/index'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    BusinessInformation,
  },
}
</script>
