<template>
  <section class="Detail_Pembayaran">
    <template>
      <section class="Detail Pembayaran overflow-y-scroll">
        <div class="flex flex-col">
          <div class="title text-center pb-3 pt-1 border-b-2 border-t mt-2">
            <div class=" flex font-bold">
              <div class="w-1/6">
                <span class="material-icons text-2xl text-blue-600 cursor-pointer"> arrow_back
                </span>
              </div>
              <div class="w-full font-bold text-lg text-center mr-10">
                Detail Pembayaran
              </div>
            </div>
          </div>

          <div class="flex flex-col ">
            <!-- form gaji bersih -->
            <div class="flex flex-col mt-3 pb-3 border-b border-dashed px-4">
              <div class="flex">
                <div class="w-1/2 text-sm font-semibold text-left">
                  Subtotal Gaji
                </div>
                <div class="w-1/2 text-base font-bold text-right">
                  Rp 2.524.000
                </div>
              </div>
              <div class="flex mt-3">
                <div class="w-1/2 text-sm font-semibold text-left">
                  Subtotal Upah
                </div>
                <div class="w-1/2 text-base font-bold text-right">
                  Rp 100.000
                </div>
              </div>
              <div class="flex mt-3">
                <div class="w-1/2 text-sm font-semibold text-left m0">
                  Subtotal Komisi
                </div>
                <div class="w-1/2 text-base font-bold text-right">
                  Rp 200.000
                </div>
              </div>

              <div class="flex mt-6">
                <div class="w-1/2 text-sm font-semibold text-left m-auto">
                  Gaji Kotor
                </div>
                <div class="w-1/2 text-base font-bold text-right text-green-500">
                  Rp 2.824.000
                </div>
              </div>
              <div class="flex mt-8">
                <div class="w-1/2 text-sm font-semibold text-left m-auto text-red-500">
                  Tanggungan
                </div>
                <div class="w-1/2 text-base font-bold text-right text-red-500">
                  Rp 2.824.000
                </div>
              </div>
            </div>
            <div class="flex mt-4 px-4 mb-4">
              <div class="w-1/2 text-base font-bold text-blue-400 text-left">
                Total Gaji Bersih
              </div>
              <div class="w-1/2 text-base font-bold text-blue-400 text-right">
                Rp 2.124.000
              </div>
            </div>
            <!-- sekat abu2 -->
            <div class="bg-gray-100 py-2 ">
            </div>
            <!-- form Pembayaran -->
            <div class="mt-8 px-4 flex flex-col">
              <div class="flex flex-col form-control">
                <div class="flex">
                  <div class="text-sm text-gray-400 text-right">Bayar Dari Rekening</div>
                  <span class="text-blue-400 ml-1">&#42;</span>
                </div>
                <div class="flex rounded-md border cursor-pointer">
                  <div class="w-5/6">
                    <input type="text" placeholder="Pilih Rekening Bank"
                      class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400">
                  </div>
                  <div class="w-1/6 m-auto">
                    <span class="material-icons text-gray-400">
                      expand_more
                    </span>
                  </div>
                </div>

              </div>

              <div class="flex flex-col form-control mt-4">
                <div class="flex">
                  <div class="text-sm text-gray-400 text-right">Dicatat Pada Tanggal</div>
                  <span class="text-blue-400 ml-1">&#42;</span>
                </div>
                <div class="flex rounded-md border cursor-pointer">
                  <div class="w-5/6">
                    <input type="text" placeholder="Pilih Tanggal"
                      class="w-full px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  </div>
                  <div class="w-1/6 m-auto">
                    <span class="material-icons text-gray-400"> calendar_today </span>
                  </div>
                </div>

                <!-- perbaikan code input -->

                <!-- <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-user"></i>
                </span>
            </div> -->
              </div>

              <div class="flex flex-col form-control mt-4">
                <div class="flex">
                  <div class="text-sm text-gray-400 text-right">Keterangan</div>
                </div>
                <div class="flex rounded-md border cursor-pointer mt-1">
                  <div class="w-full">
                    <input type="text" placeholder="Pilih Tanggal"
                      class="w-full px-2 py-3  focus:outline-none focus:ring-2 focus:ring-blue-400">
                  </div>
                </div>
              </div>

              <div class="mt-20 mb-3">
                <button class=" w-full py-3 bg_tombol text-white rounded-md ">Submit Gaji</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </template>

    <style lang="scss" scoped>
      .bg_tombol {
        background-color: #206CFF;
      }

    </style>

    <script>
      export default {

      }

    </script>

  </section>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>

</style>
