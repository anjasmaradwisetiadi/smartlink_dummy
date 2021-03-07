<template>
  <section class="Upah_Borongan">
    <!-- Upah Borongan -->
    <div class="Upah Borongan flex flex-col mt-3 pb-3">
      <div class="flex flex-col text-left px-4  ">
        <div class="pb-3 border-b">
          <div class=" text-base font-bold ">
            Upah Borongan
          </div>
        </div>
        <div class="flex mt-3">
          <div class="w-1/2 flex flex-col text-left">
            <div class="font-sm font-semibold">
              Mencuci
            </div>
            <div class="uppercase text-sm text-gray-400">
              100kg
            </div>
          </div>
          <div class="w-1/2 flex m-auto text-right">
            <div class="w-full text-sm font-semibold mr-2 ">
              20.000
            </div>
            <span class="material-icons text-base font-bold text-gray-200 -mt-1"> not_interested
            </span>
          </div>
        </div>
        <div class="flex mt-3">
          <div class="w-1/2 flex flex-col text-left">
            <div class="font-sm font-semibold">
              Menyetrika
            </div>
            <div class="uppercase text-sm text-gray-400">
              50KG
            </div>
          </div>
          <div class="w-1/2 flex m-auto text-right">
            <div class="w-full text-sm font-semibold mr-2 ">
              80.000
            </div>
            <span class="material-icons text-base font-bold text-gray-200 -mt-1"> not_interested
            </span>
          </div>
        </div>
        <div class="flex mt-3 pb-4 ">
          <div class="w-1/2 flex flex-col text-left">
            <div class="text-base font-semibold">
              Subtotal Upah
            </div>
          </div>
          <div class="w-1/2 text-base font-semibold text-right m-auto">
            Rp {{subTotalSalary}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      items: {
        type: Object
      }
    },

    data(){
        return{
            data:2000
        }
    },

    mounted(){
        this.subTotalSalary;
    },

    computed:{
        subTotalSalary(){
            let dataCall=this.data
            this.$emit("salaryKomisi",{name:"sub_total_upah",nominal:dataCall});
            return dataCall
        }
    }

    
  }

</script>

<style lang="scss" scoped>

</style>
