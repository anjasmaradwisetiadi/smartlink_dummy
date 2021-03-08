export const editTanggungan={
    actions:{
        setAddTanggungan({rootState},payload){
            rootState.dataEmployee.data.tanggungan.push(payload)
        },
        setDeleteTanggungan({rootState},payload){
            rootState.dataEmployee.data.tanggungan = rootState.dataEmployee.data.tanggungan.filter((item)=>item.id != payload)  
        }

    },
}