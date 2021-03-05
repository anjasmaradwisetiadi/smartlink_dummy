import { dataEmployee } from '../service/dataEmployee'

export const editKomisi={
    state:{
        dataEmployee: dataEmployee
    },

    mutations:{
        addKomisi(state,payload){
             state.dataEmployee[0].data.komisi.push(payload)
        },
        deleteKomisi(state,payload){
            // let data = state.dataEmployee[0].data.komisi; 
            state.dataEmployee[0].data.komisi = state.dataEmployee[0].data.komisi.filter((item)=>item.id != payload)  
        }
    },
    actions:{
        setAddKomisi({commit},payload){
            commit('addKomisi',payload)
        },
        setDeleteKomisi({commit},payload){
            console.log(payload)
            commit('deleteKomisi',payload)
        }

    },
    getters:{

    }
}