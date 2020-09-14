<template>
  <div class="send-status-bar">
    <div class="send-status-bar-left">
      <h4>対象車両</h4>
      <div class="car-info">
        <img :src="require(`./img/${carInfo.img}.png`)" />
        <h4>{{ carInfo.maker }}</h4>
      </div>
    </div>
    <StatusIcon :status-icon="statusIcon" />
  </div>
</template>

<script>
import StatusIcon from '~/components/manager/send/detail/send-status/status-bar/StatusIcon'
export default {
  name: 'DetailContainer',
  components: {
    StatusIcon,
  },
  props: {
    carInfo: {
      type: Object,
      default: () => {},
    },
    statusIcon: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.send-status-bar {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 30%;
  &-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $--color-primary;

    h4 {
      width: 50px;
    }

    .car-info {
      width: 300px;
      margin: 0 40px 0 20px;
      padding: 0 15px;
      height: 90px;
      border-radius: 6px;
      background: $--color-white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h4 {
        margin-left: 20px;
        width: 80px;
      }
    }
  }
}
</style>
