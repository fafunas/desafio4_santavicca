<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <productlist/>
  </div>
</template>

<script>
import productlist from '../components/productList.vue'


export default {
  name: 'Home',
  components: {
    productlist
  },



  
}
</script>

<style lang="scss" scoped>

</style>