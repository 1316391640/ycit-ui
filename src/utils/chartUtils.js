export default class ChartUtils{
  static urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
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