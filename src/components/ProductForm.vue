<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col >
          <v-text-field
            v-model="nombrecomida"
            :rules="nameRules"
            label="Nombre Comida"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-text-field
            v-model="precio"
            type="number"
            :rules="priceRules"
            :counter="10"
            label="Precio"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-text-field
            v-model="cantidad"
            type="number"
            :rules="priceRules"
            :counter="10"
            label="Cantidad"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-text-field
            v-model="descripcion"
            label="Descripcion"
            :rules="descripcionRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate()">
        Enviar
      </v-btn>
      <v-btn
      color="error"
      class="mr-4"
      @click="reset()"
    >
      Reiniciar Formulario
    </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import productos from '../assets/json/productos.json'

export default {
  data: () => ({
    valid: false,
    nombrecomida: "",
    precio:"",
    descripcion: "",
    cantidad:"",
    nameRules: [(v) => !!v || "El nombre es obligatorio"],
    descripcionRules: [(v) => !!v || "La descripcion es obligatoria"],
    priceRules: [(v) => !!v ||  "El precio no puede ser menor a 0"],
    productos
    
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      this.agregar();
    },
    reset() {
        this.$refs.form.reset()
    },
    agregar(){
      const newTarea = {
        nombrecomida: this.nombrecomida,
        precio: this.precio,
        cantidad: this.cantidad,
        descripcion: this.descripcion,
      };
      this.productos.push(newTarea);
      this.reset()

    },

  },
};
</script>

<style lang="scss" scoped></style>
