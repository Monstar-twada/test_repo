<template>
  <BusinessInformation />
</template>

<script>
import BusinessInformation from '~/components/bi/index'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    BusinessInformation,
  },
}
</script>
