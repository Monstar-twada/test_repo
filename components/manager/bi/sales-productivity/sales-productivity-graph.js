import { Line } from 'vue-chartjs';

export default {
  extends: Line,
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
  mounted() {
    this.gradientViolet = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200);
    this.gradientViolet.addColorStop(0, 'rgb(105, 109, 217)');
    this.gradientViolet.addColorStop(1, 'rgba(255, 255, 255, 0.5)');

    this.data.datasets[0].backgroundColor = this.gradientViolet;
    this.renderChart(this.data, this.options);
  },
};
