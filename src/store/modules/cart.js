import { getCartList, changeCartCount, delGoods } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(ele => ele.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      state.cartList.forEach(ele => {
        ele.isChecked = flag
      })
    },
    changeCount (state, { value, goodsId }) {
      const obj = state.cartList.find(ele => ele.goods_id === goodsId)
      obj.goods_num = value
    }
  },
  actions: {
    async getCartListAction (context) {
      const { data } = await getCartList()
      // 后台返回的数据中 不包含复选框选中状态
      // 需要手动维护数据 给每一项添加一个 isChecked 状态 判断是否选中
      data.list.forEach(ele => {
        ele.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    async changeCountAction (context, obj) {
      const { goodsId, value, goodsSkuId } = obj
      // 先修改本地数据
      context.commit('changeCount', {
        value,
        goodsId
      })
      // 再同步到后台
      await changeCartCount(goodsId, value, goodsSkuId)
    },
    async delSelect (context) {
      // 删除数据
      const selCartList = context.getters.selCartList
      const catIds = selCartList.map(ele => ele.id)
      await delGoods(catIds)
      Toast('删除成功')
      // 重新渲染
      context.dispatch('getCartListAction')
    }
  },
  getters: {
    // 获取商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, ele) => sum + ele.goods_num, 0)
    },
    // 选中的商品列表
    selCartList (state) {
      return state.cartList.filter(ele => ele.isChecked)
    },
    // 选中的商品总数
    selCartTotal (state, getters) {
      return getters.selCartList.reduce((sum, ele) => sum + ele.goods_num, 0)
    },
    // 选中的商品总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, ele) => sum + ele.goods_num * ele.goods.goods_price_min, 0)
    },
    // 是否全选
    isAllChecked (state) {
      return state.cartList.every(ele => ele.isChecked)
    }
  }
}
