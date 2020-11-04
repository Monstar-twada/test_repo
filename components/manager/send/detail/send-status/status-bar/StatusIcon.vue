<template>
  <div class="send-status-icon">
    <div class="send-status-icon-background-line" />
    <ul class="send-status-icon-wrapper">
      <li
        v-for="(item, i) in statusList"
        :key="i"
        class="send-status-icon-item"
        :class="i > statusIcon.statusIconIndex - 1 ? '__disabled' : ''"
      >
        <div class="progress-icon">
          <img
            v-if="i == statusIcon.statusIconIndex - 1"
            :src="require('./img/car-icon.svg')"
          />
          <img
            v-if="
              i == statusIcon.statusIconIndex - 1 &&
              i != statusIcon.statusIconIndex - 1
            "
            :src="require('./img/finish-icon.svg')"
            class="finish-icon"
          />
        </div>
        <div class="send-status-icon-item-title">
          <i class="arrow-icon" />
          <span>{{ item.title }}</span>
        </div>
        <div class="send-status-icon-item-date">
          <span>{{ item.dateTitle }}</span>
          <span>{{ statusIcon.statusIconDate[i] }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailContainer',
  components: {},
  props: {
    statusIcon: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    statusList: [
      {
        title: '未着手',
        dateTitle: '初回面談日',
      },
      {
        title: '提案中',
        dateTitle: '契約締結日',
      },
      {
        title: '作業中',
        dateTitle: '取引完了日',
      },
      {
        title: '支払処理中',
        dateTitle: '紹介料支払日',
        date: '2020/09/29',
      },
      {
        title: '完了済',
        dateTitle: ' ',
        date: ' ',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.send-status-icon {
  position: relative;
  width: 100%;
  &-background-line {
    height: 1px;
    background: $--color-border;
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    z-index: 1;
  }
  &-wrapper {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    position: relative;
    z-index: 2;
  }

  &-item {
    display: block;
    text-align: center;
    list-style: none;
    width: 60px;
    height: 90px;
    font-size: 10px;
    color: $--color-primary;

    .progress-icon {
      width: 100%;
      height: 22px;

      .finish-icon {
        margin-left: 16px;
      }
    }

    &-title {
      width: 60px;
      margin: 0 auto;
      text-align: center;
      .arrow-icon {
        margin: 3px auto 0;
        width: 11px;
        height: 10px;
        background: url('./img/arrow-top-icon.svg');
        background-size: contain;
        display: block;
      }
      span {
        display: block;
        width: 100%;
        height: 10px;
        font-size: 10px;
      }
    }
    &-date {
      margin-top: 15px;
      width: 60px;
      height: 30px;
    }

    &.__disabled {
      .send-status-icon-item-title {
        color: $--color-primary-placeholder;
      }
      .arrow-icon {
        background: url('./img/arrow-top-icon-disable.svg');
      }
    }
  }
}
</style>
