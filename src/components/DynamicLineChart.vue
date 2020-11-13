<template>
  <div class="DynamicLineChart"></div>
</template>
<style scoped>
div {
  height: 100%;
}
</style>
<script>
function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value)
    ]
  };
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

const option = {
  textStyle: {
    color: "white"
  },
  title: {
    text: "近一个月设备使用情况",
    textStyle: {
      color: "white"
    }
  },
  tooltip: {
    trigger: "axis",
    formatter: function(params) {
      params = params[0];
      var date = new Date(params.name);
      return (
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " : " +
        params.value[1]
      );
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: "time",
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: "模拟数据",
      type: "line",
      showSymbol: false,
      hoverAnimation: false,
      data: data
    }
  ]
};

const echart = require("echarts");

export default {
  data: function() {
    return {
      option: option
    };
  },
  mounted: function() {
    const mychart = echart.init(document.querySelector(".DynamicLineChart"));
    mychart.setOption(this.option);
    setInterval(function() {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      mychart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 1000);
  }
};
</script>
