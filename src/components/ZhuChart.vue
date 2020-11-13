<template>
  <div class="ZhuChart"></div>
</template>
<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
<script>
const echart = require("echarts");

export default {
  props: ["option"],

  mounted: function() {
    const mychart = echart.init(document.querySelector(".ZhuChart"));
    mychart.setOption(this.option);
  }
};
</script>
