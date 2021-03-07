<template>
  <section class="Form_Input_All">
    <!-- form Pembayaran -->
    <div class="mt-8 px-4 flex flex-col">
      <div class="flex flex-col form-control">
        <div class="flex">
          <div class="text-sm text-gray-400 text-right">Bayar Dari Rekening</div>
          <span class="text-blue-400 ml-1">&#42;</span>
        </div>
        <div class="flex rounded-md border cursor-pointer">
          <div class="w-full">
            <!-- <input type="text" placeholder="Pilih Rekening Bank"
              class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400"> -->
            <form-bank
            :data="allBanks"
            v-model.trim="formData.client"
            @chosen="handleChosen"
            placeholder="Search for state..."
            ></form-bank>
          </div>
        </div>

      </div>

      <div class="flex flex-col form-control mt-4">
        <div class="flex">
          <div class="text-sm text-gray-400 text-right">Dicatat Pada Tanggal</div>
          <span class="text-blue-400 ml-1">&#42;</span>
        </div>
        <div class="flex rounded-md border cursor-pointer">
          <div class="w-5/6">
            <input type="text" placeholder="Pilih Tanggal"
              class="w-full px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
          </div>
          <div class="w-1/6 m-auto">
            <span class="material-icons text-gray-400"> calendar_today </span>
          </div>
        </div>

        <!-- perbaikan code input -->

        <!-- <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-user"></i>
                </span>
            </div> -->
      </div>

      <div class="flex flex-col form-control mt-4">
        <div class="flex">
          <div class="text-sm text-gray-400 text-right">Keterangan</div>
        </div>
        <div class="flex rounded-md border cursor-pointer mt-1">
          <div class="w-full">
            <input type="text" placeholder="Pilih Tanggal"
              class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400">
          </div>
        </div>
      </div>


    </div>
  </section>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import FormBank from './FormBank.vue'
  
  export default {
  components: { FormBank },
      data(){
          return{
              formData:{
                  client:''
              }
          }
      },
      computed:{
          ...mapGetters(['getAllBanks']),

          allBanks(){
              return this.getAllBanks
          }

      },

      methods:{
          handleChosen(data){
              console.log(data)
          }
      }

  }

</script>
<style lang="scss" scoped>

</style>
