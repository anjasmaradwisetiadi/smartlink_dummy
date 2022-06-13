<template>
  <div id="app">
    <div
      class="hidden md:block lg:block ">
      <div class="md:block mt-4 font-bold">
        harus dalam ukuran layar mobile (<576px)
      </div>
    </div>
    <div
      class="sm:block md:hidden lg:hidden">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      windowWidth: 0,
      viewMobile:false,
    }
  },

  watch:{
    windowWidth(newVal, oldVal){
      if (newVal >= 576) {
        return this.viewMobile = false
      } else {
        return this.viewMobile = true
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },

  updated() {
    window.addEventListener('resize', this.onResize)
  },

  methods:{
    onResize(e) {
      this.windowWidth = window.innerWidth
      console.log('detect size width')
      console.log(this.windowWidth)
      if (this.windowWidth >= 576) {
        return this.viewMobile = false
      } else {
        return this.viewMobile = true
      }
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
