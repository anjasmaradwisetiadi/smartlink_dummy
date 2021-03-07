<template>
  <div class="Total_Gaji_Kotor">
    <div class="flex text-lg text-green-500 mt-3 px-4 mb-3">
      <div class="w-1/2 font-bold text-left">
        Total Gaji Kotor
      </div>
      <div class="w-1/2 font-bold text-right">
        Rp {{getTotalSalaryBruto}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

  export default {

      computed:{
          ...mapGetters(['getTotalSalaryBruto']),
          
      }

      
  }

</script>
<style lang="scss" scoped>

</style>
