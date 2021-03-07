<template>
  <section class="Form_Input_All">
    <!-- form Pembayaran -->
    <div class="mt-8 px-4 flex flex-col">
      <div class="flex flex-col form-control">
        <div class="flex">
          <div class="text-sm text-gray-400 text-right">Bayar Dari Rekening</div>
          <span class="text-blue-400 ml-1">&#42;</span>
        </div>
        <div class="flex rounded-md border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
          <div class="w-full">
            <!-- <input type="text" placeholder="Pilih Rekening Bank"
              class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400"> -->
            <form-bank :data="allBanks" v-model.trim="formData.client" @chosen="handleChosen"
              placeholder="Search for state..."></form-bank>
          </div>
        </div>

      </div>

      <form-tanggal></form-tanggal>

      <form-keterangan></form-keterangan>


    </div>
  </section>
</template>
<script>
  import {
    mapActions,
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
      ...mapGetters(['getAllBanks']),

      allBanks() {
        return this.getAllBanks
      }

    },

    methods: {
      handleChosen(data) {
        console.log(data)
      }
    }

  }

</script>
<style lang="scss" scoped>

</style>
