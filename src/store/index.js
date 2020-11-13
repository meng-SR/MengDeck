import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plateStamps: [],
    jumpEnable:true,  //可跳转的标志位，true可跳转，false不可跳
  },
  mutations: {
    incrementPlate(state) {
      let timestamp=new Date().getTime();
      state.plateStamps.push(String(timestamp));
      state.jumpEnable = true;
    },
    decrementPlate(state, stamp) {
      state.plateStamps = state.plateStamps.filter(ele => ele!=stamp);
      state.jumpEnable = false;
    },
  },
  getters: {
    plateStamps: state => state.plateStamps,
    jumpEnable: state => state.jumpEnable
  },
  actions: {
  },
  modules: {
  }
})
