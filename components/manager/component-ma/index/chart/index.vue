<template>
  <div chass="ma-chart">
    <v-row class="ma-0" justify="start" align="center">
      <h3 class="ma-chart__title">集客効果</h3>
      <ul class="ma-chart__legend pa-0 ml10">
        <li>
          <span />
          <h5>一般整備</h5>
        </li>
        <li>
          <span />
          <h5>車販</h5>
        </li>
        <li>
          <span />
          <h5>オイル会員</h5>
        </li>
        <li>
          <span />
          <h5>車検</h5>
        </li>
      </ul>
    </v-row>
    <v-row class="mx-0 mt20" justify="start" align="center">
      <div class="stacked-chart">
        <StackedBar
          :data="stackedData"
          :options="stackedOptions"
          :height="250"
        />
      </div>
      <div class="doughnut-chart ml30">
        <Doughnut
          :data="doughnutData"
          :options="doughnutOptions"
          :text-data="595"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import Doughnut from '~/components/manager/component-ma/index/chart/Doughnut'
import StackedBar from '~/components/manager/component-ma/index/chart/StackedBar'

export default {
  components: {
    Doughnut,
    StackedBar,
  },
  props: {
    //
  },
  data() {
    return {
      doughnutData: {
        labels: ['車販', '車検', 'オイル会員', '一般整備'],
        datasets: [
          {
            // label: 'Income',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: ['#696DD9', '#216EC7', '#1DC9D7', '#0D9CBE'],
            borderWidth: 1,
            data: [238, 238, 60, 60],
            weight: 1,
          },
        ],
      },
      doughnutOptions: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Monthly Income',
        },
      },
      stackedData: {
        labels: ['新規＋リピート', 'リーチ数', 'コンタクト数', '予約件数'],
        datasets: [
          {
            label: '車検',
            type: 'bar',
            backgroundColor: 'rgba(105, 109, 217, 0.8)',
            data: [680, 1512, 979, 238],
          },
          {
            label: '車販',
            type: 'bar',
            backgroundColor: 'rgba(33,110,199, 0.8)',
            data: [3099, 1512, 979, 238],
          },
          {
            label: 'オイル会員',
            type: 'bar',
            backgroundColor: 'rgba(13,156,190,0.8)',
            data: [0, 378, 245, 60],
          },
          {
            label: '一般整備',
            type: 'bar',
            backgroundColor: 'rgba(29,201,215, 0.8)',
            data: [0, 378, 245, 60],
          },
          {
            type: 'line',
            fill: false,
            borderDash: [2, 5],
            borderColor: '#aaa',
            borderWidth: 1,
            data: [3779, 3779, 2447, 595],
          },
        ],
      },
      stackedOptions: {
        responsive: true,
        barThickness: 90,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              categoryPercentage: 0.2,
              barPercentage: 1,
              ticks: {
                fontSize: 10,
                fontColor: '#1E5199',
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                color: '#dfe6f0',
              },
              ticks: {
                fontSize: 10,
                fontColor: '#1E5199',
                callback(value, index, values) {
                  return value.toLocaleString()
                },
              },
            },
          ],
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.ma-chart {
  background: $white-300;

  &__title {
    color: $blue-200;
    font-size: 18px;
  }

  &__legend {
    width: 250px;
    display: inline-flex;
    list-style: none;
    li {
      margin-left: 10px;
      display: flex;
      align-items: center;
      &:nth-child(1) span {
        background: #1dc9d7;
      }
      &:nth-child(2) span {
        background: #216ec7;
      }
      &:nth-child(3) span {
        background: #0d9cbe;
      }
      &:nth-child(4) span {
        background: #696dd9;
      }
      span {
        width: 10px;
        height: 3px;
        display: block;
        margin: 2px 5px 0 0;
      }
      h5 {
        font-weight: 400;
        font-size: 10px;
        color: $blue-200;
      }
    }
  }
}

.stacked-chart {
  width: 70%;
  height: 250px;
}
.doughnut-chart {
  background: $white-300;
  width: 200px;
  height: 200px;
}
</style>
