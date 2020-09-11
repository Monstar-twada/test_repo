<template>
  <div class="status-item">
    <Border>
      <Item inline label="主担当者">
        <fg-select class="mr5" size="small" inline></fg-select>
        <span>※１名のみ</span>
      </Item>
      <Item class="ml30" inline label="初回面談">
        <fg-date-picker
          v-model="time"
          format="yyyy/MM/dd hh:mm"
          size="small"
          width="150"
          placeholder="日時"
        ></fg-date-picker>
      </Item>
    </Border>
    <Item label="副担当者" class="mt25">
      <fg-select size="medium" width="350px"></fg-select>
    </Item>
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
  data() {
    return {
      time: '',
    }
  },
}
</script>

<style lang="scss"></style>
