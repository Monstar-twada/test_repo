<template>
  <div class="container">
    <ChatContainer />
    <CustomerInfo />
    <MatchingContainer />
    <SituationContainer />
  </div>
</template>

<script>
import ChatContainer from '~/components/dashboard/matter/ChatContainer'
import CustomerInfo from '~/components/dashboard/matter/CustomerInfo.vue'
import MatchingContainer from '~/components/dashboard/matter/MatchingContainer'
import SituationContainer from '~/components/dashboard/matter/SituationContainer.vue'

export default {
  name: 'MatterDetail',
  components: {
    ChatContainer,
    CustomerInfo,
    MatchingContainer,
    SituationContainer,
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 490px max-content;
  grid-gap: 30px;
  margin: 30px 0;
  & > div {
    background-color: $--color-white;
    border-radius: 6px;
  }
}
</style>
