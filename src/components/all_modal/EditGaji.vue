<template>
  <div class="Edit_Gaji justify-center items-center text-center">

    <div v-if="getToggleModal" class="fixed flex justify-center items-center z-20  w-screen">
      <div class="flex flex-col mt-3 pb-6 border rounded-lg z-20 relative bg-white w-full mx-auto">
        <div class="flex mt-3 pb-3 border-b">
          <div class="w-full text-center font-bold text-lg ml-4">
            Ubah Gaji Pokok
          </div>
          <div class="text-right mr-6">
            <span class="material-icons text-blue-500 font-bold cursor-pointer"
              @click.prevent="closeModal(false)"> close </span>
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
                  class="flex items-center  bg-gray-200 rounded rounded-r-none border border-r-0 border-grey-light px-2 whitespace-no-wrap text-grey-dark text-sm">Rp</span>
              </div>
              <input type="number"
                class="flex-shrink flex-grow flex-auto  w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
                placeholder="1000" @change="changeNominal" :value="nominal" v-digitsOnly>
            </div>
            <div class="w-1/6 my-2 mx-1">
              X
            </div>
            <div class="w-2/6 flex flex-wrap items-stretch w-full mb-4 relative">
              <input type="number"
                class="flex-shrink flex-grow flex-auto w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
                placeholder="1" @change="changePeriode" :value="periode" v-digitsOnly>

              <div class="flex -mr-px">
                <span
                  class="flex items-center  bg-gray-200 rounded rounded-l-none border border-r-0 border-grey-light px-2 whitespace-no-wrap text-grey-dark text-sm">Periode</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex px-4 mt-4">
          <div class="w-1/2 text-left">
            Jumlah
          </div>
          <div class="w-1/2 text-right">
            Rp {{count}}
          </div>
        </div>

        <div class="mt-2 px-4 mt-4">
          <button class="button_background w-full py-2 text-center rounded text-white"
            @click.prevent="updateSalary()">
            Simpan</button>
        </div>
      </div>
    </div>

    <!-- shadow layer -->
    <div v-if="getToggleModal" class="height_window " :style="sizeShadow">

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
    data() {
      return {
        nominal: 0,
        periode: 0,
        counting: 0,
        saveData: false,
      }
    },


    props: {
      items: {
        type: Object
      },

      idTo: {
        type: Number
      },

    },

    computed: {
      ...mapGetters(['getToggleModal', 'getInnerHeight', 'getInnerWidth']),

      sizeShadow() {
        return {
          width: `${this.getInnerWidth}px`,
          height: `${this.getInnerHeight}px`,
        }
      },

      firstTimeNominal() {
        this.items.pengaturan_gaji.forEach(item => {
          if (item.id === this.idTo) {
            return this.nominal = item.nominal
          } else {
            return false
          }
        });

      },

      firstTimePeriode() {
        return this.periode = this.items.total_periode;
      },

      count: function () {
        return this.counting = this.periode * this.nominal
      }

    },

    mounted() {
      this.firstTimeNominal;
      this.firstTimePeriode;
    },

    methods: {
      ...mapMutations(['closeModals', 'totalSalary']),
      ...mapActions(['setUpdateSalarys']),

      closeModal(data) {
        this.closeModals(data)
      },

      changeNominal(e) {
        this.nominal = e.target.value;
      },

      changePeriode(val) {
        this.periode = val.target.value;
      },

      updateSalary() {
        this.closeModals(false);

        this.saveData = true;
        if (this.saveData) {

          this.items.pengaturan_gaji.forEach(item => {
            if (item.id === this.idTo) {
              return item.nominal = parseInt(this.nominal)
            } else {
              return false
            }
          });
          this.items.total_periode = parseInt(this.periode);

          this.totalSalary({
            nominal: this.nominal,
            periode: this.periode
          })
          // this.setUpdateSalarys(items);
        } else {
          this.items.pengaturan_gaji.forEach(item => {
            if (item.id === this.idTo) {
             return this.nominal = item.nominal
            }
            else{
              return false
            }
          });
          this.periode = this.items.total_periode;
        }

      }

    }
  }

</script>
<style scoped>
  .button_background {
    background-color: #206CFF;
    border: #206CFF 1px solid;
  }

  .height_window {
    z-index: 10;
    position: fixed;
    opacity: 50%;
    background-color: #374151;
  }

</style>
