<template>
  <div class="status-item">
    <div class="see-off__item">
      <fg-checkbox label="敗退扱い"></fg-checkbox>
      <Item label="敗退理由" class="ml30">
        <fg-select size="small" placeholder="選択" width="440"></fg-select>
      </Item>
    </div>
    <div class="mt10">
      <Item left="162">
        <fg-input size="small" placeholder="詳細" width="440"></fg-input>
      </Item>
    </div>

    <div class="status-item__footer">
      <ButtonSave />
      <ButtonComplete />
    </div>
  </div>
</template>

<script>
import Item from '../common/Item'
import ButtonComplete from '../common/ButtonComplete'
import ButtonSave from '../common/ButtonSave'
export default {
  components: {
    Item,
    ButtonSave,
    ButtonComplete,
  },
}
</script>

<style lang="scss">
.status-item {
  .see-off__item {
    display: flex;
  }
}
</style>
