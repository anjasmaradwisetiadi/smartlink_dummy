<template>
  <section class="Tanggungan">
    <div class="Tanggungan mt-3 pb-3">
      <div class="flex flex-col px-4 ">
        <div class="flex flex-col border-b border-dashed pb-3">
          <div class="font-bold text-lg text-left">
            Tanggungan
          </div>
          <div class="text-sm text-gray-400 text-left">
            Karyawan ini memiliki tanggungan Rp 570.000
          </div>
        </div>

        <div class="flex flex-col mt-3">
          <div class="flex">
            <div class="w-1/2 flex flex-col text-left">
              <div class="text-sm font-semibold">
                Ganti Barang Hilang
              </div>
              <div class="text-sm text-gray-400">
                Baju yang hilang warna merah
              </div>
            </div>
            <div class="w-1/2 flex text-red-400 m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2">
                50.000
              </div>
              <span class="material-icons text-base font-bold -mt-1 cursor-pointer">
                mode_edit
              </span>
            </div>
          </div>

          <div class="flex mt-3 pb-14 border-b border-dashed">
            <div class="w-1/2 flex flex-col font-sm text-left">
              <div class="text-sm font-semibold">
                Denda Keterlambatan
              </div>
              <div class="text-sm text-gray-400">
                karena terlambat 3 hari berturut - turut
              </div>
            </div>
            <div class="w-1/2 flex text-red-400 m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2">
                20.000
              </div>
              <span class="material-icons text-base font-bold -mt-1 cursor-pointer">
                mode_edit
              </span>
            </div>
          </div>

          <div class="flex mt-3">
            <div class="w-2/3 text-lg font-semibold text-left">
              Tanggungan Dibayar
            </div>
            <div class="w-1/3 text-lg font-semibold text-red-400 text-right m-auto">
              (-) Rp 70.000
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>

</style>
