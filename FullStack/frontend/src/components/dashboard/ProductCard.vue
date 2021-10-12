<template>
  <v-card>
    <v-img :aspect-ratio="16 / 9" :src="imageUrl"></v-img>
    <v-card-title>{{ item.item }}</v-card-title>
    <v-card-subtitle><b>Precio:</b> {{ item.price }}</v-card-subtitle>
    <v-card-subtitle><b>Id:</b> {{ item.id }}</v-card-subtitle>
    <v-card-subtitle><b>Marca: </b> {{ item.mark }}</v-card-subtitle>
    <div class="categories">
      <v-chip v-for="category in item.categories" :key="category">{{
        category
      }}</v-chip>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" :to="'/products/' + item.code"> Editar </v-btn>
      <v-btn color="error" @click="eliminar()"> Eliminar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="js">
import { deleteProduct } from "../../controllers/ProductController";

export default {
  props: ["item"],
  methods: {
    editar() {
      this.$router.push(`/products/${this.item.code}`);
    },
    eliminar() {
      deleteProduct(this.item.code)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
  computed: {
    imageUrl() {
      return this.item.path_image == undefined
        ? "https://isocarp.org/app/uploads/2014/05/noimage.jpg"
        : require(`../../assets/images/${this.item.path_image}`);
    },
  },
};
</script>

<style scope>
.categories {
  display: flex;
  padding: 10px;
  justify-content: center !important;
  gap: 10px;
}
</style>
