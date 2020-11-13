 <template>
    <div class="main">
        <div class="e-table">
            <div class="guageAndRadar">
                <div>
                    <gauge-chart :option='gaugeOption'></gauge-chart>
                </div>
                <div>
                    <line-chart :option='basicRadarOption'></line-chart>
                </div>
            </div>
            <div>
                <zhu-chart :option='zhuOption'></zhu-chart>
            </div>
        </div>
        <div class="e-chart">
            <div>
                <div>
                    <dynamic-line-chart></dynamic-line-chart>
                </div>
                <div>
                    <pie-chart :option='pieOption'></pie-chart>
                </div>
                <h6>目前设备使用情况</h6>
                <div class="allDeviceStatus">
                    <div>
                        <label></label><span>电脑</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                    <div>
                        <label></label><span>打印机</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                    <div>
                        <label></label><span>中央空调</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                    <div>
                        <label></label><span>电灯</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                    <div>
                        <label></label><span>饮水机</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                    <div>
                        <label></label><span>投影仪</span><br/>
                        <label>在线：</label><span>125台</span><br/>
                        <label>离线：</label><span>56台</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DynamicLineChart from '@/components/DynamicLineChart.vue'
    import PieChart from '@/components/Pie.vue'
    import GaugeChart from '@/components/GaugeChart.vue'
    import RadarChart from '@/components/RadarChart.vue'
    import ZhuChart from '@/components/ZhuChart.vue'
    import lineChart from '@/components/LineChart.vue'
    export default {
        data: function () {
            return {
                // 饼图数据
                pieOption: {
                    title: {
                        left: 'center',
                        text: '设备分类',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['电脑', '打印机', '中央空调', '电灯', '饮水机', '投影仪', '其他'],
                        textStyle: {
                            color: 'white'
                        }
                    },
                    series: [
                        {
                            name: '设备类别',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: 335, name: '电脑' },
                                { value: 310, name: '打印机' },
                                { value: 234, name: '中央空调' },
                                { value: 335, name: '电灯' },
                                { value: 310, name: '饮水机' },
                                { value: 234, name: '投影仪' },
                                { value: 234, name: '其他' }
                            ]
                        }
                    ]
                },
                // 仪表盘数据
                gaugeOption: {
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: { formatter: '{value}%' },
                            title: { textStyle: { color: 'white' } },
                            data: [{ value: 50, name: '设备使用率' }]
                        }
                    ]
                },
                // 柱状图数据
                zhuOption: {
                    textStyle: {
                        color: 'white'
                    },
                    title: {
                        text: '21、22室设备使用情况',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['21室', '22室'],
                        textStyle: {
                            color: 'white'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['电脑', '打印机', '中央空调', '电灯', '饮水机', '投影仪']
                    },
                    series: [
                        {
                            name: '21室',
                            type: 'bar',
                            data: [150, 12, 25, 36, 5, 6]
                        },
                        {
                            name: '22室',
                            type: 'bar',
                            data: [145, 15, 21, 36, 4, 7]
                        }
                    ]
                },
                // 基础雷达图数据
                basicRadarOption: {
                    tooltip: {},
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
                        textStyle: {
                            color: 'white'
                        }
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '效率', max: 6500},
                            { name: '质量', max: 16000},
                            { name: '使用时长', max: 30000},
                            { name: '利用率', max: 38000},
                            { name: '研发', max: 52000},
                            { name: '市场', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 实际',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: '预算分配（Allocated Budget）'
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: '实际开销（Actual Spending）'
                            }
                        ]
                    }]
                }
            }
        },

        components: {
            DynamicLineChart,
            PieChart,
            GaugeChart,
            ZhuChart,
            lineChart
        }
    }
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
}
.e-table{
    display:inline-block;
    vertical-align: top;
    background-color: rgb(36, 38, 45);
    height: 100%;
    width: 70%;
}
.e-table>div{
    width: 100%;
    height: 50%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.e-table .guageAndRadar>div{
    display: inline-block;
    height: 100%;
    width: 50%;
    vertical-align: top;
}

.e-chart{
display: inline-block;
width: 30%;
padding-left: 1vh;
height: 100%;
}

.e-chart>div{
height: 100%;
width: 100%;
background-color: rgb(36, 38, 45);
}

.e-chart>div>div{
    width: 100%;
    height: 32%;
    color: white;
}

.e-chart>div .allDeviceStatus{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.e-chart h6{
    margin: 0;
    padding: 0;
    height: 4%;
    font-size: 150%;
}
.allDeviceStatus div{
    border: 5px solid rgb(36, 38, 50);
    background-color: black;
    flex: 50%;
    height: 33%;
    color: white;
    text-align: left;
    padding: 2%;
    text-indent: 0.02em;
}
.allDeviceStatus div label:first-child{
    background-image: url(../assets/11.gif);
    display: inline-block;
    width: 18%;
    height: 30%;
    background-size: 100% 100%;
    vertical-align: middle;
}
.allDeviceStatus div label{
    font-size: 0.5rem;
    line-height: 33%;
    color: rgba(255, 255, 255, 0.78);
    font-weight: normal;
}
.allDeviceStatus div span{
    vertical-align: middle;
    line-height: 200%;
    color: rgb(255, 255, 255);
}
</style>
