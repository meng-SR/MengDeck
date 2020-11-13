/* eslint-disable quotes */
<template>
  <div class="main">
    <div class="e-table">
      <div class="guageAndRadar">
        <flow-chart></flow-chart>
      </div>
      <div>
        <div>
          <span>员工总人数：</span>
          <br />
          <label>999</label>人
        </div>
        <div>
          <span>出差总人数：</span>
          <br />
          <label>999</label>人
        </div>
        <div>
          <span>今日出勤人数：</span>
          <br />
          <label>999</label>人
        </div>
        <div>
          <span>今日缺勤人数：</span>
          <br />
          <label>999</label>人
        </div>
      </div>
      <div class="employee">
        <el-table :data="tableData" height="100%" border style="width: 100%">
          <el-table-column prop="name" label="姓名" style="width:20%">
          </el-table-column>
          <el-table-column prop="sex" label="性别" style="width:20%">
          </el-table-column>
          <el-table-column prop="tel" label="联系电话" style="width:20%">
          </el-table-column>
          <el-table-column prop="department" label="所属部门" style="width:20%">
          </el-table-column>
          <el-table-column prop="position" label="职位" style="width:20%">
          </el-table-column>
          <el-table-column prop="status" label="当前状态" style="width:20%">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="e-chart">
      <div>
        <div>
          <line-chart :option="lineOption"></line-chart>
        </div>
        <div>
          <pie-chart :option="pieOption"></pie-chart>
        </div>
        <div>
          <radar-chart></radar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import PieChart from "@/components/Pie.vue";
import RadarChart from "@/components/RadarChart.vue";
import FlowChart from "@/components/FlowChart.vue";
export default {
  data: function() {
    return {
      // 表格数据
      tableData: [
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        },
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        },
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        },
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        },
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        },
        {
          name: "王小虎",
          sex: "男",
          tel: "15739657896",
          department: "22室应用技术一部",
          position: "普通员工",
          status: "已打卡"
        }
      ],
      // 折线图数据
      lineOption: {
        title: {
          left: "center",
          text: "最近一周的出勤统计",
          textStyle: {
            color: "white"
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [8, 9, 7, 7, 10, 9, 12],
            type: "line"
          }
        ],
        textStyle: {
          color: "white"
        }
      },
      // 饼图数据
      pieOption: {
        title: {
          left: "center",
          text: "研究所员工学位统计",
          textStyle: {
            color: "white"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "学位",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "学士" },
              { value: 310, name: "硕士" },
              { value: 234, name: "博士" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      }
      // 仪表盘数据
    };
  },

  components: {
    LineChart,
    PieChart,
    RadarChart,
    FlowChart
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
  height: 28%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.e-table .guageAndRadar {
  height: 44%;
}

.e-table > div:nth-child(2) div {
  height: 60%;
  width: 23%;
  padding: 4%;
  text-align: left;
}
.e-table > div:nth-child(2) div:nth-child(1) {
  background-color: rgb(55, 121, 253);
}
.e-table > div:nth-child(2) div:nth-child(2) {
  background-color: rgb(255, 165, 35);
}
.e-table > div:nth-child(2) div:nth-child(3) {
  background-color: rgb(245, 46, 90);
}
.e-table > div:nth-child(2) div:nth-child(4) {
  background-color: purple;
}
.e-table > div:nth-child(2) div span {
  color: rgb(255, 255, 255);
  font-weight: normal;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-size: 16px;
}
.e-table > div:nth-child(2) div label {
  font-size: 400%;
  font-weight: bold;
  line-height: 150%;
}

.el-table {
  background-color: rgb(36, 38, 45) !important;
}
.el-table >>> .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(255, 174, 0, 0.651) !important;
  cursor: pointer;
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
  width: 100%;
  height: 33%;
  color: white;
}

.employee .el-table tr:hover > td {
  background-color: rgba(255, 174, 0, 0.651) !important;
  cursor: pointer;
}
</style>
<style>
.employee .el-table th,
.employee .el-table tr {
  background-color: rgb(36, 38, 45) !important;
  color: rgba(255, 0, 0, 0.884);
}
.employee .el-table tr:hover > td {
  background-color: rgba(255, 174, 0, 0.651) !important;
  cursor: pointer;
}
.employee .el-table__body-wrapper::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 16.8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.employee .el-table__body-wrapper::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.employee .el-table__body-wrapper::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #53535300;
}
</style>
