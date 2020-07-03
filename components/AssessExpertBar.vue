<template>
  <div class="container">
    <div class="d-flex border-right assess">
      <h3 class="assess-text mr15">顧客ID</h3>
      <h4 class="assess-subtext">123456789</h4>
    </div>
    <div class="d-flex border-right assess">
      <v-avatar size="31" class="mr10">
        <v-img :src="require('~/static/breadcrumbs/person.png')" />
      </v-avatar>
      <h3 class="assess-text">米田 道春</h3>
      <h4 class="assess-text">（31歳）</h4>
    </div>
    <div class="d-flex assess">
      <h3 class="assess-text mr15">顧客ID</h3>
      <h4 class="assess-subtext">123456789</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessExpertBar',
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 15px 0px;
  height: 70px;
  border-radius: 5px;
  background-color: $white-300;
  display: flex;
  margin-bottom: 40px;
  .assess {
    align-items: center;
    padding: 0px 20px;
    &-text {
      color: $blue-200;
    }
    &-subtext {
      color: $blue-100;
      font-weight: 400;
    }
  }
  .border-right {
    border-right: 1px solid $gray-100;
  }
}
</style>
