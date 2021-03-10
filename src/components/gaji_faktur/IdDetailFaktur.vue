<template>
  <div class="Id_Detail_Faktur pt-16">
    <div class="flex flex-col text-left border-b border-dashed pb-3 px-4">
      <div class="font-bold text-lg">
        GJI200121280129001
      </div>
      <div class="text-sm text-gray-500">
        Dicatat : {{getDate}}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters(['getDate'])
    }
  }

</script>
<style lang="scss" scoped>

</style>
