<template>
  <div class="send-common-request-kind">
    <div class="send-common-request-kind__title">
      <p>依頼種別</p>
    </div>
    <div class="send-common-request-kind__select">
      <div
        v-for="(item, i) in icons"
        :key="`item-${i}`"
        class="send-common-request-kind__select--list"
        @click="handleClick(i)"
      >
        <div
          :class="`send-common-request-kind__select--list--item${
            isSelected(i) ? '' : '-active'
          }`"
        >
          <v-img
            :max-width="30"
            :max-height="30"
            :src="require(`./img/${isSelectedIcon(i)}.svg`)"
          ></v-img>
        </div>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestKindPart',
  data() {
    return {
      selected: 'car',
      icons: [
        {
          target: 'car',
          title: '購入',
          svg: 'send-car-icon',
        },
        {
          target: 'money',
          title: '売却',
          svg: 'send-money-icon',
        },
        {
          target: 'wrench',
          title: '整備',
          svg: 'send-wrench-icon',
        },
        {
          target: 'hammer',
          title: '鈑金',
          svg: 'send-hammer-icon',
        },
        {
          target: 'heart',
          title: '保険',
          svg: 'send-heart-icon',
        },
        {
          target: 'tire',
          title: 'アクセサリー',
          svg: 'send-tire-icon',
        },
      ],
    }
  },
  methods: {
    handleClick(index) {
      this.selected = this.icons[index].target
    },
    isSelected(index) {
      return this.selected === this.icons[index].target
    },
    isSelectedIcon(index) {
      return this.isSelected(index)
        ? `${this.icons[index].svg}-white`
        : `${this.icons[index].svg}`
    },
  },
}
</script>

<style lang="scss" scoped>
.send-common-request-kind {
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 30px 0;
  margin: 0 120px;
  border-top: solid 1px $--color-background-hover;
  border-bottom: solid 1px $--color-background-hover;
  &__title {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    &--list {
      display: flex;
      flex-direction: column;
      align-items: center;
      &--item {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $--color-primary;
        cursor: pointer;
        &-active {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px $--color-border;
          background-color: $--color-white;
        }
      }
      p {
        margin-top: 8px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
