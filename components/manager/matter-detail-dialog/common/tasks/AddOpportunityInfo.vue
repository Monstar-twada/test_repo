<template>
  <div class="add-opportunity-information">
    <Item label="メーカー" inline>
      <fg-select placeholder="選択" size="small" width="120"></fg-select>
    </Item>
    <Item label="車種" inline class="ml20">
      <fg-select placeholder="選択" size="small" width="120"></fg-select>
    </Item>
    <Item label="年式" inline class="ml20" right="20">
      <fg-input
        placeholder="記入"
        size="small"
        inline
        width="50"
        unit="年"
      ></fg-input>
    </Item>

    <fg-icon name="qm-circle" color="#0786BD" />

    <Item label="走行距離" inline class="ml20" right="30">
      <fg-input
        placeholder="記入"
        size="small"
        inline
        width="50"
        unit="km"
      ></fg-input>
    </Item>

    <div class="mt10">
      <Item label="総額価格" inline right="30">
        <fg-input
          placeholder="記入"
          size="small"
          inline
          width="120"
          unit="円"
        ></fg-input>
      </Item>

      <fg-checkbox label="見積提出" class="ml25"></fg-checkbox>
      <fg-checkbox label="確定" class="ml30"></fg-checkbox>
    </div>
  </div>
</template>

<script>
import Item from '../Item'
export default {
  components: {
    Item,
  },
}
</script>

<style lang="scss">
.add-opportunity-information {
}
</style>
