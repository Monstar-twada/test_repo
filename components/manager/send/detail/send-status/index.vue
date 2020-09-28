<template>
  <div class="send-status">
    <div class="send-status-icon">
      <img :src="require(`./img/${statusCategoryIcon}.svg`)" width="40" />
    </div>
    <div class="send-status-content">
      <StatusTitle :info="title">
        <template v-slot>
          <h2 class="status-title-right">
            獲得予定金額：¥
            <strong>{{ title.sendPrice.toLocaleString() }}</strong>
          </h2>
        </template>
        <template v-slot:bottom>
          <div class="send-destination">
            <p><strong>送客先</strong> {{ title.sendDestination }}</p>
            <p><strong>送客依頼日時</strong>{{ title.sendDate }}</p>
          </div>
        </template>
      </StatusTitle>

      <StatusBar :car-info="bar.carInfo" :status-icon="bar.statusIcon" />
      <StatusProgress />
    </div>
  </div>
</template>

<script>
import StatusTitle from '~/components/manager/send/detail/send-status/status-title/index'
import StatusBar from '~/components/manager/send/detail/send-status/status-bar/index'
import StatusProgress from '~/components/manager/send/detail/send-status/StatusProgress'
export default {
  name: 'SendStatusItem',
  components: {
    StatusTitle,
    StatusBar,
    StatusProgress,
  },
  props: {
    statusCategoryIcon: {
      type: String,
      default: null,
    },
    title: {
      type: Object,
      default: () => {},
    },
    bar: {
      type: Object,
      default: () => {},
    },
    progressNews: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      userInfo: {
        status: 'buy',
        id: 'No.xxxxxx 米田智彦',
        name: '米田智彦',
        maker: 'トヨタ',
        type: 'プリウス',
      },
      price: 40000,
    }
  },
}
</script>

<style lang="scss" scoped>
.send-status {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  &-icon {
    margin: 30px 10px 0;
  }
  &-content {
    width: 100%;
    background: $--color-background;
    border-radius: 6px;
    overflow: hidden;
    padding-bottom: 20px;

    h2.status-title-right {
      strong {
        font-size: 24px;
      }
    }

    .send-destination {
      width: 100%;
      padding: 20px;
      background: $--color-white;
      p {
        font-size: 12px;
        display: inline;
        color: $--color-primary;
        margin-right: 20px;

        strong {
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
