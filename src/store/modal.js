export const modalStateManagement ={
    state:{
        toggleModal: false,
    },
    mutations: {
        modalEditSalarys(state,payload){
            state.toggleModal=payload.toggleModal;
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