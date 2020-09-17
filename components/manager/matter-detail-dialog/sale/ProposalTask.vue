<template>
  <div class="mdd-tasks-item">
    <CustomerInfo />

    <CarMakerAndDateInfo class="mt25" title="売却車両">
      <dd class="mt10">
        <Item label="走行距離" inline right="30" label-width="73">
          <fg-input
            placeholder="記入"
            size="small"
            width="60"
            unit="km"
          ></fg-input>
        </Item>
        <fg-checkbox label="走行距離確認済"></fg-checkbox>
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

      <dd class="mt10">
        <Item label="売却時期" inline label-width="73">
          <fg-select placeholder="選択" size="small" width="120"></fg-select>
        </Item>
        <Item label="売却希望額" inline class="ml20 mr20">
          <fg-input placeholder="記入" size="small" width="100"></fg-input>
        </Item>
        <Item label="意思決定者" inline class="mr20">
          <fg-input placeholder="記入" size="small" width="100"></fg-input>
        </Item>
        <fg-checkbox label="所有権あり"></fg-checkbox>
      </dd>
    </CarMakerAndDateInfo>

    <Border class="mt20">
      <fg-checkbox label="購入希望車両あり"></fg-checkbox>
    </Border>

    <h4 class="mt30">査定結果</h4>

    <div class="mt10">
      <Item label="外装評価" inline>
        <fg-select placeholder="選択" width="120" size="small"></fg-select>
      </Item>
      <Item label="内装評価" inline class="ml30">
        <fg-select placeholder="選択" width="120" size="small"></fg-select>
      </Item>
    </div>
    <div class="mt10">
      <Item label="修復箇所" inline>
        <fg-input placeholder="記入" width="470" size="small"></fg-input>
      </Item>
    </div>

    <h4 class="mt30">提示条件</h4>

    <div class="mt10">
      <fg-checkbox label="買取価格提示"></fg-checkbox>
      <Item label="買取金額" inline class="ml30 mr30">
        <fg-input placeholder="記入" width="120" size="small"></fg-input>
      </Item>
      <Item label="意思決定時期" inline>
        <fg-calendar placeholder="選択" width="120" size="small"></fg-calendar>
      </Item>
    </div>

    <div class="mt10">
      <fg-checkbox label="残債確認" style="margin-right: 24px;"></fg-checkbox>
      <Item label="残債金額" inline class="ml30 mr30">
        <fg-input placeholder="記入" width="120" size="small"></fg-input>
      </Item>
      <Item label="信販会社" inline>
        <fg-select placeholder="選択" width="120" size="small"></fg-select>
      </Item>
      <fg-input
        class="ml5"
        placeholder="その他の場合"
        width="120"
        size="small"
        inline
      ></fg-input>
    </div>

    <div class="mt20">
      <Border>
        <fg-checkbox label="売買契約締結"></fg-checkbox>
        <Item label="引取予定日時" inline class="ml30">
          <fg-date-picker
            placeholder="選択"
            width="120"
            size="small"
          ></fg-date-picker>
        </Item>
      </Border>
      <Item inline label="車両引取場所" class="ml25">
        <fg-select placeholder="選択" width="120" size="small"></fg-select>
      </Item>
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
