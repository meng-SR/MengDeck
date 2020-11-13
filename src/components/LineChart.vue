<template>
    <div class="lineChart"></div>
</template>
<style scoped>
    div{
        height: 100%;
    }
</style>
<script>
const echart = require('echarts')

export default {
    props: ['option'],

    mounted: function () {
        const mychart = echart.init(document.querySelector('.lineChart'))
        mychart.setOption(this.option)
    }
}
</script>
