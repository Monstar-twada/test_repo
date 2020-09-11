<template>
  <div>
    <h4>顧客情報</h4>
    <div class="mt10">
      <Item label="生年月日" inline class="mr30">
        <fg-calendar size="small"></fg-calendar>
      </Item>
      <Item label="家族構成" inline class="mr30">
        <fg-select size="small"></fg-select>
      </Item>
      <Item label="住まい" inline>
        <fg-select size="small"></fg-select>
      </Item>
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

<style scoped></style>
