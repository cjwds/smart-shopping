import request from '@/utils/request'

// 获取分类数据
export const getCategoryData = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/category/list')
}
