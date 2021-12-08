<template>
  <v-data-table
    :headers="headers"
    :items="productos"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import productos from '../assets/json/productos.json'

  export default {
    data () {
      return {
        headers: [
          { text: 'Nombre', value: 'nombrecomida' },
          { text: 'Precio', value: 'precio' },
          { text: 'Cantidad', value: 'cantidad' },
          { text: 'Descripcion', value: 'descripcion' },
          
        ],
        productos
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>