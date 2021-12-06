<template>
  <v-form v-model="valid">
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
            v-model="descripcion"
            label="Descripcion"
            :rules="descripcionRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-file-input
            :rules="imagerules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Elige una imagen "
            prepend-icon="mdi-camera"
            label="Imagen"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Enviar
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    nombrecomida: "",
    precio:{type: Number},
    descripcion: "",
    nameRules: [(v) => !!v || "El nombre es obligatorio"],
    descripcionRules: [(v) => !!v || "La descripcion es obligatoria"],
    priceRules: [(v) => !!v ||  "El precio no puede ser menor a 0"],
    imagerules: [
      (value) =>
        !value || value.size < 2000000 || "La foto debe ser menor a 2 MB!",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
