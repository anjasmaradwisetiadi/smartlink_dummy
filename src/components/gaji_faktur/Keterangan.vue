<template>
  <!-- keterangan -->
  <div class="mt-3 pb-3">
    <div class="flex flex-col px-4">
      <div class="flex flex-col pb-8 text-left">
        <div class="text-sm text-gray-400">Keterangan</div>
        <div class="text-base font-bold mt-1"> {{getDescription}}</div>
      </div>
      <button
        class="background_button w-full py-4 text-white text-lg text-center rounded-md">Cetak</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
      computed:{
          ...mapGetters(['getDescription'])
      }
  }

</script>
<style lang="scss" scoped>
    .background_button{
        background-color: #00B6AB;
    }
</style>
