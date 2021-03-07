export const totalAllSalary={
    state:{
        collectSubTotalSalary:{
            "sub_total_gaji":{
                nominal:0
            },
            "sub_total_upah":{
                nominal:2000,
            },
            "sub_total_komisi":{
                nominal:0,
            },
            "sub_total_tanggungan":{
                nominal:0,
            },
        },
        
        totalSalaryBruto:0,
        totalSalaryNet:2124000
    },
    mutations:{
        collectSubTotal(state,payload){
            let name = payload.name
            let nominal = payload.nominal
            state.collectSubTotalSalary[name].nominal= parseInt(nominal);
        }
    },
    actions:{
        // setCollectSubTotal({commit},payload){
        //     commit('collectSubTotal',payload)
        // }
    },
    getters:{
        getTotalSalaryBruto:(state)=>{
            let dataCollect=
            state.collectSubTotalSalary.sub_total_gaji.nominal+
            state.collectSubTotalSalary.sub_total_upah.nominal+
            state.collectSubTotalSalary.sub_total_komisi.nominal+
            state.collectSubTotalSalary.sub_total_tanggungan.nominal
            
            return state.totalSalaryBruto=dataCollect;
        },
        getTotalSalaryNet:(state)=>{
            return state.totalSalaryNet
        }
    }

}