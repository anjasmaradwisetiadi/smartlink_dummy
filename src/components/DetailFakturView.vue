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
    <div class="mt-3 pb-3">
      <div class="flex flex-col px-4">
        <div class="flex flex-col pb-8 text-left">
          <div class="text-sm text-gray-400">Keterangan</div>
          <div class="text-base font-semibold mt-1">Lebih Semangat Lagi Ya !</div>
        </div>
        <button
          class=" w-full py-4 bg-green-500 text-white text-lg text-center rounded-md">Cetak</button>
      </div>
    </div>
  </section>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  import Sekat from './component_reuse/Sekat.vue';

  import IdDetailFaktur from './gaji_faktur/IdDetailFaktur.vue'
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
      TotalGajiKotor

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
