const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTime5 = date => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTime2 = date => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('.')
}

const formatTime4 = date => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('.')
}

const formatTime3 = date => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1)<10?('0'+(date.getMonth() + 1)):(date.getMonth() + 1)
  const day = date.getDate()<10?('0'+date.getDate()):date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return year+'年'+month+'月'+day+'日'
}

const formatMoney = (money, places, symbol, thousand, decimal) => {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var number = money,
    negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const countTime = endTime=> {
  //获取当前时间
  var date = new Date(),
    now = date.getTime(),
    //设置截止时间
    end = endTime,
    //时间差
    differTime = end - now,
    //定义变量,h,m,s保存倒计时的时间
    h, m, s;
  if (differTime >= 0) {
    h = Math.floor(differTime / 1000 / 60 / 60);
    m = Math.floor(differTime / 1000 / 60 % 60);
    s = Math.floor(differTime / 1000 % 60);
    h = h < 10 ? ("0" + h) : h;
    m = m < 10 ? ("0" + m) : m;
    s = s < 10 ? ("0" + s) : s;
    return h + ':' + m + ':' + s
  } else {
    return '00:00:00'
  }
}

module.exports = {
  formatTime: formatTime,
  formatTime2:formatTime2,
  formatTime3:formatTime3,
  formatTime4:formatTime4,
  formatTime5:formatTime5,
  countTime: countTime,
  formatMoney: formatMoney
}
