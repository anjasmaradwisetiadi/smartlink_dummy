import { collectionUrl } from '../../service/baseUrl'

const axios = require('axios');
const urlInquiry = collectionUrl.baseInquiry;

export const getInquiry = {
    
  actions: {
    setInquiry({rootState,commit}) {
      rootState.loading = true;
      axios.get(urlInquiry)
        .then(function (response) {
          commit('inquiry',response.data)
          return rootState.loading = false;
        })
        .catch(function (error) {
          rootState.errorMessage=error.message
          return rootState.loading = false;
        })
    }

  },
}
