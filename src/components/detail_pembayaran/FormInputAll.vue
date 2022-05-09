<template>
  <section class="Form_Input_All">
    <!-- form Pembayaran -->
    <div class="mt-8 px-4 flex flex-col">
      <div class="flex flex-col form-control">
        <div class="flex">
          <div class="text-sm text-gray-400 text-right">Bayar Dari Rekening</div>
          <span v-show="getValidBanks==='invalid'" class="text-blue-400 ml-1">&#42;</span>
        </div>
        <div class="flex rounded-md border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
          <div class="w-full">
            <form-bank
            :data="allBanks"
            v-model.trim="formData.client"
            @chosenBank="handleChosenBank"
            placeholder="Pilih Rekening Bank">
            </form-bank>
          </div>
        </div>
        <div v-if="getValidBanks==='invalid'" class="text-left">
          <span class="text-blue-400 mt-1 text-sm ">data wajib diisi</span>
        </div>

      </div>

      <form-tanggal></form-tanggal>

      <form-keterangan></form-keterangan>


    </div>
  </section>
</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  import FormBank from './FormBank.vue'
  import FormKeterangan from './FormKeterangan.vue'
  import FormTanggal from './FormTanggal.vue'

  export default {
    components: {
      FormBank,
      FormKeterangan,
      FormTanggal
    },
    data() {
      return {
        formData: {
          client: ''
        }
      }
    },
    computed: {
      ...mapGetters(['getAllBanks','getValidBanks']),

      allBanks() {
        return this.getAllBanks
      }

    },

    methods: {
      ...mapMutations(['dataBank']),

      handleChosenBank(data) {
        this.dataBank(data)
      }
    }

  }

</script>
<style lang="scss" scoped>

</style>
