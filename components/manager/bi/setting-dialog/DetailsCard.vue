<template>
  <div>
    <v-card-text>
      <div class="setting-dialog-wrapper">
        <div class="check-info mt10">
          <h4 class="mr30">年間利益目標</h4>
          <v-img class="mr5" :src="require('./img/warning.svg')"></v-img>
          年間利益目標に到達していません。目標設定を再入力願います。
        </div>
        <table class="details-table">
          <thead>
            <tr>
              <th v-for="(month, i) in date" :key="i">
                {{ month + '月' }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>車検</td>
              <td v-for="(month, i) in date.length - 1" :key="i">
                <Input :customwidth="55" :customheight="30" />
              </td>
            </tr>
            <tr>
              <td>点検</td>
              <td v-for="(month, i) in date.length - 1" :key="i">
                <Input :customwidth="55" :customheight="30" />
              </td>
            </tr>
            <tr>
              <td>一般</td>
              <td v-for="(month, i) in date.length - 1" :key="i">
                <Input :customwidth="55" :customheight="30" />
              </td>
            </tr>
          </tbody>
        </table>
        <ul class="d-flex manual-input pa-0">
          <li>
            <h4>顧客維持率</h4>
            <Input :customheight="30" :customwidth="100" />
            <span>%</span>
          </li>
          <li>
            <h4>新規獲得率</h4>
            <Input :customheight="30" :customwidth="100" />
            <span>%</span>
          </li>
          <li>
            <h4>年間利益目標</h4>
            <Input :customheight="30" :customwidth="100" />
            <span>円</span>
          </li>
          <v-card-actions align="center" class="simulation-button">
            <v-btn color="#1295CE" depressed rounded>シミュレーション</v-btn>
          </v-card-actions>
        </ul>
      </div>
    </v-card-text>
    <v-card-text>
      <div class="simulation-graph">
        <h3>売上シミュレーション</h3>
        <ul class="simulation-graph__legend pa-0">
          <li>
            <span />
            <h5>売上</h5>
          </li>
          <li>
            <span />
            <h5>ポテンシャル</h5>
          </li>
        </ul>
      </div>
      <v-img class="mt30" :src="require('./img/graph.svg')" />
      <ul class="pa-0 simulation-graph__months">
        <li v-for="(month, i) in date.length - 1" :key="i">
          {{ month + '月' }}
        </li>
      </ul>
      <v-card-actions align="center">
        <v-btn color="#1295CE" depressed rounded>目標を設定する</v-btn>
      </v-card-actions>
    </v-card-text>
  </div>
</template>
<script>
import Input from '~/components/common/Input.vue'
export default {
  name: 'DetailsCard',
  components: {
    Input,
  },
  data() {
    return {
      date: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    }
  },
}
</script>

<style lang="scss">
.details-table {
  width: 100%;
  border-spacing: 0px 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dfe6f0;
  thead {
    height: 30px;
    th {
      align-items: center;
      font-size: 10px;
      color: #1e5199;
      font-weight: 400;
      &:first-child {
        opacity: 0;
      }
    }
  }
  tbody {
    td {
      font-size: 12px;
      font-weight: 600;
      color: $--color-primary;
      text-align: center;
    }
  }
}
.manual-input {
  width: 100%;
  justify-content: space-between;
  position: relative;
  li {
    display: flex;
    align-items: center;
    margin-top: 25px;
    h4 {
      margin-right: 50px;
    }
    span {
      margin-left: 5px;
    }
  }
}
.simulation-button {
  position: absolute;
  left: 40.5%;
  top: 40px;
  button {
    width: 190px !important;
  }
}
.simulation-graph {
  h3 {
    font-size: 18px;
    color: #1e5199;
    margin-bottom: 25px;
  }
  &__legend {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      display: flex;
      align-items: center;
      &:first-child {
        margin-left: 0px;
      }
      &:first-child span {
        background: $blue-700;
      }
      &:nth-child(2) span {
        background: $blue-800;
      }
      span {
        width: 10px;
        height: 3px;
        display: block;
        margin-right: 5px;
      }
      h5 {
        font-weight: 400;
        color: $blue-600;
      }
    }
  }
  &__months {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dfe6f0;
    li {
      margin-top: 15px;
      font-size: 10px;
      color: #1e5199;
      font-weight: 400;
    }
  }
}
</style>
