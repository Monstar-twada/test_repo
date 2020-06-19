<template>
  <div class="container">
    <div>
      <h2>メッセージボックス</h2>
      <div></div>
      <textarea id="" name="" cols="30" rows="10"></textarea>
      <button></button>
    </div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
  </div>
</template>

<script>
export default {
  name: 'MatterDetail',
}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  /* grid-template-columns: 710px 340px; */
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 437px 266px;
  grid-gap: 30px;
  margin: 30px 0;
  & > div {
    background-color: $white-300;
    border-radius: 6px;
    padding: 25px 20px;
  }
}
</style>
