<template>
  <div style="height: 100vh;">
    <div style="height: 50%;">
      <button @click="state.doughnutChartOption = state.option">点击我</button>
      <DoughnutChart :option="state.doughnutChartOption"
        :portMap="{
          value1: 'value',
          label: 'name'
        }"
        baseUrl="https://lowcoding.kapeixi.cn/chart/mockPie"
        :refresh="1"></DoughnutChart>
    </div>
    <BasicBar :option="state.basicBarOption"
      :refresh="0.1"></BasicBar>
    <BasicLineChart :option="state.basicLineChartOption"
      :refresh="0.1"></BasicLineChart>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
  option: {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: 'Search Engine' },
          { value: 10, name: 'Direct' },
          { value: 1, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  },
  doughnutChartOption: {
    title: {
      text: '饼图'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  },
  basicBarOption: {
    title: {
      text: '柱形图'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  },
  basicLineChartOption: {
    title: {
      text: '折线图'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
})

</script>

<style lang="scss" scoped></style>