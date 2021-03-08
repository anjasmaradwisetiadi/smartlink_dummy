
export const editKomisi={

    mutations:{
        // try call roo state from addKomisi
        // addKomisi({rootState},payload){

        // },
        // deleteKomisi(rootState,payload){
        //     // let data = state.dataEmployee[0].data.komisi; 
        //     // rootState.dataEmployee.data.komisi = rootState.dataEmployee.data.komisi.filter((item)=>item.id != payload)  
        // }
    },
    actions:{
        setAddKomisi({rootState},payload){
            rootState.dataEmployee.data.komisi.push(payload)
        },
        setDeleteKomisi({rootState},payload){
            rootState.dataEmployee.data.komisi = rootState.dataEmployee.data.komisi.filter((item)=>item.id != payload)  
        }

    },
    getters:{

    }
}