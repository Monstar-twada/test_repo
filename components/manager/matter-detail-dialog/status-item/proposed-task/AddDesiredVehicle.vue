<template>
  <div class="add-desired-vehicle">
    <Item label="メーカー" inline>
      <fg-select placeholder="選択" size="small" width="120"></fg-select>
    </Item>
    <Item label="車種" inline class="ml20">
      <fg-select placeholder="選択" size="small" width="120"></fg-select>
    </Item>
    <Item label="年式" inline class="ml20" right="35">
      <fg-input
        placeholder="記入"
        size="small"
        inline
        width="50"
        unit="年〜"
      ></fg-input>
    </Item>

    <fg-icon name="qm-circle" color="#0786BD" />

    <Item label="走行距離  〜" inline class="ml20" right="30">
      <fg-input
        placeholder="記入"
        size="small"
        inline
        width="50"
        unit="km"
      ></fg-input>
    </Item>
  </div>
</template>

<script>
import Item from '../../common/Item'
export default {
  components: {
    Item,
  },
}
</script>

<style lang="scss">
.add-desired-vehicle {
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
}
</style>
