<template>
<!-- profile -->
  <!-- no resi  -->
  <div class="profile_resi flex flex-col text-left border-b border-dashed px-4 pb-3">
    <div class="font-bold text-lg">
      Bu Adara Olivia
    </div>
    <p class="text-sm text-gray-500 ">
      Periode : {{items.tanggal_awal}} - {{items.tanggal_akhir}} 
    </p>

  </div>
</template>
<script>
  export default {
      props:{
          items:{
              type:Object
          }
      },

      computed:{
        itemsTanggalAwal(){
          return this.items.tanggal_awal
        }
      }
      

  }

</script>
<style lang="scss" scoped>

</style>
