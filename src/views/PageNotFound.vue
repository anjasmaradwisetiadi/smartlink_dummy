<template>
  <section class="PageNotFound">
    <div class="flex flex-col justify-center text-center items-center">
      <div class="loading text-center mx-auto relative text-red-500 text-lg font-bold pt-4">
        Page Not Found !!!
      </div>
      <div class="mt-4">
          <router-link tag="button" to="/home" class="bg-red-500 px-4 py-2 text-white rounded-md"> Back To Home</router-link>
      </div>
    </div>


  </section>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>

</style>
