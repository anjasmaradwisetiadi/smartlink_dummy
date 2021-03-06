import { dataEmployee } from '../service/dataEmployee'

export const editKomisi={

    mutations:{
        addKomisi({rootState},payload){
            console.log("data add komisi ")
            console.log(payload)
            console.log(this.$store.state.dataEmployee)


        },
        deleteKomisi(rootState,payload){
            // let data = state.dataEmployee[0].data.komisi; 
            rootState.dataEmployee.data.komisi = rootState.dataEmployee.data.komisi.filter((item)=>item.id != payload)  
        }
    },
    actions:{
        setAddKomisi({commit,rootState},payload){
            // commit('addKomisi',payload)
            rootState.dataEmployee.data.komisi.push(payload)
        },
        setDeleteKomisi({commit},payload){
            commit('deleteKomisi',payload)
        }

    },
    getters:{

    }
}