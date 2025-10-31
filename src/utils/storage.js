// 将信息存储到本地
const InfoKey = 'hm-shopping-info'
const HistorySearchKey = 'hs-shopping-info'

// 获取个人信息
export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const res = localStorage.getItem(InfoKey)
  return res ? JSON.parse(res) : defaultInfo
}
// 设置个人信息
export const setInfo = (info) => {
  localStorage.setItem(InfoKey, JSON.stringify(info))
}
// 删除个人信息
export const removeInfo = () => {
  localStorage.removeItem(InfoKey)
}

// 获取历史搜索信息
export const getHSInfo = () => {
  const res = localStorage.getItem(HistorySearchKey)
  return res ? JSON.parse(res) : []
}
// 设置历史搜索信息
export const setHSInfo = (arr) => {
  localStorage.setItem(HistorySearchKey, JSON.stringify(arr))
}
