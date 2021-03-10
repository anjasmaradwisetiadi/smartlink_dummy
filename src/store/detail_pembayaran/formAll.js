export const formAllDetailPembayaran = {
  state: {
    bank:{},  
    date:'',
    description:'',
    validationDataBanks:'valid',
    validationDataDate:'valid',
  },

  mutations: {
    dataBank(state,payload){
        state.bank=payload;
    },
    dataDate(state,payload){
        state.date=payload;
    },
    dataDescription(state,payload){
        state.description=payload;
    },
    validBank(state,payload){
      state.validationDataBanks=payload
    },
    validDate(state,payload){
      state.validationDataDate=payload
    }
  },
  
  getters: {
    getBanks:(state)=>{
        return state.bank;
    },
    getDate:(state)=>{
        return state.date;
    },
    getDescription:(state)=>{
        return state.description;
    },
    getValidBanks:(state)=>{
      return state.validationDataBanks;
    },
    getValidDate:(state)=>{
      return state.validationDataDate;
    }
  }

}
