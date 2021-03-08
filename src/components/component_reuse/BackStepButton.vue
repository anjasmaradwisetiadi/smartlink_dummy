<template>
  <section class="Back_Step_Button">
    <div class="w-screen title text-center pb-3 pt-2 border-b-2 border-t z-0 fixed bg-white">
      <div class=" flex font-bold">
        <div class="w-1/6">
          <span 
          v-show="titleFaktur === 'Detail Pembayaran'"
          class="material-icons text-2xl text-blue-600 cursor-pointer" 
          @click="prevSteps()">
            arrow_back
          </span>
        </div>
        <div class="w-full font-bold text-lg text-center mr-10">
          {{titleFaktur}}
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return{

      }
    },

    computed:{
      ...mapGetters(['logicStepper']),
      
      titleFaktur(){
        if (this.logicStepper === 'gaji-faktur') return 'Faktur Gaji';
        else return 'Detail Pembayaran'
      }

    },
    methods: {
      ...mapMutations(['prevStep']),
      prevSteps() {
        this.prevStep()
      }
    }
  }

</script>
