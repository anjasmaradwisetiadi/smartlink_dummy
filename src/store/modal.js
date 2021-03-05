export const modalStateManagement ={
    state:{
        toggleModal: false,
    },
    mutations: {
        modalEdit(state,payload){
            state.toggleModal=payload;
        },

        closeModals(state,payload){
            state.toggleModal=payload;
        }
    },
    actions: {

    },
    getters:{
        getToggleModal:(state)=>{
            return state.toggleModal;
        }
    }
}