<template>
  <section class="DetailFaktur">
    <!-- masih tidak bisa digunakan karena perlu terhubung dari awal step 1 sampai step 3 (submit data) -->
    <div class="w-screen title text-center pb-3 pt-2 border-b-2 border-t z-10 fixed bg-white">
      <div class="uppercase font-bold text-lg">
        Detail Faktur
      </div>
    </div>
    <!-- Resi & Profile -->
    <id-detail-faktur></id-detail-faktur>
    <profile :items="getAllDataEmployee.data"></profile>
    <sekat></sekat>

    <!-- Gaji -->
    <gaji :items="getAllDataEmployee.data">
    </gaji>
    <sekat></sekat>

    <!-- Upah Borongan -->
    <upah-borongan :items="getAllDataEmployee.data">
    </upah-borongan>
    <sekat></sekat>

    <!-- komisi Gaji Kotor -->
    <komisi :items="getAllDataEmployee.data"></komisi>
    <total-gaji-kotor></total-gaji-kotor>
    <sekat></sekat>


    <!-- Tanggungan -->
    <tanggungan :items="getAllDataEmployee.data">
    </tanggungan>
    <sekat></sekat>

    <!-- Gaji Bersih -->
    <total-gaji-bersih></total-gaji-bersih>
    <sekat></sekat>
    <!-- keterangan -->
    <keterangan></keterangan>
  </section>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  import Sekat from './component_reuse/Sekat.vue';
  import IdDetailFaktur from './gaji_faktur/IdDetailFaktur.vue'
  import Profile from './gaji_faktur/Profile.vue'
  import Gaji from './gaji_faktur/Gaji.vue';
  import Komisi from './gaji_faktur/Komisi.vue';
  import UpahBorongan from './gaji_faktur/UpahBorongan.vue';
  import TotalGajiBersih from './gaji_faktur/TotalGajiBersih.vue';
  import TotalGajiKotor from './gaji_faktur/TotalGajiKotor.vue';
  import Tanggungan from './gaji_faktur/Tanggungan.vue';
  import Keterangan from './gaji_faktur/Keterangan.vue';

  export default {
    components: {
      Sekat,
      IdDetailFaktur,
      Profile,
      Gaji,
      Komisi,
      UpahBorongan,
      TotalGajiBersih,
      TotalGajiKotor,
      Tanggungan,
      Keterangan

    },
    data() {
      return {}
    },

    computed: {
      ...mapGetters(['getAllDataEmployee']),
    }

  }

</script>
<style lang="scss" scoped>

</style>
