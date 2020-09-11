<template>
  <div class="matter-detail-dialog__request">
    <Item
      bold
      left="30"
      right="56"
      label-width="66"
      label="依頼元"
      class="mt20"
    >
      〇〇〇〇株式会社 車検の速太郎 武蔵小杉店 高橋由伸
      <Item inline bold label="送客依頼日時" class="ml30">
        2020/09/29 12:32
      </Item>
    </Item>
    <Item
      bold
      left="30"
      right="56"
      label-width="66"
      label="依頼詳細"
      class="mt15"
      align="baseline"
    >
      乗り換えを希望していて、コンパクトカーまたはSUVを考えています。<br />
      最寄りのcars杉並には来店出来るそうです。（土日）
    </Item>
  </div>
</template>

<script>
import Item from './common/Item'
export default {
  components: { Item },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import './common/mixins';
.matter-detail-dialog__request {
  position: relative;
  padding-bottom: 20px;
  @include borderBottom();
}
</style>
