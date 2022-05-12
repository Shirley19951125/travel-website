import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  //  actions: {
  //       ctx上下文
  //     changeCity (ctx, city) {
  //       ctx.commit('changeCity', city)
  //       // 调用mutation的方法
  //     }
  //   },
  mutations
})
