<template>
  <div class="bodyContainer">
    <OwnerInfoContainer />
    <CarBasicInfoContainer />
  </div>
</template>

<script>
import OwnerInfoContainer from '~/components/customer/regist/car/OwnerInfoContainer'
import CarBasicInfoContainer from '~/components/customer/regist/car/CarBasicInfoContainer'
export default {
  name: 'IndexBodyContainer',
  components: {
    OwnerInfoContainer,
    CarBasicInfoContainer,
  },
}
</script>
<style lang="scss" scoped>
.bodyContainer {
  width: 100%;
  max-width: 712px;
  margin: 0 auto;
  color: $blue-200;
}
</style>
