<template>
  <div id="app">
    <div v-if="!viewMobile">
      <div class="mt-4 font-bold">
        harus dalam ukuran layar mobile (<576px)
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      windowWidth: 0
    }
  },
  computed:{
    viewMobile(){
      if(this.windowWidth < 576){
        return true
      } else{
        return  false
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
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
