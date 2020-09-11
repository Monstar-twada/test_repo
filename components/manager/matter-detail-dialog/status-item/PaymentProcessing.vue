<template>
  <div class="status-item">
    <div>
      <Item label="案件番号" inline bold>3028920</Item>
      <Item label="金額" inline bold class="ml30 mr30">¥40,000</Item>
      <Item label="支払処理日(紹介料)" inline bold>2020/02/09</Item>
    </div>

    <Border class="mt20">
      <div class="mt10 pb10">
        <fg-checkbox label="送金処理完了"></fg-checkbox>
      </div>
    </Border>

    <div class="status-item__footer">
      <ButtonComplete />
    </div>
  </div>
</template>

<script>
import Border from '../common/Border'
import Item from '../common/Item'
import ButtonComplete from '../common/ButtonComplete'
export default {
  components: {
    ButtonComplete,
    Border,
    Item,
  },
}
</script>

<style lang="scss"></style>
