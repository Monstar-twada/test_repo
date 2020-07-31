<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'Doughnut',
  extends: Doughnut,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    textData: {
      type: Number,
      default: 595,
    },
  },
  data() {
    return {
      state_text_data: 595,
    }
  },
  watch: {
    textData(val) {
      this.state_text_data = val
      this.getData(val)
    },
  },
  mounted() {
    this.getData(this.state_text_data)
  },

  methods: {
    getData(data) {
      this.addPlugin({
        beforeDraw(chart) {
          const width = chart.chart.width
          const height = chart.chart.height
          const ctx = chart.chart.ctx

          ctx.restore()
          ctx.font = '12px sans-serif'
          ctx.fillStyle = '#1e5199'
          ctx.textBaseline = 'middle'
          const text1 = '予約件数'
          const textX1 = Math.round((width - ctx.measureText(text1).width) / 2)
          const textY1 = height / 2 - 20
          ctx.fillText(text1, textX1, textY1)

          ctx.font = '32px sans-serif'
          ctx.fillStyle = '#1e5199'
          ctx.textBaseline = 'middle'
          const text2 = data
          const textX2 = Math.round((width - ctx.measureText(text2).width) / 2)
          const textY2 = height / 2 + 10

          ctx.fillText(text2, textX2, textY2)
          ctx.save()
        },
      })
      this.renderChart(this.data, this.options)
    },
  },
}
</script>

<style></style>
