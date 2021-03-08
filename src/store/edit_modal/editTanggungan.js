export const editTanggungan={

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
        setAddTanggungan({rootState},payload){
            rootState.dataEmployee.data.tanggungan.push(payload)
        },
        setDeleteTanggungan({rootState},payload){
            rootState.dataEmployee.data.tanggungan = rootState.dataEmployee.data.tanggungan.filter((item)=>item.id != payload)  
        }

    },
    getters:{

    }
}