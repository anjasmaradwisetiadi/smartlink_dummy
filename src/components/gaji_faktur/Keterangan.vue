<template>
  <!-- keterangan -->
  <div class="mt-3 pb-3">
    <div class="flex flex-col px-4">
      <div class="flex flex-col pb-8 text-left">
        <div class="text-sm text-gray-400">Keterangan</div>
        <div class="text-base font-bold mt-1"> {{getDescription}}</div>
      </div>
      <button
        class=" w-full py-4 bg-green-500 text-white text-lg text-center rounded-md">Cetak</button>
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

</style>
