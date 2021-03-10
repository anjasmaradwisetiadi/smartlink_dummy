<template>
  <!-- Gaji -->
  <section class="Gaji">
    <!-- modal EditGaji-->
    <div class="detail_salary flex flex-col mt-3 pb-3 ">
      <div class="flex flex-col text-left">
        <div class="text-base font-bold mb-4 px-4">
          Gaji
        </div>
        <div class="relative px-4">
          <div class="border-b border-dashed">
            <div v-for="(itemSalarys,index) in getSalaryTypeData" :key="index">
              <div v-for="(itemSalary,indexing) in itemSalarys" :key="indexing">
                <div v-if="index==='periode'" class="flex mt-2">
                  <div class="w-1/2 flex flex-col text-left">
                    <div class="text-sm font-semibold"> {{itemSalary.nama}} </div>
                    <div class="text-sm font-normal text-gray-400">
                      {{itemSalary.nominal | formatPrice}} x
                      {{items.total_periode}} periode</div>
                  </div>
                  <div class="w-1/2 flex m-auto text-right">
                    <div class="w-full text-sm font-semibold mr-2">
                      {{itemSalary.nominal*items.total_periode | formatPrice}}
                    </div>
                    <span @click.prevent="modalEditGaji(index)"
                      class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                      mode_edit </span>
                  </div>
                </div>

                <div v-if="index === 'kehadiran'" class="flex mt-2 pb-3">
                  <div class="w-1/2 flex flex-col text-left">
                    <div class="text-sm font-semibold"> {{itemSalary.nama}} </div>
                    <div class="text-sm font-normal text-gray-400">{{itemSalary.nominal | formatPrice}} x
                      {{items.total_kehadiran}} kehadiran</div>
                  </div>
                  <div class="w-1/2 flex m-auto text-right">
                    <div class="w-full text-sm font-semibold mr-2 ">
                      {{itemSalary.nominal*items.total_kehadiran | formatPrice}}
                    </div>
                    <span @click.prevent="modalEditAbsen(index)"
                      class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                      mode_edit </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="flex mt-3 px-4 ">
          <div class="w-1/2 font-semibold">
            Subtotal Gaji
          </div>
          <div class="w-1/2 font-semibold text-right">
            Rp 2.524.000
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
        counting: 0
      }
    },

    mounted() {
      this.$store.dispatch("setSalary");
    },

    computed: {
      ...mapGetters(['getTotalSalary', 'getSalaryTypeData']),

    },

    methods: {
      ...mapMutations(['modalEdit', 'totalSalary']),

      modalEditGaji(index) {
        this.$emit('modalEditGaji', {
          variabel: 'EditGaji',
          index: index
        });
        this.modalEdit(true)
      },

      modalEditAbsen(index) {
        this.$emit('modalEditGaji', {
          variabel: 'EditAbsen',
          index: index
        });
        this.modalEdit(true);
      },
    }
  }

</script>
<style lang="scss" scoped>

</style>
