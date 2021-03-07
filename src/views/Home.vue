<template>
  <div class="home">
    <!-- <gaji-faktur></gaji-faktur> -->
    <!-- <detail-pembayaran></detail-pembayaran> -->
    <detail-faktur></detail-faktur>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import EditGaji from '../components/all_modal/EditGaji.vue';
import GajiFaktur from '../components/GajiFaktur.vue';
import DetailPembayaran from '../components/DetailPembayaran.vue';
import DetailFaktur from '../components/DetailFaktur.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    EditGaji,
    DetailPembayaran,
    DetailFaktur,

  },
};
</script>
