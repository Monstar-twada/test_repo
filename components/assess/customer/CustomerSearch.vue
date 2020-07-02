<template>
  <div class="searchbar mb30">
    <v-row justify="left" align="center" class="mx-0">
      <h3 class="searchbar_title">顧客検索</h3>
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="姓"
      />
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="名"
      />
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="電話番号"
      />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import ButtonSearch from '~/components/common/ButtonSearch.vue'
export default {
  name: 'CustomerSearch',
  components: {
    Input,
    ButtonSearch,
  },
}
</script>
<style lang="scss" scoped>
.searchbar {
  width: 100%;
  padding: 20px;
  height: 70px;
  border-radius: 5px;
  background-color: $white-300;
  &_title {
    font-size: 18px;
    color: $blue-200;
    font-weight: 600;
    margin-right: 30px;
  }
  &_button {
    margin-left: auto;
  }
}
</style>
