<template>
  <div class="mdd-tasks-item">
    <h4>決済情報</h4>

    <div class="mt10">
      <fg-checkbox label="車両引取完了"></fg-checkbox>
    </div>
    <div class="mt10">
      <fg-checkbox label="書類引取完了"></fg-checkbox>
    </div>
    <div class="mt10">
      <fg-checkbox label="名義変更完了"></fg-checkbox>
    </div>

    <Item label="車検証" align="flex-start" class="mt20">
      <fg-image-processor icon="license-front"></fg-image-processor>
    </Item>

    <Border class="mt20" width="180">
      <fg-checkbox label="振込処理対応済"></fg-checkbox>
    </Border>

    <div class="status-item__footer">
      <ButtonSave />
      <ButtonComplete />
    </div>
  </div>
</template>

<script>
import Border from '../common/Border'
import Item from '../common/Item'
import ButtonComplete from '../common/ButtonComplete'
import ButtonSave from '../common/ButtonSave'
export default {
  components: {
    ButtonComplete,
    ButtonSave,
    Border,
    Item,
  },
}
</script>

<style lang="scss"></style>
