<template>
  <section class="Upah_Borongan">
    <!-- Upah Borongan -->
    <div class="Upah Borongan flex flex-col mt-3 pb-3">
      <div class="flex flex-col text-left ">
        <div class="pb-3 border-b ">
          <div class=" text-base font-bold px-4">
            Upah Borongan
          </div>
        </div>
        <div class="mt-3 px-4">
          <div class="flex flex-col border-b border-dashed pb-3">
            <div v-for="(item,index) in getSalaryArrangment" :key="index">
              <div class="flex">
                <div class="w-1/2 flex flex-col text-left">
                  <div class="text-sm font-semibold">
                    {{item[0].nama}}
                  </div>
                  <div class="text-sm text-gray-400">
                    {{getSalaryWorked[index][0].nominal}} KG
                  </div>
                </div>
                <div class="w-1/2 flex m-auto text-right">
                  <div class="w-full text-sm font-semibold mr-2 ">
                    {{item[0].nominal * getSalaryWorked[index][0].nominal | formatPrice}}
                  </div>
                  <span 
                  v-if="getModeEdit"
                  class="material-icons text-base font-bold text-gray-200 -mt-1">
                    not_interested
                  </span>
                </div>
              </div>
            </div>

            <div>
            </div>
          </div>

        </div>

        <div class="flex mt-3 pb-4 px-4">
          <div class="w-1/2 flex flex-col text-left">
            <div class="font-semibold">
              Subtotal Upah
            </div>
          </div>
          <div class="w-1/2 font-semibold text-right m-auto">
            Rp {{subTotalSalary | formatPrice}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {
    mapGetters
  } from 'vuex';


  export default {
    props: {
      items: {
        type: Object
      }
    },

    data() {
      return {
        data: 2000
      }
    },

    mounted() {
      this.$store.dispatch('setWageSalary');
      this.$store.dispatch('setWorkedSalary');

    },

    computed: {
      ...mapGetters(['getSalaryArrangment', 'getSalaryWorked','getModeEdit']),

      subTotalSalary(){
        let allSalaryWholesale=0
        for (const salaryWorked in this.getSalaryWorked){
          allSalaryWholesale+=(this.getSalaryWorked[salaryWorked][0].nominal*this.getSalaryArrangment[salaryWorked][0].nominal)
        }
        this.$emit("salaryBorongan", {
          name: "sub_total_upah",
          nominal: allSalaryWholesale
        });
        return allSalaryWholesale
      },
    }


  }

</script>

<style lang="scss" scoped>

</style>
