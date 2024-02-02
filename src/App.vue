<template>
  <div style="height: 100vh;">
    <DefaultArrangement :option="state.defaultArrangementOption"></DefaultArrangement>
    <StackedLineChart :option="state.stackedLineChartOption"
      :refresh="0.1"></StackedLineChart>
    <BarRace :option="state.barRaceOption"
      :refresh="0.1"></BarRace>
    <ExampleDataset :option="state.exampleDatasetOption"
      :refresh="1"></ExampleDataset>
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
  },
  exampleDatasetOption: {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  },
  barRaceOption: {
    tooltip: {},
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 4 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: [],
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  },
  stackedLineChartOption: {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        axis: 'y',
        type: 'cross',
        label: {
          show: true
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  },
  dynamicDataOption: {
    title: {
      text: 'Dynamic Data & Time Axis'
    },
    tooltip: {
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: true
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: []
      }
    ]
  },
  defaultArrangementOption: {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
      ]
    },
    series: [
      {
        type: 'pie',
        radius: '20%',
        center: ['25%', '30%']
        // No encode specified, by default, it is '2012'.
      },
      {
        type: 'pie',
        radius: '20%',
        center: ['75%', '30%'],
        encode: {
          itemName: 'product',
          value: '2013'
        }
      },
      {
        type: 'pie',
        radius: '20%',
        center: ['25%', '75%'],
        encode: {
          itemName: 'product',
          value: '2014'
        }
      },
      {
        type: 'pie',
        radius: '20%',
        center: ['75%', '75%'],
        encode: {
          itemName: 'product',
          value: '2015'
        }
      }
    ]
  }
})
console.log(JSON.stringify(state.exampleDatasetOption))
</script>

<style lang="scss" scoped></style>