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
  mounted() {
    this.renderChart(this.data, this.options)
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
    // this.$nextTick(function () {
    //   emitToParent (event) {
    //     this.$emit('childToParent', this.childMessage)
    //   }
    // })
  },
}
//     this.renderChart({
//       data: [
//         {
//           ...this.data,
//           //   backgroundColor: this.gradient,
//         },
//       ],
//       options: this.options,
//     })
//
//   },
// }
