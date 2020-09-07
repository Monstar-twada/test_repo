<template>
  <div class="d-flex">
    <div class="tab tab-h mr25">
      <h3 class="title">算出価格</h3>
      <v-simple-table class="table">
        <tbody>
          <tr v-for="item in calculatedprice" :key="item.name">
            <td class="table_left">{{ item.label }}</td>
            <td class="table_right">{{ item.price }}</td>
          </tr>
          <tr class="table_input">
            <td class="table_left font-weight-bold">査定価格</td>
            <td class="table_right font-weight-bold">1,594,000</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div class="tab">
      <h3 class="title">AI査定</h3>
      <v-simple-table class="table mb35">
        <tbody>
          <tr v-for="item in aiData" :key="item.name">
            <td class="table_left">{{ item.label }}</td>
            <td class="table_right">{{ item.price }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <h3 class="title">出口戦略支援</h3>
      <v-simple-table class="table mb35">
        <tbody>
          <tr v-for="item in exitstrategyData" :key="item.name">
            <td class="table_left">{{ item.label }}</td>
            <td class="table_right">{{ item.price }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <h3 class="title">マッチング誘導</h3>
      <v-simple-table class="table">
        <tbody>
          <tr v-for="item in matchingData" :key="item.name">
            <td class="table_left">{{ item.label }}</td>
            <td class="table_right">{{ item.price }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pricing',
  data() {
    return {
      calculatedprice: [
        {
          label: '基本価格',
          price: '1,370,000',
        },
        {
          label: '車両価格',
          price: '-260,000',
        },
        {
          label: '走行距離',
          price: '260,000',
        },
        {
          label: '外装色',
          price: '224,000',
        },
      ],
      aiData: [
        {
          label: 'ネットAI査定額',
          price: '1,670,000',
        },
        {
          label: '本査定時AI査定額',
          price: '1,370,000',
        },
      ],
      exitstrategyData: [
        {
          label: 'AA相場価格、件数',
          price: '1,667,000 / 10件',
        },
        {
          label: '小売相場価格、件数',
          price: '2,189,000 / 10件',
        },
      ],
      matchingData: [
        {
          label: 'マッチング確定価格（最高値）',
          price: '2,079,500',
        },
        {
          label: 'マッチング一覧リンク',
          price: '1,950,000',
        },
        {
          label: 'マッチング予想価格',
          price: '1,900,000',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.title,
.subtitle {
  font-size: 20px;
  color: $--color-primary;
  font-weight: 600;
  margin-bottom: 25px;
}
.subtitle {
  font-size: 16px;
  margin-bottom: 15px;
}
.tab-h {
  height: 380px;
}
.tab {
  width: 100%;
  padding: 25px 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: $--color-white;
  p {
    font-size: 12px;
    font-family: 'Noto Sans JP';
    color: $--color-primary;
    margin-bottom: 10px;
  }
}
.table {
  border: 1px solid $--color-border;
  tr:hover {
    background-color: transparent !important;
  }
  td {
    width: 50%;
    color: $--color-primary;
  }
  &_left {
    background-color: $--color-background;
    border-right: 1px solid $--color-border;
  }
  &_right {
    text-align: right;
  }
  &_input {
    background-color: $--color-white;
    height: 70px;
  }
}
</style>
