<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filtrar por:</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-divider></v-divider>

            <v-card-title class="pb-0">Marca</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="J FOUR " hide-details dense></v-checkbox>
              <v-checkbox label="STOPEL" hide-details dense></v-checkbox>
              <v-checkbox label="POLO" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>

            <v-card-title class="pb-0">Color</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="Azul Oscuro" hide-details dense></v-checkbox>
              <v-checkbox label="Azul Claro" hide-details dense></v-checkbox>
              <v-checkbox label="Contaminado" hide-details dense></v-checkbox>
              <v-checkbox label="Navy" hide-details dense></v-checkbox>
              <v-checkbox label="Azul Hielo" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>

            <v-card-title class="pb-0">Talla</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="6" hide-details dense></v-checkbox>
              <v-checkbox label="8" hide-details dense></v-checkbox>
              <v-checkbox label="10" hide-details dense></v-checkbox>
              <v-checkbox label="12" hide-details dense></v-checkbox>
              <v-checkbox label="14" hide-details dense></v-checkbox>
              <v-checkbox label="16" hide-details dense></v-checkbox>
              <v-checkbox label="18" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title>Precio</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>

          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Mostrar 1 de 100 productos</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px;"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              :key="p.id"
              v-for="p in products"
            >
              <div v-if="p.category.name === 'Women'">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      class="white--text align-end"
                      :aspect-ratio="16 / 9"
                      height="200px"
                      :src="require(`../../assets/images/${p.path_image}`)"
                    >
                      <v-card-title>{{
                        p.category.subcategory[0].name
                      }}</v-card-title>
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          <v-btn v-if="hover" href="/product" class="" outlined
                            >VIEW</v-btn
                          >
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="text--primary">
                      <div>
                        <a href="/product" style="text-decoration: none">{{
                          p.item
                        }}</a>
                      </div>
                      <div>${{ p.price }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>

<script>
import { getAllProducts } from "../../controllers/ProductController";

export default {
  data: () => ({
    range: [0, 100000],
    select: "Talla",
    options: [
      "Default",
      "Talla",
      "Color",
      "Precio: Menor a mayor",
      "Precio: Mayor a menor",
    ],
    page: 1,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Clothing",
        disabled: false,
        href: "breadcrumbs_clothing",
      },
      {
        text: "Women",
        disabled: true,
        href: "breadcrumbs_shirts",
      },
    ],
    min: 0,
    max: 10000,
    items: [
      {
        id: 1,
        name: "Clothing",
        children: [
          { id: 5, name: "Jeans" },
          { id: 6, name: "Shorts" },
          { id: 7, name: "Blusas" },
        ],
      },
    ],
    products: [],
  }),
  mounted() {
    getAllProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((err) => console.error(err.response.data.message));
  },
};
</script>
