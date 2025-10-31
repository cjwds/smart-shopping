import request from '@/utils/request'

// 订单结算
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

// 提交订单
export const subOrder = (mode, params) => {
  return request.post('/checkout/submit', {
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...params,
    mode
  })
}

// 订单列表
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
