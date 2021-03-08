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

    },
    getters:{
        getSubTotalSalary:(state)=>{
            return  state.collectSubTotalSalary.sub_total_gaji.nominal
        },

        getSubTotalWages:(state)=>{
            return  state.collectSubTotalSalary.sub_total_upah.nominal
        },
        getSubTotalKomisi:(state)=>{
            return  state.collectSubTotalSalary.sub_total_komisi.nominal
        },
        getSubTotalDemand:(state)=>{
            return  state.collectSubTotalSalary.sub_total_tanggungan.nominal
        },

        getTotalSalaryBruto:(state,getters)=>{
            let dataCollect=
            getters.getSubTotalSalary+
            getters.getSubTotalWages+
            getters.getSubTotalKomisi
            
            return state.totalSalaryBruto=dataCollect;
        },
        getTotalSalaryNet:(state)=>{
            return state.totalSalaryNet
        },
    }

}