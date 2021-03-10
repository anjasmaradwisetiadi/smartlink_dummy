<template>
  <section class="DetailFaktur">
    <!-- masih tidak bisa digunakan karena perlu terhubung dari awal step 1 sampai step 3 (submit data) -->
    <div class="w-screen title text-center pb-3 pt-2 border-b-2 border-t z-0 fixed bg-white">
      <div class="uppercase font-bold text-lg">
        Detail Faktur
      </div>
    </div>
    <id-detail-faktur></id-detail-faktur>
    <profile :items="getAllDataEmployee.data"></profile>
    <!-- <komisi></komisi> -->
    <sekat></sekat>
    <total-gaji-kotor></total-gaji-kotor>
    <sekat>
    </sekat>
    <total-gaji-bersih></total-gaji-bersih>
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
  import Keterangan from './gaji_faktur/Keterangan.vue';
  import Komisi from './gaji_faktur/Komisi.vue';
  import Profile from './gaji_faktur/Profile.vue'
  import TotalGajiBersih from './gaji_faktur/TotalGajiBersih.vue';
  import TotalGajiKotor from './gaji_faktur/TotalGajiKotor.vue';
  export default {
    components: {
      IdDetailFaktur,
      Profile,
      Komisi,
      TotalGajiBersih,
      Sekat,
      TotalGajiKotor,
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
