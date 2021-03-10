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
import { getInquiry } from './consume_API/inquiry';
import { getBanks } from './consume_API/banks';
import { upahBorongan } from './gaji_faktur/upahBorongan';
import { gaji } from './gaji_faktur/gaji';
import { postSalary } from './consume_API/submitGaji'


// import { dataEmployee } from '../service/dataEmployee'

Vue.use(Vuex);


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
    stepper,
    getInquiry,
    getBanks,
    upahBorongan,
    gaji,
    postSalary,

  },
});
