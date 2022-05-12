let defaultCity = '北京'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  // 避免用户使用隐身模式localstorage抛出异常
} catch (e) {}

export default{
  city: defaultCity
}
