<template>
  <div class="tab">
    <div class="tab__header">
      <h3 class="tab__header--title">売上</h3>
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
    <div class="d-flex">
      <div class="left">
        <SalesGraph
          :data="SalesGraphData"
          :options="SalesGraphOptions"
          :height="220"
        />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import SalesGraph from '~/components/bi/SalesGraph.js'

export default {
  name: 'Sales',
  components: {
    SalesGraph,
  },
  data() {
    return {
      gradient: '',
      SalesGraphData: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
          {
            label: 'Visits',
            type: 'bar',
            barThickness: 10,
            data: [9386993, 9403206, 10446846, 7215544, 7527339, 0],
            backgroundColor: '#1258BC',
            order: 3,
          },
          {
            type: 'bar',
            barThickness: 10,
            label: '売上',
            data: [131567610, 137020890, 148572160, 105520740, 110337330, 0],
            backgroundColor: '#07B4FF',
            order: 3,
          },
          {
            type: 'line',
            label: '売上',
            borderColor: '#696DD9',
            borderWidth: 1.5,
            backgroundColor: 'transparent',
            data: [131567610, 137020890, 148572160, 105520740, 110337330, 0],
            order: 1,
            pointRadius: 0,
            lineTension: 0,
          },
          {
            type: 'line',
            label: '粗利',
            data: [15000000, 30000000, 40000000, 20000000, 60000000, 0],
            pointRadius: 0,
            borderColor: '#0DBEA9',
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            order: 1,
            lineTension: 0,
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
            order: 1,
          },
        ],
      },
      SalesGraphOptions: {
        responsive: true,
        scaleLabel(label) {
          return (
            '$' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          )
        },
        legend: {
          display: false,
        },
        tooltips: {
          tooltipFillColor: '#234111',
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                gridLines: false,
              },
              ticks: {
                callback(value, index, values) {
                  return '¥' + value
                },
              },
            },
          ],
        },
      },
    }
  },
  methods: {
    onChildMount(value) {
      this.gradient = value
    },
  },
}
</script>
<style lang="scss" scoped>
.left {
  width: 570px;
}
.right {
  width: 250px;
  display: block;
}
.tab {
  background: #fff;
  border-radius: 5px;
  height: 500px;
  &__header {
    height: 65px;
    border-bottom: 1px solid $gray-100;
    padding: 0px 20px;
    align-items: center;
    display: flex;
    &--title {
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
