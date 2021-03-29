<template>
  <section class="Gaji_Faktur pt-12">
    <div v-if="getLoading"
      class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
      Still Loading....
    </div>

    <div v-else-if="!getLoading && getErrorMessage"
      class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
      Error terjadi {{getErrorMessage}}
    </div>

    <div v-else class="main_page ">
      <!-- Modal Start-->
      <!-- modal Profile -->
      <div class="modal_Kehadiran" v-if="popUpModal && (editModalState==='EditKehadiran')">
        <edit-keterlambatan :items="getAllDataEmployee.data">
        </edit-keterlambatan>
      </div>

      <!-- modal Gaji & Absen -->
      <div class="modal_Gaji" v-if="popUpModal && (editModalState==='EditGaji')">
        <edit-gaji :items="getAllDataEmployee.data" :id-to="idTo">
        </edit-gaji>
      </div>
      <div class="modal_Absen" v-if="popUpModal && (editModalState==='EditAbsen')">
        <edit-absen :items="getAllDataEmployee.data" :id-to="idTo">
        </edit-absen>
      </div>

      <!-- modal Komisi -->
      <div class="modal_Komisi" v-if="popUpModal && (editModalState === 'EditKomisi')">
        <edit-komisi :items="getAllDataEmployee.data" :id-to="idTo" :enable-delete="enableDelete"
          :index-to="indexTo">
        </edit-komisi>
      </div>

      <!-- modal Tanggungan -->
      <div class="modal_Tanggungan" v-if="popUpModal && (editModalState === 'EditTanggungan')">
        <edit-tanggungan :items="getAllDataEmployee.data" :id-to="idTo"
          :enable-delete="enableDelete" :index-to="indexTo"></edit-tanggungan>
      </div>
      <!-- Modal End-->

      <!-- Profile -->
      <profile :items="getAllDataEmployee.data"></profile>
      <kehadiran :items="getAllDataEmployee.data" @modalEditKehadiran="modalEditKehadiran">
      </kehadiran>
      <sekat></sekat>

      <!-- Gaji & Absen -->
      <gaji :items="getAllDataEmployee.data" @modalEditGaji="modalEditGaji"
        @salaryGaji="salaryGaji">
      </gaji>
      <sekat></sekat>

      <!-- Upah Borongan -->
      <upah-borongan :items="getAllDataEmployee.data" @salaryBorongan="salaryBorongan">
      </upah-borongan>
      <sekat></sekat>

      <!-- komisi -->
      <komisi :items="getAllDataEmployee.data" @modalAddKomisi="modalAddKomisi"
        @modalEditKomisi="modalEditKomisi" @salaryKomisi="salaryKomisi"></komisi>
      <sekat></sekat>

      <!-- Gaji Kotor -->
      <total-gaji-kotor></total-gaji-kotor>
      <sekat></sekat>

      <!-- Tanggungan -->
      <tanggungan :items="getAllDataEmployee.data" @modalAddTanggungan="modalAddTanggungan"
        @modalEditTanggungan="modalEditTanggungan" @salaryTanggungan="salaryTanggungan">
      </tanggungan>
      <sekat></sekat>

      <!-- Gaji Bersih -->
      <total-gaji-bersih></total-gaji-bersih>

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
  import EditTanggungan from './all_modal/EditTanggungan.vue';
  import Kehadiran from './gaji_faktur/Kehadiran.vue';
  import Profile from './gaji_faktur/Profile.vue';
  import Gaji from './gaji_faktur/Gaji.vue';
  import Komisi from './gaji_faktur/Komisi.vue';
  import UpahBorongan from './gaji_faktur/UpahBorongan.vue';
  import TotalGajiKotor from './gaji_faktur/TotalGajiKotor.vue';
  import TotalGajiBersih from './gaji_faktur/TotalGajiBersih.vue';
  import Sekat from './component_reuse/Sekat.vue';
  import Tanggungan from './gaji_faktur/Tanggungan.vue';

  import {mixinsAllModal} from '../utilis/mixins/mixinAllModal'

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
      EditKomisi,
      EditTanggungan,
      Profile,
      Kehadiran,
      Gaji,
      Sekat,
      EditKeterlambatan,
      Komisi,
      UpahBorongan,
      TotalGajiKotor,
      TotalGajiBersih,
      Tanggungan,


    },
    data() {
      return {
        toggleModal: false,
      }
    },

    computed: {
      ...mapGetters(['getAllDataEmployee', 'getToggleModal', 'getLoading', 'getErrorMessage']),

      popUpModal() {
        return this.toggleModal = this.getToggleModal
      },

    },

    mounted() {
      this.$store.dispatch('setInquiry');
      this.$store.dispatch('setModeEdit',true);
    },

    mixins:[mixinsAllModal],

    methods: {
      ...mapMutations(['modalEdit', 'innerWidthHeight', 'collectSubTotal']),

      // all data and fucionalitas Edit Modal  store in mixin(mixinsAllModal)

      getDataEndpointInquiry() {
        this.setInquiry;
      },

      salaryGaji(data) {
        this.collectSubTotal({
          name: data.name,
          nominal: data.nominal
        })
      },

      salaryBorongan(data) {
        this.collectSubTotal({
          name: data.name,
          nominal: data.nominal
        })
      },

      salaryKomisi(data) {
        this.collectSubTotal({
          name: data.name,
          nominal: data.nominal
        })
      },

      salaryTanggungan(data) {
        console.log(data)
        this.collectSubTotal({
          name: data.name,
          nominal: data.nominal
        })
      },
    }

  }

</script>
