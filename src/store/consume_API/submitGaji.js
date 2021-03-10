import { collectionUrl } from '../../service/baseUrl'

const axios = require('axios');
const urlSubmitGaji = collectionUrl.baseSubmitGaji;
export const postSalary = {
    state:{
        postSalry:{}
    },

    mutations:{
        submitSalary(state,payload){
            state.postSalary=payload
        }

    },
    actions: {
        setSubmitGaji({rootGetters,rootState,commit}) {
          rootState.loading = true;
            axios({
            method: 'post',
            url: urlSubmitGaji,
            data: {
                dataEmployee:rootGetters.getAllDataEmployee
            }
            })
            .then(function (response) {
              rootState.loading = false;
              commit('submitSalary', response.data.data)
            })
            .catch(function (error) {
                rootState.errorMessage=error.message
                rootState.loading = false;
            })
        }
    
      },
    getters:{

    }
}