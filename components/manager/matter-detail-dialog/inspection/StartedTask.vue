<template>
  <div class="mdd-tasks-item">
    <div>
      <Item inline label="入庫日">
        <fg-calendar
          placeholder="年月日"
          inline
          width="120"
          size="small"
        ></fg-calendar>
      </Item>
      <Item inline label="出庫日" class="ml20 mr20">
        <fg-calendar
          placeholder="年月日"
          inline
          width="120"
          size="small"
        ></fg-calendar>
      </Item>
      <fg-checkbox label="代車必要"></fg-checkbox>
    </div>

    <h4 class="mt20">作業完了</h4>

    <div class="mt10">
      <fg-checkbox label="決済済み"></fg-checkbox>
      <Item inline label="確定総額" class="ml20">
        <fg-input placeholder="記入" inline width="120" size="small"></fg-input>
      </Item>
    </div>

    <Border class="mt20" column align="flex-start">
      <Item label="車検証" align="flex-start" class="mt10">
        <fg-image-processor icon="license-front"></fg-image-processor>
      </Item>
      <div class="mt20">
        <fg-checkbox label="車検証引渡完了"></fg-checkbox>
        <fg-select
          class="ml20"
          placeholder="選択"
          inline
          width="120"
          size="small"
        ></fg-select>
      </div>
      <div class="mt10 pb10">
        <fg-checkbox label="車両引渡完了"></fg-checkbox>
        <fg-select
          class="ml20"
          placeholder="選択"
          inline
          width="120"
          size="small"
        ></fg-select>
      </div>
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
