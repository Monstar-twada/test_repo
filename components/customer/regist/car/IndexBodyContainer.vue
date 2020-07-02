<template>
  <div class="bodyContainer">
    <OwnerInfoContainer />
    <CarBasicInfoContainer />
    <TexInfoContainer />
    <CostInfoContainer />
  </div>
</template>

<script>
import OwnerInfoContainer from '~/components/customer/regist/car/OwnerInfoContainer'
import CarBasicInfoContainer from '~/components/customer/regist/car/CarBasicInfoContainer'
import TexInfoContainer from '~/components/customer/regist/car/TexInfoContainer'
import CostInfoContainer from '~/components/customer/regist/car/CostInfoContainer'
export default {
  name: 'IndexBodyContainer',
  components: {
    OwnerInfoContainer,
    CarBasicInfoContainer,
    TexInfoContainer,
    CostInfoContainer,
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
