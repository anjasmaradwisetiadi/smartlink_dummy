<template>
  <div class="Ubah_Kehadiran">
    <div class="flex flex-col mt-3 pb-6 border rounded-lg">
      <div class="flex mt-3 pb-3 border-b">
        <div class="w-full text-center font-bold text-lg ml-4">
          Ubah Kehadiran
        </div>
        <div class="text-right mr-6">
          <span class="material-icons text-blue-500 font-bold cursor-pointer"> close </span>
        </div>
      </div>
      <div class="flex flex-col mt-4 px-4">
        <div class="text-sm text-light text-gray-400 font-light text-left mb-1">
          Durasi Keterlambatan
        </div>
        <div class="flex flex-wrap items-stretch w-full mb-4 relative">
          <div class="flex -mr-px">
            <span
              class="flex material-icons items-center rounded rounded-r-none border border-r-0 border-grey-light px-4 whitespace-no-wrap text-grey-dark text-lg text-red-400 cursor-pointer">add</span>
          </div>
          <input type="text"
            class="flex-shrink flex-grow flex-auto  w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
            placeholder="1000">
          <span
            class="flex material-icons items-center rounded rounded-r-none border border-l-0 border-grey-light px-4 whitespace-no-wrap text-grey-dark text-lg text-blue-400 cursor-pointer">horizontal_rule</span>
        </div>
      </div>
      <div class="flex mt-4 px-4">
        <div class="w-1/2 mr-2">
          <button class="text-red-400 w-full text-center py-2 rounded border border-red-400"> Hapus
          </button>
        </div>
        <div class="w-1/2 ml-2">
          <button class="button_background w-full py-2 text-center rounded text-white">
            Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>
  .button_background {
    background-color: #206CFF;
    border: #206CFF 1px solid;
  }

</style>
