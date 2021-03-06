export const modalStateManagement ={
    state:{
        toggleModal: false,
        innerWidth:0,
        innerHeight:0,
    },
    mutations: {
        modalEdit(state,payload){
            state.toggleModal=payload;
        },

        closeModals(state,payload){
            state.toggleModal=payload;
        },

        innerWidthHeight(state, payload){
            state.innerHeight=payload.innerHeight;
            state.innerWidth=payload.innerWidth;
        }
    },
    actions: {

    },
    getters:{
        getToggleModal:(state)=>{
            return state.toggleModal;
        },
        getInnerWidth:(state)=>{
            return state.innerWidth;
        },
        getInnerHeight:(state)=>{
            return state.innerHeight;
        }
    },
}