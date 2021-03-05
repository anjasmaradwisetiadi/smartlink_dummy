<template>
  <!-- Gaji -->
  <section class="Gaji">
    <!-- modal EditGaji-->

    <div>
      <div class="detail_salary flex flex-col mt-3 pb-3 ">
        <div class="flex flex-col text-left px-4 ">
          <div class="text-base font-bold mb-4">
            Gaji
          </div>
          <div v-for="(item,index) in items.pengaturan_gaji" :key="index">
            <div
            v-if="index===0"
             class="flex mt-2">
              <div class="w-1/2 flex flex-col text-left">
                <div class="text-sm font-semibold"> {{item.nama}} </div>
                <div class="text-sm font-normal text-gray-400">{{item.nominal}} x
                  {{items.total_periode}} periode</div>
              </div>
              <div class="w-1/2 flex m-auto text-right">
                <div class="w-full text-sm font-semibold mr-2 ">
                  {{item.nominal*items.total_periode}}
                </div>
                <span @click.prevent="modalEditGaji()"
                  class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                  mode_edit </span>
              </div>
            </div>

            <div
            v-if="index>0"
             class="flex mt-2">
              <div class="w-1/2 flex flex-col text-left">
                <div class="text-sm font-semibold"> {{item.nama}} </div>
                <div class="text-sm font-normal text-gray-400">{{item.nominal}} x
                  {{items.total_kehadiran}} periode</div>
              </div>
              <div class="w-1/2 flex m-auto text-right">
                <div class="w-full text-sm font-semibold mr-2 ">
                  {{item.nominal*items.total_kehadiran}}
                </div>
                <span @click.prevent="modalEditAbsen()"
                  class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                  mode_edit </span>
              </div>
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

    mounted() {
      this.totalSalary({
        nominal: this.items.pengaturan_gaji[0].nominal,
        periode: this.items.total_periode
      })
    },
    computed: {
      ...mapGetters(['getTotalSalary'])
    },

    methods: {
      ...mapMutations(['modalEditSalarys', 'totalSalary']),

      modalEditGaji() {
        this.$emit('modalEditGaji', {data:true,variabel:'EditGaji'});
        this.modalEditSalarys(true)
      },

      modalEditAbsen(){
        this.$emit('modalEditGaji', {data:true,variabel:'EditAbsen'});
        this.modalEditSalarys(true);
      }
    }
  }

</script>
<style lang="scss" scoped>

</style>
