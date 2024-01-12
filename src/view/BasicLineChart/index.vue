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
import { onMounted, reactive, ref, watch, computed, onUnmounted } from 'vue';
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
  title: {
    type: String,
    default: () => ''
  },
  refresh: {
    type: Number,
    default: () => 10
  }
})
const divRef = ref()
const state = reactive({
  isShowMask: false,//控制遮罩是否显示
  title: '',//遮罩内部的文案
  defaultOption: {
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
  },//默认的配置项
  finallyOption: null,//最终配置项
  myChart: null,
  time: computed(() => props.refresh * 60 * 1000),
  intervalId: null,
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
          mixtureOption.series[0].data = info.data
        }
        mixtureOption.title.text = props.title
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
  if (props.baseUrl !== '!!!') {
    state.intervalId = setInterval(() => {
      state.renderChart()
    }, state.time)
  }
})
onUnmounted(() => {
  clearInterval(state.intervalId)
})
</script>

<style scoped></style>