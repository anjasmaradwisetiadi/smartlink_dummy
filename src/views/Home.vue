<template>
  <div class="home">
    <!-- back -->
    <back-step-button
    ></back-step-button>

    <!-- component dynamic -->
    <keep-alive>
      <component :is="logicStepper"></component>
    </keep-alive>

    <!-- next -->
    <next-step-button
    ></next-step-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import EditGaji from '../components/all_modal/EditGaji.vue';
import GajiFaktur from '../components/GajiFaktur.vue';
import DetailPembayaran from '../components/DetailPembayaran.vue';
import DetailFaktur from '../components/DetailFaktur.vue';
import NextStepButton from '../components/component_reuse/NextStepButton.vue';
import BackStepButton from '../components/component_reuse/BackStepButton.vue';

  import {
    mapGetters,
    mapMutations
  } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    GajiFaktur,
    EditGaji,
    DetailPembayaran,
    DetailFaktur,
    BackStepButton,
    NextStepButton
  },
  data(){
    return{

    }
  },

  computed:{
    ...mapGetters(['logicStepper'])
  },

  methods:{

  }

};
</script>