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
                    <span @click.prevent="modalEditGaji(itemSalary.id)"
                      class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer">
                      mode_edit </span>
                  </div>
                </div>

                <div v-if="index === 'kehadiran'" class="flex mt-2 pb-3">
                  <div class="w-1/2 flex flex-col text-left">
                    <div class="text-sm font-semibold"> {{itemSalary.nama}} </div>
                    <div class="text-sm font-normal text-gray-400">
                      {{itemSalary.nominal | formatPrice}} x
                      {{items.total_kehadiran}} kehadiran</div>
                  </div>
                  <div class="w-1/2 flex m-auto text-right">
                    <div class="w-full text-sm font-semibold mr-2 ">
                      {{itemSalary.nominal*items.total_kehadiran | formatPrice}}
                    </div>
                    <span @click.prevent="modalEditAbsen(itemSalary.id)"
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
            Rp {{allSalary | formatPrice}}
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
      this.allSalary;
    },

    computed: {
      ...mapGetters(['getTotalSalary', 'getSalaryTypeData', 'getLoading']),

      allSalary() {
        if (this.getSalaryTypeData.periode && this.getSalaryTypeData.kehadiran) {
          
          let dataLengthPeriode = (this.getSalaryTypeData.periode).length;
          let dataLengthPresence = (this.getSalaryTypeData.kehadiran).length;

          let valuePresence = 0;
          let valuePeriode = 0;
          let valueAllSalary = 0;

          // count periode
          for (let i = 0; i < dataLengthPeriode; i++) {
            valuePeriode += (this.getSalaryTypeData.periode[i].nominal * this.items.total_periode);
          };
          // count Kehadiran
          for (let i = 0; i < dataLengthPresence; i++) {
            valuePresence += (this.getSalaryTypeData.kehadiran[i].nominal * this.items
              .total_kehadiran);
          };

          valueAllSalary = (valuePresence + valuePeriode);
          this.$emit("salaryGaji", {
            name: "sub_total_gaji",
            nominal: valueAllSalary
          });
          return valueAllSalary;
        } else {
          return false
        }
      }
    },

    methods: {
      ...mapMutations(['modalEdit', 'totalSalary']),

      modalEditGaji(dataId) {
        this.$emit('modalEditGaji', {
          variabel: 'EditGaji',
          id: dataId
        });
        this.modalEdit(true)
      },

      modalEditAbsen(dataId) {
        this.$emit('modalEditGaji', {
          variabel: 'EditAbsen',
          id: dataId
        });
        this.modalEdit(true);
      },
    }
  }

</script>
<style lang="scss" scoped>

</style>
