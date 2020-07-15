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
      gradient: null,
    }
  },
  methods: {
    emitToParent(event) {
      this.$parent.childToParent(event)
    },
  },
  mounted() {
    this.addPlugin({
      afterUpdate(chart) {
        // We get the dataset and set the offset here
        const dataset = chart.config.data.datasets
        const offset = 5

        for (let i = 0; i < dataset.length; i++) {
          // For every data in the dataset ...
          for (let j = 0; j < dataset[i]._meta[0].data.length; j++) {
            // We get the model linked to this data
            const model = dataset[i]._meta[0].data[j]._model

            // And add the offset to the `x` property
            model.x += offset

            // .. and also to these two properties
            // to make the bezier curve fits the new graph
            model.controlPointNextX += offset
            model.controlPointPreviousX += offset
          }
        }
      },
    })
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
    // this.emitToParent(this.gradient)
    this.data.datasets[2].backgroundColor = this.gradient
    this.renderChart(this.data, this.options)
  },
}
