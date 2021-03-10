<template>
  <section class="Detail Pembayaran pt-10 overflow-y-scroll">
    <div class="flex flex-col">
      <div v-if="getLoading"
        class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
        Still Loading....
      </div>
      <div v-else-if="!getLoading && getErrorMessage"
        class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
        Error terjadi {{getErrorMessage}}
      </div>

      <div v-else class="flex flex-col">
        <!-- form gaji bersih -->
        <detail-gaji-di-dapat></detail-gaji-di-dapat>
        <!-- sekat abu2 -->
        <div class="bg-gray-100 py-2 ">
        </div>
        <!-- form Pembayaran -->
        <form-input-all></form-input-all>

        <div class="mt-6 mb-3 px-4">
          <button class=" w-full py-3 bg_tombol text-white rounded-md "
            @click.prevent="submitSalary()">Submit Gaji</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import DetailGajiDiDapat from './detail_pembayaran/DetailGajiDiDapat.vue'
  import FormInputAll from './detail_pembayaran/FormInputAll.vue'

  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    components: {
      DetailGajiDiDapat,
      FormInputAll
    },

    computed: {
      ...mapGetters(['getLoading', 'getErrorMessage', 'getBanks', 'getDate']),

      changeDataBanks() {
        return Object.entries(this.getBanks)
      }
    },

    mounted() {
      this.$store.dispatch('setBanks')
    },

    methods: {
      ...mapMutations(['validBank', 'validDate']),

      submitSalary() {
        if (this.validateInput() === 1) {
          this.$router.push({
            path: '/detail-faktur'
          });
          this.$store.dispatch('setModeEdit',false);
          this.$store.dispatch('setSubmitGaji')
        } else {
          return false
        }
      },

      validateInput() {
        let dataBanks = Object.keys(this.getBanks).length;
        let dataDate = this.getDate;

        let statusValidBank = (!dataBanks) ? 'invalid' : 'valid';
        let statusValidDate = (!dataDate) ? 'invalid' : 'valid';

        this.validBank(statusValidBank);
        this.validDate(statusValidDate);

        if ((statusValidBank === 'valid') && (statusValidDate === 'valid')) {
          return 1
        } else {
          return 0
        }

      }
    }

  }

</script>
<style lang="scss" scoped>
  .bg_tombol {
    background-color: #206CFF;
  }

</style>
