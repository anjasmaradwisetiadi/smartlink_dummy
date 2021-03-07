export const stepper={
    state:{
        stepByStep:1,
        maxStep:2,
        selectedStepper:'gaji-faktur'
    },

    mutations:{
        nextStep(state){
            state.stepByStep++
        },
        prevStep(state){
            state.stepByStep--
        }
    },
    actions:{


    },
    getters:{
        logicStepper(state){
            if (state.stepByStep === 1) return state.selectedStepper = 'gaji-faktur';
            else return state.selectedStepper = 'detail-pembayaran';
        }
    }
}