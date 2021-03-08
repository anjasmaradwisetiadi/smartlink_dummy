<template>
  <section class="Detail_Gaji_Di_Dapat pt-4">
    <div class="flex flex-col mt-3 pb-3 border-b border-dashed px-4">
      <div class="flex">
        <div class="w-1/2 text-sm font-semibold text-left">
          Subtotal Gaji
        </div>
        <div class="w-1/2 text-base font-bold text-right">
          Rp {{subTotalSalary}}
        </div>
      </div>
      <div class="flex mt-3">
        <div class="w-1/2 text-sm font-semibold text-left">
          Subtotal Upah
        </div>
        <div class="w-1/2 text-base font-bold text-right">
          Rp {{subTotalWages}}
        </div>
      </div>
      <div class="flex mt-3">
        <div class="w-1/2 text-sm font-semibold text-left m0">
          Subtotal Komisi
        </div>
        <div class="w-1/2 text-base font-bold text-right">
          Rp {{subTotalKomisi}}
        </div>
      </div>

      <div class="flex mt-6">
        <div class="w-1/2 text-sm font-semibold text-left m-auto">
          Gaji Kotor
        </div>
        <div class="w-1/2 text-base font-bold text-right text-green-500">
          Rp {{totalSalaryBruto}}
        </div>
      </div>
      <div class="flex mt-8">
        <div class="w-1/2 text-sm font-semibold text-left m-auto text-red-500">
          Tanggungan
        </div>
        <div class="w-1/2 text-base font-bold text-right text-red-500">
          Rp {{subTotalDemand}}
        </div>
      </div>
    </div>
    <div class="flex mt-4 px-4 mb-4">
      <div class="w-1/2 text-base font-bold text-blue-400 text-left">
        Total Gaji Bersih
      </div>
      <div class="w-1/2 text-base font-bold text-blue-400 text-right">
        Rp {{totalSalaryNet}}
      </div>
    </div>
  </section>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        subTotalSalary: 'getSubTotalSalary',
        subTotalWages: 'getSubTotalWages',
        subTotalKomisi: 'getSubTotalKomisi',
        subTotalDemand: 'getSubTotalDemand',
        totalSalaryBruto: 'getTotalSalaryBruto',
        totalSalaryNet: 'getTotalSalaryNet'
      })
    }
  }

</script>
<style lang="scss" scoped>

</style>
