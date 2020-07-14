<template>
  <div chass="ma-chart">
    <h3 class="ma-chart__title">総合効果</h3>
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
    <v-row class="mx-0 mt20" justify="start" align="center">
      <div class="stacked-chart">
        <StackedBar
          :data="stackedData"
          :options="stackedOptions"
          :width="700"
          :height="250"
        />
      </div>
      <div class="doughnut-chart ml30">
        <Doughnut
          :data="doughnutData"
          :options="doughnutOptions"
          :width="200"
          :height="200"
          :text-data="595"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import Doughnut from '~/components/ma/Doughnut'
import StackedBar from '~/components/ma/StackedBar'

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
            backgroundColor: ['#1DC9D7', '#3aa8d9', '#4d8bd2', '#878ae0'],
            borderWidth: 1,
            data: [238, 238, 60, 60],
            weight: 1,
          },
        ],
      },
      doughnutOptions: {
        responsive: false,
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
        labels: ['新規＋リピート', 'リーチ数', 'クリック数', '予約件数'],
        datasets: [
          {
            label: '車検',
            type: 'bar',
            backgroundColor: '#696DD9',
            data: [680, 1512, 979, 238],
          },
          {
            label: '車販',
            type: 'bar',
            backgroundColor: '#0993D0',
            data: [3099, 1512, 979, 238],
          },
          {
            label: 'オイル会員',
            type: 'bar',
            backgroundColor: '#216EC7',
            data: [0, 378, 245, 60],
          },
          {
            label: '一般整備',
            type: 'bar',
            backgroundColor: '#1DC9D7',
            data: [0, 378, 245, 60],
          },
          {
            type: 'line',
            fill: false,
            borderDash: [3, 6],
            borderColor: '#ccc',
            data: [3779, 3779, 2447, 595],
          },
        ],
      },
      stackedOptions: {
        responsive: false,
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

  .stacked-chart {
    background: $white-300;
    width: 700px;
    height: 200px;
  }
  .doughnut-chart {
    background: $white-300;
    width: 200px;
    height: 200px;
  }

  &__title {
    color: $blue-200;
    font-size: 18px;
    display: inline-block;
  }

  &__legend {
    width: 300px;
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
        background: #3aa8d9;
      }
      &:nth-child(3) span {
        background: #4d8bd2;
      }
      &:nth-child(4) span {
        background: #878ae0;
      }
      span {
        width: 10px;
        height: 3px;
        display: block;
        margin-right: 5px;
      }
      h5 {
        font-weight: 400;
        font-size: 10px;
        color: $blue-200;
      }
    }
  }
}
</style>
