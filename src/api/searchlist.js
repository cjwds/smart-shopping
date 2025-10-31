import request from '@/utils/request'

// 获取商品列表数据
export const getList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情数据
export const getDetail = (goodsId) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 获取商品评论数据
export const getComments = (goodsId, limit) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
