// editGaji
export const editGaji = {
    state:{
        money:null,
        multiplier:null,
        result:null
    },
    mutations:{
        // updateSalarys(state,payload){
        //     let index = state.dataEmployee.findIndex((todo)=> 
        //         {
        //         todo.data.pengaturan_gaji[0].id == pengaturan_gaji[0].id
        //         }
        //     )

        //     console.log(index);

        //     if(index != -1){
        //         state.dataEmployee[index] = payload
        //       }
        // },

        totalSalary(state,payload){
            console.log("todo")
            console.log(payload)
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