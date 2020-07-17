import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      gradientGreen: null,
      gradientViolet: null,
    }
  },
  mounted() {
    //! error WIP
    this.addPlugin({
      afterUpdate(chart) {
        const dataset = chart.config.data.datasets
        const offset = 5

        for (let i = 0; i < dataset.length; i++) {
          for (let j = 0; j < dataset[i].data.length; j++) {
            for (const key in dataset[i]._meta) {
              const model = dataset[i]._meta[key].data[j]._model
              model.x += offset
              model.controlPointNextX += offset
              model.controlPointPreviousX += offset
            }
          }
        }
      },
    })
    this.gradientGreen = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200)
    this.gradientGreen.addColorStop(0, 'rgba(13,190,169,0.4023810207676821)')
    this.gradientGreen.addColorStop(1, 'rgba(255, 255, 255, 0.5)')

    this.gradientViolet = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200)
    this.gradientViolet.addColorStop(0, 'rgb(105, 109, 217)')
    this.gradientViolet.addColorStop(1, 'rgba(255, 255, 255, 0.5)')

    this.data.datasets[2].backgroundColor = this.gradientViolet
    this.data.datasets[3].backgroundColor = this.gradientGreen
    this.renderChart(this.data, this.options)
  },
}
