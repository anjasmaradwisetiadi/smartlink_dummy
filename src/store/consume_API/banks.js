import { collectionUrl } from '../../service/baseUrl'

const axios = require('axios');
const urlBanks = collectionUrl.baseBanks;

export const getBanks = {

  actions: {
    setBanks({rootState,commit}) {
      rootState.loading = true;
      axios.get(urlBanks)
        .then(function (response) {
          rootState.loading = false;
          commit('banks', response.data.data)
        })
        .catch(function (error) {
          rootState.loading = false;
          commit('errorMessage', error.message)
        })

    }

  },

}
