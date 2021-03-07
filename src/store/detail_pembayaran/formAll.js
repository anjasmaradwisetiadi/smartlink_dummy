export const formAllDetailPembayaran = {
  state: {
    bank:{},  
    date:'',
    description:''
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
    }
  },
  actions: {


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
    }
  }

}
