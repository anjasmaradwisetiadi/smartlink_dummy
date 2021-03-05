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
        <edit-gaji 
        :inner-height="innerHeight" 
        :inner-width="innerWidth" 
        :items="items.data"
        >
        </edit-gaji>
      </div>

      <div class="modal_Absen" v-if="popUpModal && (editModalState==='EditAbsen')">
        <edit-absen 
        :inner-height="innerHeight" 
        :inner-width="innerWidth" 
        :items="items.data">

        </edit-absen>

      </div>
      <!-- group by -->
      <profile :items="items.data"></profile>
      <kehadiran :items="items.data"></kehadiran>

      <sekat></sekat>

      <gaji :items="items.data" 
      @modalEditGaji="modalEditGaji">
      </gaji>

      <sekat></sekat>
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
  import Kehadiran from './gaji_faktur/Kehadiran.vue';
  import Profile from './gaji_faktur/Profile.vue';
  import Gaji from './gaji_faktur/Gaji.vue';
  import Sekat from './component_reuse/Sekat.vue';


  import {
    mapGetters
  } from 'vuex';
  import {
    mapMutations
  } from 'vuex';
  import EditAbsen from './all_modal/EditAbsen.vue';


  export default {
    components: {
      EditGaji,
      EditAbsen,
      Profile,
      Kehadiran,
      Gaji,
      Sekat,
    },
    data() {
      return {
        toggleModal: false,
        innerWidth: null,
        innerHeight: null,
        editModalState: ''
      }
    },

    computed: {
      ...mapGetters(['getAllDataEmployee', 'getToggleModal']),

      popUpModal() {
        console.log("data toggle")
        console.log(this.getToggleModal);
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
      ...mapMutations(['modalEditSalarys']),

      modalEditGaji(data) {
        this.toggleModal = data.data;
        this.editModalState = data.variabel;

        this.handleResize();
        if (data.data) {
          this.modalEditSalarys(data.data)
        } else {
          return false
        }
      },



      handleResize() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
      },

    }

  }

</script>
