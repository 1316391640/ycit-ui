<template>
  <div style="position: relative;height: 100%;">
    <div ref="divRef"
      style="height: 100%;" />
    <maskLayer v-if="state.isShowMask"
      :title="state.title"
      style="position: absolute;" />
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, reactive, ref, watch, } from 'vue';
import maskLayer from '../maskLayer/index.vue';
import ChartUtils from '../../utils/chartUtils'
const props = defineProps({
  option: {
    type: String,
    default: () => '{}'
  },
  baseUrl: {
    type: String,
    default: () => '!!!'
  },
  portMap: {
    type: Object,
    default: () => ({})
  },
})
const divRef = ref()
const state = reactive({
  isShowMask: false,//控制遮罩是否显示
  title: '',//遮罩内部的文案
  defaultOption: {
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
  },//默认的配置项
  finallyOption: null,//最终配置项
  myChart: null,
  getData: async () => {
    try {
      const info = await fetch(props.baseUrl, {
        method: 'GET',
      })
      return info.json()
    } catch (error) {
      return Promise.reject(error)
    }
  },//获取数据
  renderChart: async () => {
    if (state.myChart) {
      try {
        state.isShowMask = false
        const editJsonParse = ChartUtils.formattingJson(props.option)
        const mixtureOption = {
          ...state.defaultOption,
          ...editJsonParse
        }
        if (props.baseUrl !== '!!!') {
          ChartUtils.judgeUrl(props.baseUrl)
          const info = await state.getData()
          const data = ChartUtils.mapPortData(props.portMap, info.data)
          mixtureOption.series[0].data = data
        }
        state.myChart.setOption(mixtureOption)
      } catch (error) {
        state.title = error
        state.isShowMask = true
      }
    }
  }//渲染函数
})
watch(() => props, () => {
  state.renderChart()
}, { deep: true })

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  state.myChart = echarts.init(divRef.value);
  // 绘制图表
  state.renderChart()
})
</script>

<style scoped></style>