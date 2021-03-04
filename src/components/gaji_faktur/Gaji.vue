<template>
        <!-- Gaji -->
  <section class="Gaji">
    <!-- modal EditGaji-->

    <div v-for="item in items.pengaturan_gaji" :key="item.id">
      <div class="detail_salary flex flex-col mt-3 pb-3 ">
        <div class="flex flex-col text-left px-4 ">
          <div class="text-base font-bold mb-4">
            Gaji
          </div>
          <div class="flex">
            <div class="w-1/2 flex flex-col text-left">
              <div class="text-sm font-semibold"> {{item.nama}} </div>
              <div class="text-sm font-normal text-gray-400">{{item.nominal}} x 1 periode</div>
            </div>
            <div class="w-1/2 flex m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2 ">
                {{getTotalSalary}}
              </div>
              <span @click.prevent="modalEditGaji()"
                class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                mode_edit </span>
            </div>
          </div>

          <div class="flex mt-2">
            <div class="w-1/2 flex flex-col">
              <div class="text-sm font-semibold"> Uang Makan</div>
              <div class="text-sm font-normal text-gray-400">10.000 x 22 kehadiran</div>
            </div>
            <div class="w-1/2 flex m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2 ">
                220.000
              </div>
              <span class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                mode_edit </span>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-1/2 flex flex-col">
              <div class="text-sm font-semibold"> Uang Absen</div>
              <div class="text-sm font-normal text-gray-400">12.000 x 22 kehadiran</div>
            </div>
            <div class="w-1/2 flex m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2 ">
                264.000
              </div>
              <span class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                mode_edit </span>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-1/2 flex flex-col">
              <div class="text-sm font-semibold"> Uang Transport</div>
              <div class="text-sm font-normal text-gray-400">15.000 x 22 kehadiran</div>
            </div>
            <div class="w-1/2 flex m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2 ">
                330.000
              </div>
              <span class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                mode_edit </span>
            </div>
          </div>
          <div class="flex mt-2 pb-4 border-b border-dashed">
            <div class="w-1/2 flex flex-col">
              <div class="text-sm font-semibold"> Uang Snack</div>
              <div class="text-sm font-normal text-gray-400">5.000 x 22 kehadiran</div>
            </div>
            <div class="w-1/2 flex m-auto text-right">
              <div class="w-full text-sm font-semibold mr-2 ">
                110.000
              </div>
              <span class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                mode_edit </span>
            </div>
          </div>

          <div class="flex mt-4">
            <div class="w-1/2 text-lg font-semibold">
              Subtotal Gaji
            </div>
            <div class="w-1/2 font-semibold text-right">
              Rp 2.524.000
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>

</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex';

  import EditGaji from '../all_modal/EditGaji'

  export default {
    components: {
      EditGaji,
    },

    props: {
      items: {
        type: Object
      }
    },

    data() {
      return {
        toggleModal: false,
      }
    },

    mounted(){
        this.totalSalary({
            nominal:this.items.pengaturan_gaji[0].nominal,
            periode:this.items.total_periode
        })
    },
    computed:{
        ...mapGetters(['getTotalSalary'])
    },

    methods: {
      ...mapMutations(['modalEditSalarys','totalSalary']),

      modalEditGaji() {
        this.$emit('modalEditGaji', true);
        let data = {
          toggleModal: true,
        }
        this.modalEditSalarys(data)
      },

    }
  }

</script>
<style lang="scss" scoped>

</style>
