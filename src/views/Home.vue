<template>
  <div class="home">
    <gaji-faktur></gaji-faktur>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import EditGaji from '../components/all_modal/EditGaji.vue';
import GajiFaktur from '../components/GajiFaktur.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    EditGaji,
    GajiFaktur,



  },
};
</script>
