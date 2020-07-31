<template>
  <div class="tab mb30">
    <div class="tab__header">
      <div class="d-flex">
        <h3 class="tab__header__title">売上</h3>
        <ul class="tab__header__legend pa-0 ml10">
          <li>
            <span />
            <h5>リピート</h5>
          </li>
          <li>
            <span />
            <h5>新規</h5>
          </li>
          <li>
            <span />
            <h5>粗利</h5>
          </li>
          <li>
            <span />
            <h5>売上</h5>
          </li>
          <li>
            <span />
            <h5>目標</h5>
          </li>
        </ul>
      </div>
      <div>
        <ImportButton class="importbutton" @click="handleImportClick" />
        <SettingsButton class="importbutton" @click="handleSettingsClick" />
      </div>
    </div>
    <div class="sales_container d-flex">
      <div class="left">
        <SalesGraph
          :data="SalesGraphData"
          :options="SalesGraphOptions"
          :height="240"
        />
        <SalesPercent />
      </div>
      <div class="right">
        <SalesStats />
      </div>
    </div>
    <SettingsDialog v-model="SettingsVisible" />
    <ImportDialog v-model="importVisible" is-bi />
  </div>
</template>
<script>
import SalesGraph from './sales-graph.js'
import SalesPercent from './SalesPercent.vue'
import SalesStats from './SalesStats.vue'
import ImportButton from '~/components/customer/ImportButton'
import SettingsButton from '~/components/manager/bi/SettingsButton'
import SettingsDialog from '~/components/manager/bi/setting-dialog/index'
import ImportDialog from '~/components/customer/import-dialog/index'
export default {
  name: 'Sales',
  components: {
    SalesGraph,
    SalesPercent,
    SalesStats,
    ImportButton,
    ImportDialog,
    SettingsButton,
    SettingsDialog,
  },
  data() {
    return {
      gradient: '',
      isMounted: false,
      importVisible: false,
      SettingsVisible: false,
      SalesGraphData: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        type: 'bar',
        datasets: [
          {
            label: 'リピート',
            barThickness: 10,
            data: [12100761, 11509755, 12034345, 8441659, 9047661, 0],
            backgroundColor: '#1258BC',
            yAxisID: 'y-axis-0',
            order: 1,
          },
          {
            label: '新規',
            barThickness: 10,
            data: [1056000, 2192334, 2822871, 2110415, 1986072, 0],
            backgroundColor: '#07B4FF',
            yAxisID: 'y-axis-0',
            order: 1,
          },
          {
            type: 'line',
            label: '売上',
            borderColor: '#696DD9',
            borderWidth: 1.5,
            data: [13156761, 13702089, 14857216, 10552074, 11033733, 0],
            pointRadius: 0,
            lineTension: 0,
            yAxisID: 'y-axis-1',
          },
          {
            type: 'line',
            label: '粗利',
            data: [9386993, 9403206, 10446846, 7215544, 7527339, 0],
            pointRadius: 0,
            borderColor: '#0DBEA9',
            borderWidth: 1.5,
            lineTension: 0,
            yAxisID: 'y-axis-1',
          },
          {
            type: 'line',
            label: '目標',
            data: [8800000, 10500000, 12250000, 9050000, 9000000, 0],
            borderColor: '#DB3394',
            pointRadius: 0,
            backgroundColor: 'transparent',
            borderDash: [5, 6],
            borderWidth: 1.5,
            lineTension: 0,
            yAxisID: 'y-axis-1',
          },
        ],
      },
      SalesGraphOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          tooltipFillColor: '#234111',
        },
        scales: {
          xAxes: [
            {
              offset: false,
              stacked: true,
              gridLines: {
                display: false,
                offsetGridLines: false,
              },
              ticks: {
                fontColor: '#1258BC',
                fontSize: 10,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              id: 'y-axis-0',
              gridLines: {
                // display: false,
                drawBorder: false,
              },
              ticks: {
                max: 20000000,
                min: 0,
                maxTicksLimit: 5,
                drawTicks: false,
                beginAtZero: true,
                fontColor: '#1258BC',
                fontSize: 10,
                callback(value, index, values) {
                  return '¥' + value
                },
              },
            },
            {
              display: false,
              stacked: false,
              // position: 'right',
              id: 'y-axis-1',
              ticks: {
                max: 20000000,
                min: 0,
                maxTicksLimit: 5,
                drawTicks: false,
                beginAtZero: true,
                fontColor: '#1258BC',
                fontSize: 10,
              },
            },
          ],
        },
      },
    }
  },
  methods: {
    handleImportClick() {
      this.importVisible = true
    },
    handleSettingsClick() {
      this.SettingsVisible = true
    },
  },
}
</script>
<style lang="scss" scoped>
.sales_container {
  padding: 20px;
}
.importbutton {
  border: 1px solid $gray-100;
}
.left {
  width: auto;
  padding-top: 10px;
}
.right {
  width: auto;
  margin-left: 20px;
}
.tab {
  background: #fff;
  border-radius: 5px;
  height: auto;
  width: 900px;
  &__header {
    height: 65px;
    border-bottom: 1px solid $gray-100;
    padding: 0px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    &__title {
      font-size: 18px;
      color: $blue-200;
    }
    &__legend {
      list-style: none;
      display: flex;
      li {
        margin-left: 10px;
        display: flex;
        align-items: center;
        &:first-child span {
          background: $blue-700;
        }
        &:nth-child(2) span {
          background: $blue-800;
        }
        &:nth-child(3) span {
          background: $green-100;
        }
        &:nth-child(4) span {
          background: $violet-100;
        }
        &:nth-child(5) span {
          background: $pink-100;
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
  }
}
</style>
