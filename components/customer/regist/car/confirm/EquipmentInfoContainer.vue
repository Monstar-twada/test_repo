<template>
  <div class="bodyContainer__equipmentInfo equipmentInfoContainer">
    <h3>{{ itemInfo.title }}</h3>
    <div class="equipmentInfoContainer__content">
      <ConfirmRowContainer
        v-for="item in itemInfo.inputs"
        :key="`item-${item.id}`"
        :title="item.title"
      >
        <template>
          <div class="row--body">
            <p v-for="(val, j) in item.items" :key="`val=${j}`">{{ val }}</p>
          </div>
        </template>
      </ConfirmRowContainer>
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/car/confirm/ConfirmRowContainer'

export default {
  name: 'EquipmentInfoContainer',
  components: {
    ConfirmRowContainer,
  },
  props: {
    itemInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.equipmentInfoContainer {
  width: 100%;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .row--body {
    padding: 10px 0;
    p {
      margin-bottom: 20px;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
