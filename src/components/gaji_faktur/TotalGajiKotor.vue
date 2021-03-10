<template>
  <div class="Total_Gaji_Kotor">
    <div 
    class="flex text-green-500 mt-3 px-4 mb-3"
    :class="!getModeEdit?'border-t pt-3':''"
    >
      <div class="w-1/2 font-bold text-left">
        Total Gaji Kotor
      </div>
      <div class="w-1/2 font-bold text-right">
        Rp {{getTotalSalaryBruto | formatPrice}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

  export default {

      computed:{
          ...mapGetters(['getTotalSalaryBruto','getModeEdit']),
          
      }

      
  }

</script>
<style lang="scss" scoped>

</style>
