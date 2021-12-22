<template>
<div>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="defaultproduct.nombrecomida"
            :rules="nameRules"
            label="Nombre Comida"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="defaultproduct.precio"
            type="number"
            :rules="priceRules"
            :counter="10"
            label="Precio"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="defaultproduct.cantidad"
            type="number"
            :rules="priceRules"
            :counter="10"
            label="Cantidad"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="defaultproduct.descripcion"
            label="Descripcion"
            :rules="descripcionRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate()"
      >
        Enviar
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset()">
        Reiniciar Formulario
      </v-btn>
    </v-container>
     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
  </div>


</template>

<script>
//import productos from '../assets/json/productos.json'
import axios from "axios";

export default {
  data: () => ({
    valid: false,
     snackbar: false,
      snackText: '',
      timeout: 3000,
    //   nombrecomida: "",
    // precio:"",
    //   descripcion: "",
    //  cantidad:"",
    nameRules: [(v) => !!v || "El nombre es obligatorio"],
    descripcionRules: [(v) => !!v || "La descripcion es obligatoria"],
    priceRules: [(v) => !!v || "El precio no puede ser menor a 0"],
    defaultproduct: {
      nombrecomida: "",
      precio: "",
      descripcion: "",
      cantidad: "",
    },
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      this.addFood();
    },
    reset() {
      this.$refs.form.reset();
    },
    /*     agregar() {
      const newTarea = {
        nombrecomida: this.nombrecomida,
        precio: this.precio,
        cantidad: this.cantidad,
        descripcion: this.descripcion,
      };
      this.productos.push(newTarea);
      this.reset();
    }, */

    addFood() {
      axios
        .post(
          "https://61b24f08c8d4640017aaf359.mockapi.io/comidas",
          this.defaultproduct,
          console.log(this.defaultproduct)
        )
        .then((response) => {
          console.table(response.data);
          this.snackText = "Producto Cargado Con exito"
          this.snackbar = true
          this.reset();
        })
        .catch((err) => {
          console.error(`${err}`);
          this.snackText = `${err}`
          this.snackbar = true
          this.reset();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
