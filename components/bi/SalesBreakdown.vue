<template>
  <div class="tab">
    <div class="tab__header">
      <h3>業務別内訳</h3>
      <h5>※カッコ内は目標乖離金額</h5>
    </div>
    <table class="tab__table">
      <thead>
        <tr>
          <th v-for="value in label" :key="value.id">
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>車検</td>
          <td v-for="value in carData" :key="value.id">
            {{ value }}
          </td>
        </tr>
        <tr>
          <td>点検</td>
          <td v-for="value in inspectionData" :key="value.id">
            {{ value }}
          </td>
        </tr>
        <tr>
          <td>一般</td>
          <td v-for="value in generalData" :key="value.id">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SalesBreakdown',
  components: {},
  data() {
    return {
      label: ['', '売上', '粗利', '台数', '台粗利'],
      carData: ['¥34,731,428', '¥27,516,509', '952', '¥28,904'],
      inspectionData: ['¥3,506,967', '¥2,088,841', '941', '¥2,220'],
      generalData: ['¥25,063,478', ' ¥14,374,578', '2,266', '¥6,344'],
    }
  },
}
</script>
<style lang="scss" scoped>
.tab {
  background: #fff;
  border-radius: 5px;
  height: auto;
  width: 100%;
  &__header {
    height: 65px;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    h5 {
      font-size: 10x;
      color: $blue-200;
      font-weight: 400;
    }
    h3 {
      font-size: 18px;
      color: $blue-200;
      font-weight: 600;
    }
    span {
      font-size: 14px;
    }
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    thead {
      height: 30px;
      background: $white-100;
      th {
        align-items: center;
        font-size: 12px;
        color: $blue-500;
        font-weight: 400;
      }
    }
    tr {
      border-bottom: 1px solid $gray-100;
      td {
        height: 60px;
        font-size: 15px;
        font-weight: 800;
        color: $blue-200;
        text-align: center;
        font-family: 'Yantramanav';
        span {
          font-size: 12px;
          font-weight: 400;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
