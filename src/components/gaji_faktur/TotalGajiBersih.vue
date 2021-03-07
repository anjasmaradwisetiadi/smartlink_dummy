<template>
  <div class="Total_Gaji_Bersih">
    <div class="flex flex-col mt-3 pb-3">
      <div class="flex flex-col px-4">
        <div class="flex">
          <div class="w-2/3 flex text-left">
            <div class="font-bold text-base text-blue-500">
              Total Gaji Bersih
            </div>
            <span class="material-icons text-lg text-green-300 ml-1"> check_circle </span>
          </div>

          <div class="w-1/3 ">
            <div class=" text-base font-bold text-blue-500 text-right">
              Rp {{getTotalSalaryNet}}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-400 text-left mt-1">
          Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi pembayaran
          tanggungan
          (jika ada).
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import { mapGetters } from 'vuex';

export default {

      computed:{
          ...mapGetters(['getTotalSalaryNet'])
      }
  }

</script>
