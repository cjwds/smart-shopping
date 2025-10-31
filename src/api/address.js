import request from '@/utils/request'
export const getAddress = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/address/list')
}
