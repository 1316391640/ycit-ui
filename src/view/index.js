import {defineAsyncComponent} from 'vue'
const components = import.meta.glob('./(**/*|*).vue',)
// 全局组件的注册
const install = function (app) {
	Object.keys(components).forEach(fileName => {
		// 获取组件配置
		const file = components[fileName]
    const componentName=fileName.replace('./','').replace('/index.vue','')
		// // 全局注册组件
		app.component(componentName, defineAsyncComponent(file))
	})
}
export default install
