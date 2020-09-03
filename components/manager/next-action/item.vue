<template>
  <dl class="next-action-item">
    <dt :class="item.isSmallTile ? 'small' : ''">{{ item.title }}</dt>
    <template v-if="item.contents">
      <dd v-for="(content, i) in item.contents" :key="i">
        {{ content }}
      </dd>
    </template>
    <dd class="footer">
      <span class="left">
        <template v-if="item.count">
          <span class="text">{{ item.count }}</span>
          <i class="icon-arrow-right-top"></i>
        </template>
      </span>
      <span class="badge">{{ item.tag }}</span>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.next-action-item {
  margin: 10px 8px 0 12px;
  padding: 10px;
  border-radius: 6px;
  background: $--color-background;
  dt {
    font-size: 14px;
    color: $--color-primary;
    font-weight: 600;
    &.small {
      font-size: 12px;
    }
  }
  dd {
    color: $blue-300;
    font-size: 12px;
    line-height: 18px;
    text-align: justify;
    &.footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      .left {
        display: flex;
        color: $--color-warning;
        .text {
          display: inline-block;
          font-size: 11px;
          line-height: 13px;
        }
        .icon-arrow-right-top {
          display: inline-block;
          width: 13px;
          height: 13px;
          background: url('./img/arrow-top-right.svg') no-repeat center center;
        }
      }
      .badge {
        text-align: center;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        background: $--color-primary-active;
        min-width: 42px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
