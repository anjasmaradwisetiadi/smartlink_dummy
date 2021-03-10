
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

export const gaji = {

    state:{
        salaryTypeData:{}
    },
    mutations:{
        salaryTypeId(state,payload){
            state.salaryTypeData=payload
        }
    },
    actions:{
        setSalary({rootState,commit}){
            const groupBySalaryType = groupBy('jenis');
            const salaryType = groupBySalaryType(rootState.dataEmployee.data.pengaturan_gaji)
            commit('salaryTypeId',salaryType)
        },

    },
    getters:{
        getSalaryTypeData:(state)=>{
            console.log("salary type data")
            console.log(state.salaryTypeData)
            return state.salaryTypeData
        }
    }
}