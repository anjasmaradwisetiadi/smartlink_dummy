<template>
  <div class="form_keterangan">
    <div class="flex flex-col form-control mt-4">
      <div class="flex">
        <div class="text-sm text-gray-400 text-right">Keterangan</div>
      </div>
      <div class="flex rounded-md border cursor-pointer mt-1">
        <div class="w-full">
          <input type="text" placeholder="Pilih Tanggal"
            class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400"
            @change="changeDescription"
            >
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { mapMutations } from 'vuex'

  export default {
      data(){
          return{

          }
      },

      methods:{
          ...mapMutations(['dataDescription']),

          changeDescription(e){
              this.dataDescription(e.target.value);
          }
      }
  }

</script>
<style lang="scss" scoped>

</style>
