import request from '@/utils/request'
export const getHome = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/page/detail', {
    params: {
      pageld: 0
    }
  })
}
