import Vue from 'vue';
import Vuex from 'vuex';
import { modalStateManagement } from './modal'
import { editGaji }from './edit_modal/editGaji'
import { editKomisi } from './edit_modal/editKomisi'
import { editTanggungan } from './edit_modal/editTanggungan'
import { totalAllSalary } from './totalAllSalary'
import { detailPembayaran } from './detail_pembayaran/detailPembayaran'
import { formAllDetailPembayaran } from './detail_pembayaran/formAll'
import { stepper } from './stepper';

import { collectionUrl } from '../service/baseUrl'

// import { dataEmployee } from '../service/dataEmployee'
const axios = require('axios');

Vue.use(Vuex);

const urlInquiry = collectionUrl.baseInquiry;
const urlBanks = collectionUrl.baseBanks;

export default new Vuex.Store({
  state: {
    dataEmployee: {},
    dataBanks:[],
    errorMessage:'',
    loading: true,

  },
  mutations: {
    inquiry(state,payload){
      state.dataEmployee=payload;
    },

    banks(state,payload){
      state.dataBanks=payload;
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
      
    },

    setBanks({state,commit}){
      state.loading = true;
      axios.get(urlBanks)
      .then(function (response) {
        state.loading = false;
        commit('banks',response.data.data)
      })
      .catch(function (error) {
        state.loading = false;
        commit('errorMessage',error.message)
      })
      
    }

  },
  getters: {
    getAllDataEmployee: (state) => {
      return state.dataEmployee;
    },
    getAllBanks: (state)=>{
      return state.dataBanks;
    },

    getErrorMessage: (state)=>{
      return state.errorMessage;
    },

    getLoading: (state)=>{
      return state.loading;
    },


  },
  modules: {
    modalStateManagement,
    editGaji,
    editKomisi,
    editTanggungan,
    totalAllSalary,
    detailPembayaran,
    formAllDetailPembayaran,
    stepper
  },
});
