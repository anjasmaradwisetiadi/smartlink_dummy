<template>
  <div class="form_keterangan">
    <div class="flex flex-col form-control mt-4">
      <div class="flex">
        <div class="text-sm text-gray-400 text-right">Keterangan</div>
      </div>
      <div class="flex rounded-md border cursor-pointer mt-1">
        <div class="w-full">
          <input type="text" placeholder="isi keterangan"
            class="w-full px-2 py-3 rounded-md focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-200"
            :value="description"
            @change="changeDescription"
            >
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

  export default {
      data(){
          return{
            description:''
          }
      },

      computed:{
        ...mapGetters(['getDescription']),

        firstTimeDescription(){
          return this.description=this.getDescription
        }
      },

      mounted(){
        this.firstTimeDescription
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
