export const modalStateManagement ={
    state:{
        toggleModal: false,
    },
    mutations: {
        modalEditSalarys(state,payload){
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