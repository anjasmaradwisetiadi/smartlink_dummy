import Vue from 'vue';
import Vuex from 'vuex';
import { modalStateManagement } from './modal'
import { editGaji }from './editGaji'
import { editKomisi } from './editKomisi'
import { collectionUrl } from '../service/baseUrl'

// import { dataEmployee } from '../service/dataEmployee'
const axios = require('axios');

Vue.use(Vuex);

const urlInquiry = collectionUrl.baseInquiry;

export default new Vuex.Store({
  state: {
    dataEmployee: {},
    errorMessage:'',
    loading: true,

  },
  mutations: {
    inquiry(state,payload){
      state.dataEmployee=payload;
    },

    errorMessage(state,payload){
      state.errorMessage=payload
    }

  },
  actions: {
    
    setInquiry({state,commit}){
      state.loading = true;
      axios.get(urlInquiry)
      .then(function (response) {
        state.loading = false;
        commit('inquiry',response.data)
      })
      .catch(function (error) {
        state.loading = false;
        commit('errorMessage',error.message)
      })
      
    }

  },
  getters: {
    getAllDataEmployee: (state) => {
      console.log(state.dataEmployee)
      return state.dataEmployee;
    },
    getErrorMessage: (state)=>{
      return state.errorMessage;
    },

    getLoading: (state)=>{
      console.log(state.loading)
      return state.loading;
    }

  },
  modules: {
    modalStateManagement,
    editGaji,
    editKomisi
  },
});
