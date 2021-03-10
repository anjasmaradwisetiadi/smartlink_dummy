// editGaji
export const editGaji = {
    state:{
        money:null,
        multiplier:null,
        result:null
    },
    mutations:{
        totalSalary(state,payload){
            state.result=payload.nominal*payload.periode;
        }

    },
    actions:{

        setUpdateSalarys({commit},payload){
            commit('updateSalarys',payload)
        },

    },
    getters:{
        getTotalSalary:(state)=>{
            return state.result
        }   
    }
}