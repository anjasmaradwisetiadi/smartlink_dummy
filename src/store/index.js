import Vue from 'vue';
import Vuex from 'vuex';
import { modalStateManagement } from './modal'
import { editGaji }from './editGaji'
import { editKomisi } from './editKomisi'
import { collectionUrl } from '../service/baseUrl'

// import { dataEmployee } from '../service/dataEmployee'
const axios = require('axios');
const urlCol="https://dev-bos.smartlink.id/salary/inquiry"

Vue.use(Vuex);

const urlInquiry = collectionUrl.baseInquiry;

export default new Vuex.Store({
  state: {
    dataEmployee: [],
    errorMessage:''

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
    setInquiry({commit}){
      axios.get(urlInquiry)
      .then(function (response) {
        commit('inquiry',response)
      })
      .catch(function (error) {
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
    }

  },
  modules: {
    modalStateManagement,
    editGaji,
    editKomisi
  },
});
