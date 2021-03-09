<template>
  <section class="Tanggungan">
    <div class="Tanggungan mt-3 pb-3">
      <div class="flex flex-col px-4 ">
        <div class="flex flex-col border-b border-dashed pb-3">
          <div class="font-bold text-base text-left">
            Tanggungan
          </div>
          <div class="text-sm text-gray-400 text-left">
            Karyawan ini memiliki tanggungan Rp 570.000
          </div>
        </div>

        <div class="flex flex-col mt-3">
          <div class="flex mt-2 text-left">
            <span class="material-icons text-xl font-bold text-blue-400 -mt-1 "> add_circle_outline
            </span>
            <div class="ml-3 text-blue-400 text-base font-semibold cursor-pointer"
              @click.prevent="modalAddTanggungan()">Tambah Pembayaran Tanggungan...</div>
          </div>
          <div v-if="(items.tanggungan).length === 0">
            <p class="mt-3 text-red-400 text-left">data tidak ada....</p>
          </div>
          <div v-else>
            <div class="mt-3">
              <div v-for="(item, indexs) in items.tanggungan" :key="indexs" class="w-full">
                <div class="flex relative">
                  <div class="w-2/3 flex flex-col text-left">
                    <div class="text-sm font-semibold">
                      {{item.nama}}
                    </div>
                    <div class="text-sm text-gray-400">
                      {{item.keterangan}}
                    </div>
                  </div>
                  <div class="w-1/3 flex text-red-400 m-auto text-right">
                    <div class="w-full text-sm font-semibold mr-2">
                      {{item.nominal | formatPrice}}
                    </div>
                    <span class="material-icons text-base font-bold -mt-1 cursor-pointer"
                      @click="modalEditTanggungan({id:item.id,index:indexs})">
                      mode_edit
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>


          <div class="flex mt-3">
            <div class="w-2/3 font-semibold text-left">
              Tanggungan Dibayar
            </div>
            <div class="w-1/3 font-semibold text-red-400 text-right m-auto">
              (-) Rp {{allSalary | formatPrice}}
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
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    props: {
      items: {
        type: Object
      },
    },
    computed:{
        allSalary(){
            let dataLength = (this.items.tanggungan).length;

            let data = 0;
            for(let i=0; i<dataLength; i++){
                data +=parseInt(this.items.tanggungan[i].nominal)
            }
            this.$emit("salaryTanggungan", {name:"sub_total_tanggungan",nominal:data});
            return data;
        }
    },

    methods: {
      ...mapMutations(['modalEdit',]),

      modalAddTanggungan() {
        this.$emit('modalAddTanggungan', {
            variabel: 'EditTanggungan',
            enableDelete: false,
            id:null
          }),
          this.modalEdit(true);
      },

      modalEditTanggungan(data) {
        this.$emit('modalEditTanggungan', {
          variabel: 'EditTanggungan',
          enableDelete: true,
          id: data.id,
          index: data.index
        })
        this.modalEdit(true);
      }

    }
  }

</script>
<style lang="scss" scoped>

</style>
