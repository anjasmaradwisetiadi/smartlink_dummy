<template>
  <section class="Gaji_Faktur">
    <div class="z-0 relative title text-center py-3 border-b mx-auto">
      <div class="uppercase font-bold text-lg">
        Faktur Gaji
      </div>

    </div>
    <div v-for="(items,index) in getAllDataEmployee" :key="index">
      <!-- modal -->
      <div class="modal_Gaji" v-if="popUpModal && (editModalState==='EditGaji')">
        <edit-gaji :inner-height="innerHeight" :inner-width="innerWidth" :items="items.data"
          :index-to="indexTo">
        </edit-gaji>
      </div>

      <div class="modal_Absen" v-if="popUpModal && (editModalState==='EditAbsen')">
        <edit-absen :inner-height="innerHeight" :inner-width="innerWidth" :items="items.data"
          :index-to="indexTo">
        </edit-absen>
      </div>

      <div class="modal_Kehadiran" v-if="popUpModal && (editModalState==='EditKehadiran')">
        <edit-keterlambatan 
          :inner-height="innerHeight" 
          :inner-width="innerWidth"
          :items="items.data">
        </edit-keterlambatan>
      </div>

      <div class="modal_Komisi" 
        v-if="popUpModal && (editModalState === 'EditKomisi')"
      >
        <edit-komisi
          :inner-height="innerHeight" 
          :inner-width="innerWidth"
          :items="items"
          :id-to="idTo"
          :enable-delete="enableDelete"
          :index-to="indexTo"
        >
        </edit-komisi>
      </div>

      <!-- group by -->
      <profile :items="items.data"></profile>
      <kehadiran :items="items.data" @modalEditKehadiran="modalEditKehadiran">
      </kehadiran>

      <sekat></sekat>

      <gaji :items="items.data" @modalEditGaji="modalEditGaji">
      </gaji>

      <sekat></sekat>

      <komisi
        :items="items.data"
        @modalAddKomisi="modalAddKomisi"
        @modalEditKomisi="modalEditKomisi"
      ></komisi>


    </div>


  </section>
</template>

<style lang="scss" scoped>
  .edit_icon {
    vertical-align: -8px !important;
  }

  .button_background {
    background-color: #206CFF;
    border: #206CFF 1px solid;
  }

</style>

<script>
  import EditGaji from './all_modal/EditGaji.vue';
  import EditAbsen from './all_modal/EditAbsen.vue';
  import EditKeterlambatan from './all_modal/EditKeterlambatan.vue';
  import EditKomisi from './all_modal/EditKomisi.vue';
  import Kehadiran from './gaji_faktur/Kehadiran.vue';
  import Profile from './gaji_faktur/Profile.vue';
  import Gaji from './gaji_faktur/Gaji.vue';
  import Komisi from './gaji_faktur/Komisi.vue';
  import Sekat from './component_reuse/Sekat.vue';


  import {
    mapGetters
  } from 'vuex';
  import {
    mapMutations
  } from 'vuex';


  export default {
    components: {
      EditGaji,
      EditAbsen,
      Profile,
      Kehadiran,
      Gaji,
      Sekat,
      EditKeterlambatan,
      Komisi,
      EditKomisi

    },
    data() {
      return {
        toggleModal: false,
        innerWidth: 0,
        innerHeight: 0,
        editModalState: '',
        indexTo: null,
        idTo:null,
        enableDelete:false
      }
    },

    computed: {
      ...mapGetters(['getAllDataEmployee', 'getToggleModal']),

      popUpModal() {
        return this.toggleModal = this.getToggleModal
      }
    },

    created() {
      window.addEventListener('resize', this.handleResize);
    },

    destroyed() {
      window.addEventListener('resize', this.handleResize);
    },

    methods: {
      ...mapMutations(['modalEdit']),

      modalEditGaji(data) {

        this.editModalState = data.variabel;
        this.indexTo = data.index;

        this.handleResize();
        if (data.data) {
          this.modalEdit(data.data)
        } else {
          return false
        }
      },

      modalEditKehadiran(data) {
        this.editModalState = data.variabel;
        this.handleResize();
      },

      modalAddKomisi(data){
        this.editModalState=data.variabel;
        this.enableDelete=data.enableDelete;
        this.handleResize();
      },

      modalEditKomisi(data){
        this.idTo=data.data;
        this.editModalState=data.variabel;
        this.enableDelete=data.enableDelete;
        this.indexTo=data.index;
        this.handleResize();
      },

      handleResize() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
      },

    }

  }

</script>
