
<template>
<!-- kehadiran -->
  <div class="order_by flex flex-col mt-3 pb-8">
    <div class="flex px-4 mt-4">
      <div class="w-1/2 text-left text-gray-400 text-sm font-semibold">
        Masuk {{items.total_kehadiran}} Hari
      </div>
      <div class="w-1/2 text-right text-blue-400 text-sm font-bold cursor-pointer">
        Ubah Kehadiran
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      props:{
          items:{
              type:Object
          }
      }

  }

</script>
<style lang="scss" scoped>

</style>
