import Vue from 'vue';
import Vuex from 'vuex';
import { modalStateManagement } from './modal'
import { editGaji }from './editGaji'
import { editKomisi } from './editKomisi'

import { dataEmployee } from '../service/dataEmployee'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataEmployee: dataEmployee

  },
  mutations: {},
  actions: {},
  getters: {
    getAllDataEmployee: (state) => {
      return state.dataEmployee;
    }
  },
  modules: {
    modalStateManagement,
    editGaji,
    editKomisi
  },
});
