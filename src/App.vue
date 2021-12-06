<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main class="ma-8">
      <v-row>
        <v-col cols="6">
          <ProductForm />
        </v-col>
        <v-col cols="6">
          <productList />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ProductForm from "./components/ProductForm.vue";
import productList from "./components/productList.vue";

export default {
  name: "App",

  components: {
    ProductForm,
    productList,
  },

  data: () => ({
    //
  }),
};
</script>
