<template>
  <dl>
    <dt>
      <h4>{{ title }}</h4>
    </dt>
    <dd class="mt10">
      <Item label="メーカー" inline label-width="73">
        <fg-select placeholder="選択" size="small" width="120"></fg-select>
      </Item>
      <Item label="車種" inline class="ml30" label-width="60">
        <fg-select placeholder="選択" size="small" width="120"></fg-select>
      </Item>
      <Item label="グレード" inline class="ml30" label-width="60">
        <fg-input placeholder="記入" size="small" width="120"></fg-input>
      </Item>
    </dd>
    <dd class="mt10">
      <Item label="初年度登録" inline label-width="73">
        <fg-select
          placeholder="初年度登録"
          size="small"
          width="120"
        ></fg-select>
      </Item>

      <Item label="登録年月日" inline class="ml30" label-width="60">
        <fg-select
          placeholder="登録年月日"
          size="small"
          width="120"
        ></fg-select>
      </Item>

      <Item label="車検満了日" inline class="ml30" label-width="60">
        <fg-select
          placeholder="車検満了日"
          size="small"
          width="120"
        ></fg-select>
      </Item>
    </dd>

    <slot></slot>
  </dl>
</template>

<script>
import Item from '../Item'
export default {
  components: {
    Item,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss"></style>
