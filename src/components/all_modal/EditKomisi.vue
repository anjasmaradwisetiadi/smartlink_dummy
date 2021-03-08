<template>
  <div class="Edit_Komisi justify-center items-center text-center">
    <div v-if="getToggleModal" class="fixed flex justify-center items-center z-20  w-screen">
      <div class="flex flex-col mt-3 pb-6 border rounded-lg z-20 relative bg-white w-full mx-auto">
        <div class="flex mt-3 pb-3 border-b">
          <div class="w-full text-center font-bold text-lg ml-4">
            Tambah / Ubah Komisi
          </div>
          <div class="text-right mr-6">
            <span @click.prevent="closeModal(false)" class="material-icons text-blue-500 font-bold cursor-pointer"> close </span>
          </div>
        </div>
        <div class="flex flex-col mt-4 px-4">
          <div class="text-sm text-light text-gray-400 font-light text-left mb-1">
            Nama Komisi
          </div>
          <div class="mb-4 relative">
            <input type="text"
              class="w-full flex-shrink flex-grow flex-auto  w-px flex-1 border h-10 border-grey-light rounded px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
              placeholder="Nama Komisi"
              @change="changeTitle"
              :value="title"
              >
          </div>
        </div>

        <div class="flex flex-col mt-4 px-4">
          <div class="text-sm text-light text-gray-400 font-light text-left mb-1">
            Nominal
          </div>
          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span
                class="flex items-center  bg-gray-200 rounded rounded-r-none border border-r-0 border-grey-light px-4 whitespace-no-wrap text-grey-dark text-sm">Rp</span>
            </div>
            <input type="number"
              class="flex-shrink flex-grow flex-auto  w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-4 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow"
              placeholder="1000"
              @change="changeNominal"
              :value="nominal"
              >
          </div>
        </div>

        <div class="flex mt-4 px-4">
          <div class="w-1/2 mr-2">
            <button 
            class=" w-full text-center py-2 rounded"
            :class="!enableDelete?'text-red-100 rounded border border-red-100 cursor-not-allowed':'text-red-400 rounded border border-red-400'"
            :disabled="!enableDelete"
            @click="deleteKomisi()"
            >
              Hapus
            </button>
          </div>
          <div class="w-1/2 ml-2">
            <button class="button_background w-full py-2 text-center rounded text-white"
            @click="saveKomisi(idTo)"
            >
              Simpan</button>
          </div>
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

  const { uuid } = require('uuidv4');
  export default {
    data() {
      return {
        title:'',
        nominal:null,
        saveData:false,

      }
    },

    props: {
      items:{
          type:Object,
      },
      idTo:{
          type:String,
          default:null,
          require:true
      },
      enableDelete:{
          type:Boolean,
          default:false
      },
      indexTo:{
          type:Number,
          default:null,
          require:true
      }

    },

    computed: {
      ...mapGetters(['getToggleModal','getInnerHeight','getInnerWidth']),

      sizeShadow() {
        return {
          width: `${this.getInnerWidth}px`,
          height: `${this.getInnerHeight}px`,
        }
      },

      firstTimeNominal(){
          return this.nominal = this.items.komisi[this.indexTo].nominal;
      },

      firstTimeTitle(){
          return this.title = this.items.komisi[this.indexTo].nama;
      }
    },

    mounted(){
        if(this.idTo === null){
          this.resetForm;
        }
        else{
            this.firstTimeNominal;
            this.firstTimeTitle;
        }

    },

    methods:{
    ...mapMutations(['closeModals']),
    ...mapActions(['setAddKomisi','setDeleteKomisi','setCollectSubTotal']),

    changeNominal(e){
        this.nominal=e.target.value;
    },

    changeTitle(e){
        this.title=e.target.value;
    },

    saveKomisi(dataSave){
        console.log(dataSave)
        this.saveData=true;
        if(this.saveData){
            if(dataSave){
                this.items.komisi[this.indexTo].nominal=parseInt(this.nominal);
                this.items.komisi[this.indexTo].nama=this.title;
            }
            else{
                let dataAddKomisi={
                    id:uuid(),
                    nama:this.title,
                    nominal: this.nominal,
                }
                this.setAddKomisi(dataAddKomisi) 
            }
        }
        else{
            this.nominal=this.items.komisi[this.indexTo].nominal;
            this.title=this.items.komisi[this.indexTo].nama;
        }
        
        this.closeModals(false);

    },

    deleteKomisi(){
        this.setDeleteKomisi(this.idTo)
        this.closeModals(false)
    },

    closeModal(data) {
        this.closeModals(data)
    },

    resetForm(){
          this.title='';
          this.nominal=null;
    }

    }
  }

</script>
<style lang="scss" scoped>
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
