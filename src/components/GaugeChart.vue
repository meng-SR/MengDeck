<template>
  <div class="gaugeChart"></div>
</template>
<style scoped>
div {
  height: 100%;
}
</style>
<script>
const echart = require("echarts");

export default {
  props: ["option"],

  mounted: function() {
    const mychart = echart.init(document.querySelector(".gaugeChart"));
    const that = this;
    setInterval(function() {
      that.option.series[0].data[0].value =
        (Math.random() * 100).toFixed(2) - 0;
      mychart.setOption(that.option, true);
    }, 2000);
  }
};
</script>
