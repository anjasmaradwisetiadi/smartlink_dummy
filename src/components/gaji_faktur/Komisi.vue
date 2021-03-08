<template>
  <section class="Komisi">
    <div class="Upah Borongan flex flex-col mt-3 pb-3">
      <div class="pb-3 border-b px-4">
        <div class=" text-base font-bold text-left">
          Komisi
        </div>
      </div>
      <div class="flex flex-col text-left px-4 pb-8 border-b">
        <div class="flex mt-2">
          <span class="material-icons text-xl font-bold text-blue-400 -mt-1 "> add_circle_outline
          </span>
          <div class="ml-3 text-blue-400 text-base font-semibold cursor-pointer"
            @click.prevent="modalAddKomisi()">Tambah komisi lain...</div>
        </div>
        <div v-if="(items.komisi).length === 0">
          <p class="mt-3 text-red-400">data tidak ada....</p>
        </div>
        <div v-else>
          <div class="mt-3 pb-8 border-b border-dashed">
            <div v-for="(item,indexs) in items.komisi" :key="indexs">
              <div class="flex mt-2 ">
                <div class="w-1/2 text-left font-sm ">
                  {{item.nama}}
                </div>
                <div class="w-1/2 flex m-auto text-right">
                  <div class="w-full text-sm font-semibold mr-2 ">
                    Rp.{{item.nominal}}
                  </div>
                  <span
                    class="material-icons text-base font-bold text-blue-400 -mt-1 cursor-pointer"
                    @click="modalEditKomisi({id:item.id,index:indexs})">
                    mode_edit
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="flex mt-3 pb-4 ">
          <div class="w-1/2 flex flex-col text-left">
            <div class="text-base font-semibold">
              Subtotal Komisi
            </div>
          </div>
          <div class="w-1/2 text-base font-semibold text-right m-auto">
            Rp {{allSalary}}
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
        type: Object,
      }
    },

    data() {
      return {}
    },

    computed: {
      allSalary() {
        let dataLength = this.items.komisi.length;

        let data = 0;
        for (let i = 0; i < dataLength; i++) {
          data += parseInt(this.items.komisi[i].nominal);
        }

        this.$emit("salaryKomisi",{name:"sub_total_komisi",nominal:data});
        return data;
      },

    },

    methods: {
      ...mapMutations(['modalEdit']),

      modalAddKomisi() {
        this.$emit('modalAddKomisi', {
          variabel: 'EditKomisi',
          enableDelete: false,
          id:null
        });
        this.modalEdit(true);
      },

      modalEditKomisi(data) {
        console.log("edit data")
        this.$emit('modalEditKomisi', {
          id: data.id,
          variabel: 'EditKomisi',
          enableDelete: true,
          index: data.index
        });
        this.modalEdit(true);
      },

    }
  }

</script>

<style lang="scss" scoped>

</style>
