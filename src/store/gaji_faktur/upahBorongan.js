
function groupBy(key) {
    return function group(array) {
      if(array){
        return array.reduce((acc, obj) => {
          const property = obj[key];
          acc[property] = acc[property] || [];
          acc[property].push(obj);
          return acc;
        }, {});
      }
      else{
        return false;
      }
  
    };
  }

export const upahBorongan = {

    state:{
        salaryArrangmentData:{},
        workedSalaryData:{},
        allDataBorongan:[]

    },
    mutations:{
        salaryArrangmentId(state,payload){
            state.salaryArrangmentData=payload
        },
        workedSalaryId(state,payload){
            state.workedSalaryData=payload
        }
    },
    actions:{
        setWageSalary({rootState,commit}){
            const groupBySalaryArrangement = groupBy('id');
            const salaryArrangment = groupBySalaryArrangement(rootState.dataEmployee.data.pengaturan_upah)
            commit('salaryArrangmentId',salaryArrangment)
        },

        setWorkedSalary({rootState,commit}){
            const groupByWorkedSalary = groupBy('pengaturan_upah_id');
            const workedSalary = groupByWorkedSalary(rootState.dataEmployee.data.pengerjaan_upah)
            commit('workedSalaryId',workedSalary)
        }
    },
    getters:{
        getSalaryArrangment:(state)=>{
            return state.salaryArrangmentData;
        },
        getSalaryWorked:(state)=>{
            return state.workedSalaryData;
        },
    }
}