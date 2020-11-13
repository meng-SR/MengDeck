<template>
  <div class="treeChart"></div>
</template>

<style scoped>
.treeChart {
  height: 100%;
  width: 100%;
}
</style>

<script>
const echart = require("echarts");

var data1 = {
  name: "空天院",
  children: [
    {
      name: "人事部",
      value: 19
    },
    {
      name: "21室",
      children: [
        { name: "管理办公室", value: 8 },
        { name: "平台技术部", value: 38 },
        { name: "软件工程技术部", value: 21 },
        { name: "算法研究技术部", value: 16 },
        { name: "应用技术一部", value: 49 },
        { name: "应用技术二部", value: 44 },
        { name: "应用技术三部", value: 39 }
      ]
    },
    {
      name: "22室",
      children: [
        { name: "嵌入技术部", value: 4116 },
        { name: "星地管理部", value: 3623 },
        { name: "分布式系统部", value: 3623 },
        { name: "系统集成部", value: 3623 },
        { name: "总体部", value: 3623 },
        { name: "综合管理", value: 3623 }
      ]
    }
  ]
};
const option = {
  title: {
    text: "空天院组织结构",
    textStyle: {
      color: "red"
    }
  },
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove"
  },

  series: [
    {
      textStyle: {
        color: "white"
      },
      type: "tree",

      name: "tree1",

      data: [data1],

      top: "2%",
      left: "7%",
      bottom: "2%",
      right: "20%",

      symbolSize: 7,

      label: {
        position: "left",
        verticalAlign: "middle",
        align: "right",
        color: "white"
      },

      leaves: {
        label: {
          position: "right",
          verticalAlign: "middle",
          align: "left"
        }
      },

      expandAndCollapse: true,

      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};
export default {
  data: function() {
    return {
      option: option
    };
  },
  mounted: function() {
    const mychart = echart.init(document.querySelector(".treeChart"));
    mychart.hideLoading();
    mychart.setOption(this.option);
  }
};
</script>
