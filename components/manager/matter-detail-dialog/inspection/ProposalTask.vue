<template>
  <div class="mdd-tasks-item">
    <CustomerInfo />

    <CarMakerAndDateInfo class="mt25" title="検査車両">
      <dd class="mt10">
        <Item label="走行距離" inline right="30" label-width="73">
          <fg-input
            placeholder="記入"
            size="small"
            width="60"
            unit="km"
          ></fg-input>
        </Item>
        <fg-checkbox label="確認済"></fg-checkbox>
        <Item label="ナンバー" inline class="ml20 mr20">
          <fg-input placeholder="記入" size="small" width="60"></fg-input>
        </Item>
        <Item label="ハンドル" inline class="mr20">
          <fg-select placeholder="選択" size="small" width="60"></fg-select>
        </Item>
        <Item label="AT/MT" inline>
          <fg-select placeholder="選択" size="small" width="60"></fg-select>
        </Item>
      </dd>

      <dd class="mt10">
        <ColorCheckboxGroup />
      </dd>
    </CarMakerAndDateInfo>

    <div class="mt20">
      <Border>
        <fg-checkbox label="売却車両あり"></fg-checkbox>
      </Border>
      <Border class="ml20">
        <fg-checkbox label="売却及び、購入希望車両あり"></fg-checkbox>
      </Border>
    </div>

    <h4 class="mt30">作業工程</h4>

    <div class="mt10">
      <fg-checkbox label="見積提示"></fg-checkbox>
      <Item label="車検総額" inline class="ml30">
        <fg-input placeholder="記入" width="120" size="small"></fg-input>
      </Item>
    </div>

    <div class="mt20">
      <Border>
        <fg-checkbox label="申し込み済み"></fg-checkbox>
        <Item label="入庫予定日時" inline class="ml30">
          <fg-date-picker
            placeholder="選択"
            width="120"
            size="small"
          ></fg-date-picker>
        </Item>
      </Border>
      <fg-checkbox label="引取必要" class="ml30"></fg-checkbox>
    </div>

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
import ColorCheckboxGroup from '../common/color-checkbox-group/index'
import CustomerInfo from '../common/tasks/CustomerInfo'
import CarMakerAndDateInfo from '../common/tasks/CarMakerAndDateInfo'

export default {
  components: {
    ColorCheckboxGroup,
    ButtonComplete,
    ButtonSave,
    Border,
    Item,
    CustomerInfo,
    CarMakerAndDateInfo,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
