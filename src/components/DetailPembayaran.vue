<template>
      <section class="Detail Pembayaran overflow-y-scroll">
        <div class="flex flex-col">
          <div v-if="getLoading"
            class="loading text-center mx-auto relative text-red-500 text-lg font-bold">
            Still Loading....
          </div>

          <div 
            v-if="!getLoading"
          class="flex flex-col ">
            <!-- form gaji bersih -->
            <detail-gaji-di-dapat></detail-gaji-di-dapat>
            <!-- sekat abu2 -->
            <div class="bg-gray-100 py-2 ">
            </div>
            <!-- form Pembayaran -->
            <form-input-all></form-input-all>

            <div class="mt-6 mb-3 px-4">
              <router-link tag="button" to="/detail-faktur" class=" w-full py-3 bg_tombol text-white rounded-md ">Submit Gaji</router-link>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
  import DetailGajiDiDapat from './detail_pembayaran/DetailGajiDiDapat.vue'
  import FormInputAll from './detail_pembayaran/FormInputAll.vue'

  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    components: {
      DetailGajiDiDapat,
      FormInputAll
    },
    
    computed:{
        ...mapGetters(['getLoading'])
    },

    mounted() {
      this.$store.dispatch('setBanks')
    },

    methods: {

    }

  }

</script>
<style lang="scss" scoped>
  .bg_tombol {
    background-color: #206CFF;
  }

</style>
