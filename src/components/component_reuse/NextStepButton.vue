<template>
  <section class="Next_Step_Button">
    <div class="button_berikutnya">
      <div class="mt-2 px-4 mt-4 my-4">
        <button
          v-if="nextFaktur === 'Simpan' " 
          class="button_background w-full py-2 text-center rounded text-white"
          @click="nextSteps()">
          {{nextFaktur}}
        </button>

      </div>
    </div>
  </section>
</template>1
<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {

    data() {
      return {

      }
    },

    computed:{
        ...mapGetters(['logicStepper']),

        nextFaktur(){
        if (this.logicStepper === 'gaji-faktur') return 'Simpan';
        else return 'Submit Gaji'
        }
    },

    methods: {
      
      ...mapMutations(['nextStep','setNavigationGuard']),
      nextSteps() {
        this.setNavigationGuard(true);
        this.nextStep()
      },
    }
  }

</script>
<style lang="scss" scoped>
  .button_background {
    background-color: #206CFF;
    border: #206CFF 1px solid;
  }

</style>
