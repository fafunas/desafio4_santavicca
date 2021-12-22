import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comidas:[]
  },
  mutations: {
    COMIDAS(state,payload){
      state.comidas = payload
    }
  },
  actions: {
    obtenerComidas(context){
      Axios.get("https://61b24f08c8d4640017aaf359.mockapi.io/comidas")
      .then ((data)=> {
        context.commit("COMIDAS", data.data);
      });
    }

  },

  getters:{
    comidas: state => state.comidas

  },
  modules: {
  }
})
