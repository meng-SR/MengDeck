<template>
    <div class="pieChart"></div>
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
        const mychart = echart.init(document.querySelector('.pieChart'))
        mychart.setOption(this.option)
    }
}
</script>
