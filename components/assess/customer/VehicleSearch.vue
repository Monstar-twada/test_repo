<template>
  <div class="searchbar mb30">
    <v-row justify="left" align="center" class="mx-0">
      <h3 class="searchbar_title">車両検索</h3>
      <Select class="mr20" placeholder="運輸支局" />
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="分類番号"
      />
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="用途判別"
      />
      <Input
        class="mr20"
        customwidth="120"
        customheight="30"
        customfontsize="10"
        placeholder="指定番号"
      />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import ButtonSearch from '~/components/common/ButtonSearch.vue'
export default {
  name: 'VehicleSearch',
  components: {
    Input,
    Select,
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
