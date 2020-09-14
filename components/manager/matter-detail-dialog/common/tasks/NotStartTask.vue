<template>
  <div class="mdd-tasks-item">
    <Border>
      <Item inline label="主担当者">
        <UserSelector
          class="mr5"
          inline
          :items="principalListSingle"
          width="150"
          clearable
        />
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
    <Item label="副担当者" class="mt25" align="baseline">
      <UserSelector
        multiple
        inline
        :items="principalListMultiple"
        width="350"
      />
    </Item>
    <div class="status-item__footer">
      <ButtonSave />
      <ButtonComplete />
    </div>
  </div>
</template>

<script>
import Border from '../Border'
import Item from '../Item'
import ButtonComplete from '../ButtonComplete'
import ButtonSave from '../ButtonSave'
import UserSelector from '../user-selector/index'
import { mockPrincipalList } from '../mock-data'
export default {
  components: {
    ButtonComplete,
    ButtonSave,
    Border,
    Item,
    UserSelector,
  },
  data() {
    return {
      time: '',
      principalListSingle: JSON.parse(JSON.stringify(mockPrincipalList)),
      principalListMultiple: JSON.parse(JSON.stringify(mockPrincipalList)),
    }
  },
}
</script>

<style lang="scss"></style>
