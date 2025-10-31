import request from '@/utils/request'
// 加入购物车
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 获取购物车列表数据
export const getCartList = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/cart/list')
}

// 更新购物车商品数量
export const changeCartCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除商品
export const delGoods = (cartIds) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/clear', {
    cartIds
  })
}
