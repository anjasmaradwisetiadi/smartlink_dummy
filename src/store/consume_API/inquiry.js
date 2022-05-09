import { collectionUrl } from '../../service/baseUrl'

const axios = require('axios');
const urlInquiry = collectionUrl.baseInquiry;

export const getInquiry = {

  actions: {
    setInquiry({rootState,commit}) {
      rootState.loading = true;

      setTimeout(() => {
        commit('inquiry',urlInquiry)
        rootState.loading = false;
      }, 3000);
      // with url backend
      // axios.get(urlInquiry)
      //   .then(function (response) {
      //     commit('inquiry',response.data)
      //     rootState.loading = false;
      //   })
      //   .catch(function (error) {
      //     rootState.errorMessage=error.message
      //     rootState.loading = false;
      //   })
    }

  },
}
