<template>
  <div class="Form_Tanggal">
    <div class="flex flex-col form-control mt-4">
      <div class="flex">
        <div class="text-sm text-gray-400 text-right">Dicatat Pada Tanggal</div>
        <span class="text-blue-400 ml-1">&#42;</span>
      </div>
      <div class="flex rounded-md border cursor-pointer">
        <div class="w-5/6">
          <input type="text" placeholder="Pilih Tanggal" class="w-full px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          @change="changeDate"
          >
        </div>
        <div class="w-1/6 m-auto">
          <span class="material-icons text-gray-400"> calendar_today </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import { mapMutations } from 'vuex'
  export default {
     methods:{
        ...mapMutations(['dataDate']),

        changeDate(e){
            this.dataDate(e.target.value)
        }
     } 
  }

</script>
<style lang="scss" scoped>

</style>
