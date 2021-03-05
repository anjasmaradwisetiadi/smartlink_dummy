<template>
  <div class="Edit_Absen justify-center items-center text-center">
    <div v-if="toggleModal" class="fixed flex justify-center items-center z-20  w-screen">
      <div
        class="flex flex-col mt-3 pb-6 border rounded-lg  border rounded-lg z-20 relative bg-white w-full mx-auto">
        <div class="flex mt-3 pb-3 border-b">
          <div class="w-full text-center font-bold text-lg ml-4">
            Ubah Uang Absen/Transport/Lembur
          </div>
          <div class="text-right mr-6">
            <span class="material-icons text-blue-500 font-bold cursor-pointer"
              @click.prevent="closeModal(!toggleModal)"> close </span>
          </div>
        </div>
        <div class="flex flex-col px-4 mt-4 ">
          <div class="text-sm text-light text-gray-400 font-light text-left mb-1">
            Nominal
          </div>
          <div class="flex pb-3 border-b border-dashed">
            <div class="w-3/6 flex flex-wrap items-stretch w-full mb-4 relative">
              <div class="flex -mr-px">
                <span
                  class="flex items-center  bg-gray-200 rounded rounded-r-none border border-r-0 border-grey-light px-4 whitespace-no-wrap text-grey-dark text-sm font-bold">Rp</span>
              </div>
              <input type="text"
                class="flex-shrink flex-grow flex-auto  w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
                placeholder="1000">
            </div>
            <div class="w-1/6 my-2 mx-1">
              X
            </div>
            <div class="items-stretch w-full mb-4 relative text-right m-2 font-bold">
              22 Hari
            </div>
          </div>
        </div>

        <div class="flex px-4 mt-4">
          <div class="w-1/2 text-left">
            Jumlah
          </div>
          <div class="w-1/2 text-right">
            Rp 220.000
          </div>
        </div>

        <div class="mt-2 px-4 mt-4">
          <button class="button_background w-full py-2 text-center rounded text-white">
            Simpan</button>
        </div>
      </div>
    </div>


    <div v-if="toggleModal" class="height_window " :style="sizeShadow">

    </div>
  </div>

</template>

<script>
  import {
    mapActions,
    mapMutations,
    mapGetters
  } from 'vuex';

  export default {

    props: {
      items: {
        type: Object
      },

      toggleModal: {
        type: Boolean,
        default: true
      },

      innerWidth: {
        type: Number,
        default: 0,
      },

      innerHeight: {
        type: Number,
        default: 0,
      }
    },

    computed: {


      sizeShadow() {
        return {
          width: `${this.innerWidth}px`,
          height: `${this.innerHeight}px`,
        }
      },

    },

    methods: {
      ...mapMutations(['closeModals']),

      closeModal(toggleModal) {
        this.closeModals(toggleModal)
      },
    }
  }

</script>
<style scoped>
  .button_background {
    background-color: #206CFF;
  }

  .height_window {
    z-index: 10;
    position: fixed;
    opacity: 50%;
    background-color: #374151;
  }

</style>
