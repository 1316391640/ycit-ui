export default class ChartUtils{
  static urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  //格式化编辑器json字符串
  static formattingJson(jsonStr){
    const formattedStr = jsonStr.replace(/'/g, '"').replace(/\n/g, '').replace(/\s/g, '').replace(/(\w+)(:)/g, '"$1"$2')
    return JSON.parse(formattedStr)
  }
  //判断传入的url是否正确
  static judgeUrl(url){
    if (ChartUtils.urlRegex.test(url)) {
      return true
    } else {
      throw ('url地址不正确')
    }
  }
  //映射接口数据
  static mapPortData(map,data){
    let dataStr = JSON.stringify(data)
    Object.entries(map).forEach(item=>{
      dataStr=dataStr.replace(new RegExp(item[0],'g'),item[1])
    })
    return JSON.parse(dataStr)
  }
}