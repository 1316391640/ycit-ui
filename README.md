# ycit-ui

一个基于echarts的组件库
# 快速开始
## install via npm

<pre>
npm i ycit-ui
</pre>

## 使用

<pre>
import {createApp} from 'vue'
import ycit from 'ycit-ui'
const app=createApp()
app.use(ycit)
</pre>

# API

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------------------------|----------------|--------------|
| option      | echarts的option配置项         | JSON           |              |
| baseUrl     | 请求的数据源地址                | String        |               |
| portMap     | 请求数据与echarts对应字段的映射  | Object        |               |
| title       | 图表的标题名称                  | String        |               |
| refresh     | 数据地址的请求间隔(分钟)         | Number        |  1            |




