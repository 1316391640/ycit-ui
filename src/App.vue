<template>
  <div style="height: 100vh;">
    <div style="height: 50%;">
      <DoughnutChart :option="state.option"
        :portMap="{
          value1: 'value',
          label: 'name'
        }"
        title="123"
        :refresh="0.1"></DoughnutChart>
    </div>
    <button @click="state.option = option1">点击我</button>
    <BasicBar :option="state.option"></BasicBar>
    <BasicLineChart></BasicLineChart>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
  option: '{}'
})
const option1 = "{{\n  xAxis: {\n    type: 'category',\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {\n    type: 'value'\n  },\n  series: [\n    {\n      data: [150, 230, 224, 218, 135, 147, 260],\n      type: 'line'\n    }\n  ]\n}"

</script>

<style lang="scss" scoped></style>