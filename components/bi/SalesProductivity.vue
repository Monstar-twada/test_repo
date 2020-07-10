<template>
  <div class="tab mb30">
    <div class="tab__header">
      <h3 class="tab__header--left">生産性</h3>
      <div class="tab__header__right d-flex align-baseline">
        <h4>平均粗利</h4>
        <h3><span>¥</span>7,037<span>/時</span></h3>
      </div>
    </div>
    <div class="d-flex">
      <SalesProductivityGraph
        :data="data"
        :options="options"
        :width="880"
        :height="280"
      />
    </div>
    <ul class="graphlabel d-flex pa-0">
      <li v-for="value in labelsIncome" :key="value.id">
        {{ '¥' + value }}
      </li>
    </ul>
  </div>
</template>
<script>
import SalesProductivityGraph from '~/components/bi/SalesProductivityGraph.js'
export default {
  name: 'Sales',
  components: {
    SalesProductivityGraph,
  },
  data() {
    return {
      gradient: '',
      labelsIncome: ['10,438', '6,945', '7,730', '5,970', '7,037', '7,427'],
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
          {
            type: 'line',
            label: '目標',
            data: [0, 180, 205, 430, 230, 500],
            borderColor: '#696DD9',
            pointRadius: 0,
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            lineTension: 0,
            order: 1,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0,
          },
        },
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
              gridLines: {
                display: false,
                drawOnChartArea: false,
              },
              ticks: {
                fontColor: '#1258BC',
                fontSize: 10,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                maxTicksLimit: 6,
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
    childToParent(value) {
      this.gradient = value
    },
  },
}
</script>
<style lang="scss" scoped>
.tab {
  background: #fff;
  border-radius: 5px;
  height: 400px;
  width: 900px;
  &__header {
    height: 65px;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    &--left {
      font-size: 18px;
      color: $blue-200;
    }
    &__right {
      h4 {
        margin-right: 10px;
        font-size: 14px;
        color: $blue-200;
      }
      h3 {
        font-size: 30px;
        color: $blue-200;
        font-weight: 800;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .graphlabel {
    justify-content: space-between;
    list-style: none;
    margin: 0 25px;
    li {
      font-size: 12px;
      color: $blue-200;
      font-weight: 800;
    }
  }
}
</style>
