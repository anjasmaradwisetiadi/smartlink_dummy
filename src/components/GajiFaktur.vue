<template>
  <section class="Gaji_Faktur pt-10 overflow-y-scroll">
    <div v-if="getLoading"
      class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
      Still Loading....
    </div>

    <div v-if="!getLoading"
      class="main_page ">
      <!-- modal -->
      <div class="modal_Kehadiran" v-if="popUpModal && (editModalState==='EditKehadiran')">
        <edit-keterlambatan :items="getAllDataEmployee.data">
        </edit-keterlambatan>
      </div>

      <div class="modal_Komisi" v-if="popUpModal && (editModalState === 'EditKomisi')">
        <edit-komisi :items="getAllDataEmployee.data" :id-to="idTo" :enable-delete="enableDelete"
          :index-to="indexTo">
        </edit-komisi>
      </div>

      <!-- group by -->
      <profile :items="getAllDataEmployee.data"></profile>

      <kehadiran :items="getAllDataEmployee.data" @modalEditKehadiran="modalEditKehadiran">
      </kehadiran>


      <komisi :items="getAllDataEmployee.data" 
        @modalAddKomisi="modalAddKomisi"
        @modalEditKomisi="modalEditKomisi"
        @salaryKomisi ="salaryKomisi"
      
      ></komisi>
      
      <sekat></sekat>
      <upah-borongan
        :items="getAllDataEmployee.data"
      ></upah-borongan>
      <sekat></sekat>

      <total-gaji-kotor></total-gaji-kotor>
      <sekat></sekat>
      <total-gaji-bersih></total-gaji-bersih>

    </div>


    <!-- <div class="modal_Gaji" v-if="popUpModal && (editModalState==='EditGaji')">
        <edit-gaji 
          :items="items.data"
          :index-to="indexTo">
        </edit-gaji>
      </div>

      <div class="modal_Absen" v-if="popUpModal && (editModalState==='EditAbsen')">
        <edit-absen 
        :items="items.data"
          :index-to="indexTo">
        </edit-absen>
      </div> -->



    <!-- <sekat></sekat>

      <gaji :items="items.data" @modalEditGaji="modalEditGaji">
      </gaji>

      <sekat></sekat> -->

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
  import UpahBorongan from './gaji_faktur/UpahBorongan.vue';
  import TotalGajiKotor from './gaji_faktur/TotalGajiKotor.vue';
  import TotalGajiBersih from './gaji_faktur/TotalGajiBersih.vue';
  import Sekat from './component_reuse/Sekat.vue';


  import {
    mapActions,
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
      EditKomisi,
      UpahBorongan,
      TotalGajiKotor,
      TotalGajiBersih,


    },
    data() {
      return {
        toggleModal: false,
        innerWidth: 0,
        innerHeight: 0,
        editModalState: '',
        indexTo: null,
        idTo: null,
        enableDelete: false
      }
    },

    computed: {
      ...mapGetters(['getAllDataEmployee', 'getToggleModal', 'getLoading']),

      popUpModal() {
        return this.toggleModal = this.getToggleModal
      },

    },

    created() {
      window.addEventListener('resize', this.handleResize);
    },

    destroyed() {
      window.addEventListener('resize', this.handleResize);
    },



    mounted() {
      this.$store.dispatch('setInquiry');
    },

    methods: {
      ...mapMutations(['modalEdit', 'innerWidthHeight','collectSubTotal']),

      getDataEndpointInquiry() {
        this.setInquiry;
      },

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

      modalAddKomisi(data) {
        this.editModalState = data.variabel;
        this.enableDelete = data.enableDelete;
        this.handleResize();
      },

      modalEditKomisi(data) {
        this.idTo = data.data;
        this.editModalState = data.variabel;
        this.enableDelete = data.enableDelete;
        this.indexTo = data.index;
        this.handleResize();
      },

      salaryKomisi(data){
        this.collectSubTotal({name:data.name,nominal:data.nominal})
      },

      handleResize() {
        this.innerWidthHeight({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        })

      },



    }

  }

</script>
