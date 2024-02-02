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
    type: Object,
    default: () => ({})
  },
  baseUrl: {
    type: String,
    default: () => '!!!'
  },
  refresh: {
    type: Number,
    default: () => 10
  }
})
const divRef = ref()
const state = reactive({
  isShowMask: false,//控制遮罩是否显示
  myChart: null,
  time: computed(() => props.refresh * 60 * 1000),
  intervalId: null,
  data: [],
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
        const mixtureOption = JSON.parse(JSON.stringify(props.option))
        if (props.baseUrl !== '!!!') {
          ChartUtils.judgeUrl(props.baseUrl)
          const info = await state.getData()
          mixtureOption.series[0].data = info.data
        } else {
          if (state.data.length) {
            for (let i = 0; i < state.data.length; ++i) {
              if (Math.random() > 0.7) {
                state.data[i] += Math.round(Math.random() * 300);
              } else {
                state.data[i] += Math.round(Math.random() * 40);
              }
            }
          } else {
            for (let i = 0; i < 5; ++i) {
              state.data.push(Math.round(Math.random() * 100));
            }
          }
          mixtureOption.series[0].data = state.data
        }
        state.myChart.setOption(mixtureOption)
      } catch (error) {
        state.title = error
        state.isShowMask = true
      }
    }
  },//渲染函数
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
  } else {
    state.intervalId = setInterval(() => {
      state.renderChart()
    }, 2500)
  }
})
onUnmounted(() => {
  clearInterval(state.intervalId)
})
</script>

<style scoped></style>