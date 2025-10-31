import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      // 跨模块调用需要设置 {root: true}
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {}
}
