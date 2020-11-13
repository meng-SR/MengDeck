<template>
  <div class="main">
    <div class="e-table">
      <div>
        <tree-chart></tree-chart>
      </div>
      <div class="pieChart">
        <pie-chart :option="pieOption"></pie-chart>
      </div>
    </div>
    <div class="e-chart">
      <div>
        <div>
          <bar-chart :option="barOption"></bar-chart>
        </div>
        <h6>正在进行的项目</h6>
        <div class="allDeviceStatus">
          <div><label></label><span>项目：项目1 负责人：张三 </span></div>
          <div><label></label><span>项目：项目1 负责人：张三 </span></div>
          <div><label></label><span>项目：项目1 负责人：张三 </span></div>
          <div><label></label><span>项目：项目1 负责人：张三 </span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicLineChart from "@/components/DynamicLineChart.vue";
import PieChart from "@/components/Pie.vue";
import TreeChart from "@/components/TreeChart.vue";
import BarChart from "@/components/ZhuChart.vue";
export default {
  data: function() {
    return {
      // 饼图数据
      pieOption: {
        title: {
          text: "任务分配",
          textStyle: {
            color: "red"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} {b}: {c} ({d}%)"
        },
        series: [
          {
            name: "部门",
            type: "pie",
            selectedMode: "single",
            radius: [0, "40%"],

            label: {
              position: "inner"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 49, name: "应用技术一部", selected: true },
              { value: 44, name: "应用技术二部" },
              { value: 39, name: "应用技术三部" },
              { value: 38, name: "平台技术部" },
              { value: 21, name: "软件工程技术部" },
              { value: 16, name: "算法研究部" }
            ]
          },
          {
            name: "负责任务",
            type: "pie",
            radius: ["50%", "80%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: [
              { value: 25, name: "数据可视化工具" },
              { value: 24, name: "数字地球" },
              { value: 25, name: "项目1" },
              { value: 24, name: "项目2" },
              { value: 19, name: "技术投标" },
              { value: 20, name: "产品研发" },
              { value: 38, name: "数字地球软件研发" },
              { value: 21, name: "技术攻克" },
              { value: 16, name: "算法优化" }
            ]
          }
        ]
      },
      // 甘特图数据
      barOption: {
        textStyle: {
          color: "white"
        },
        title: {
          text: "项目实施进度表",
          left: 10,
          textStyle: {
            color: "white"
          }
        },
        legend: {
          y: "bottom",
          data: ["计划时间", "实际时间"], //修改的地方1
          textStyle: {
            color: "white"
          }
        },
        grid: {
          containLabel: true,
          left: 20
        },
        xAxis: {
          type: "time"
        },

        yAxis: {
          data: [
            "任务一",
            "任务二",
            "任务三",
            "任务四",
            "任务五",
            "任务六",
            "任务七"
          ]
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            var res = params[0].name + "</br>";
            var date0 = params[0].data;
            var date1 = params[1].data;
            var date2 = params[2].data;
            var date3 = params[3].data;
            date0 =
              date0.getFullYear() +
              "-" +
              (date0.getMonth() + 1) +
              "-" +
              date0.getDate();
            date1 =
              date1.getFullYear() +
              "-" +
              (date1.getMonth() + 1) +
              "-" +
              date1.getDate();
            date2 =
              date2.getFullYear() +
              "-" +
              (date2.getMonth() + 1) +
              "-" +
              date2.getDate();
            date3 =
              date3.getFullYear() +
              "-" +
              (date3.getMonth() + 1) +
              "-" +
              date3.getDate();
            res +=
              params[0].seriesName +
              "~" +
              params[1].seriesName +
              ":</br>" +
              date0 +
              "~" +
              date1 +
              "</br>";
            res +=
              params[2].seriesName +
              "~" +
              params[3].seriesName +
              ":</br>" +
              date2 +
              "~" +
              date3 +
              "</br>";
            console.log(params[0]);
            return res;
          }
        },
        series: [
          {
            name: "计划时间",
            type: "bar",
            stack: "test1",
            //修改地方2
            itemStyle: {
              color: "#F98563"
            },
            data: [
              new Date("2015/09/12"),
              new Date("2015/09/20"),
              new Date("2015/09/25"),
              new Date("2015/10/05"),
              new Date("2015/10/07"),
              new Date("2015/10/09"),
              new Date("2015/10/12")
            ]
          },
          {
            name: "实际使用时间",
            type: "bar",
            stack: "test1",
            itemStyle: {
              color: "#24262d"
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [
              new Date("2015/09/2"),
              new Date("2015/09/15"),
              new Date("2015/09/15"),
              new Date("2015/10/03"),
              new Date("2015/10/04"),
              new Date("2015/10/05"),
              new Date("2015/10/06")
            ]
          },
          {
            name: "实际时间",
            type: "bar",
            stack: "test2",
            //修改地方2
            itemStyle: {
              color: "#A2E068"
            },
            data: [
              new Date("2015/09/6"),
              new Date("2015/09/20"),
              new Date("2015/09/27"),
              new Date("2015/10/11"),
              new Date("2015/10/16"),
              new Date("2015/10/18"),
              new Date("2015/10/17")
            ]
          },
          {
            name: "实际使用时间",
            type: "bar",
            stack: "test2",
            itemStyle: {
              color: "#24262d"
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [
              new Date("2015/09/2"),
              new Date("2015/09/15"),
              new Date("2015/09/15"),
              new Date("2015/10/03"),
              new Date("2015/10/04"),
              new Date("2015/10/05"),
              new Date("2015/10/06")
            ]
          }
        ]
      }
    };
  },

  components: {
    DynamicLineChart,
    PieChart,
    TreeChart,
    BarChart
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
}
.e-table {
  display: inline-block;
  vertical-align: top;
  background-color: rgb(36, 38, 45);
  height: 100%;
  width: 70%;
}
.e-table > div {
  width: 100%;
  height: 50%;
  padding: 1.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.e-chart {
  display: inline-block;
  width: 30%;
  padding-left: 1vh;
  height: 100%;
}

.e-chart > div {
  height: 100%;
  width: 100%;
  background-color: rgb(36, 38, 45);
}

.e-chart > div > div {
  color: white;
  width: 100%;
}
.e-chart > div > div:first-child {
  height: 35%;
}
.e-chart h6 {
  margin: 0;
  padding: 0;
  height: 5%;
  font-size: 150%;
}
.allDeviceStatus {
  height: 60%;
  overflow: auto;
}
.allDeviceStatus div {
  border: 5px solid rgb(36, 38, 50);
  background-color: black;
  flex: 100%;
  height: 10%;
  color: white;
  text-align: left;
  padding: 2%;
  text-indent: 0.02em;
}
.allDeviceStatus div label:first-child {
  background-image: url(../assets/11.gif);
  display: inline-block;
  width: 15%;
  height: 100%;
  background-size: 100% 100%;
  vertical-align: middle;
}
.allDeviceStatus div label {
  font-size: 0.5rem;
  line-height: 33%;
  color: rgba(255, 255, 255, 0.78);
  font-weight: normal;
}
.allDeviceStatus div span {
  vertical-align: middle;
  line-height: 200%;
  color: rgb(255, 255, 255);
}
</style>
