<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
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
              <v-checkbox label="J FOUR" hide-details dense></v-checkbox>
              <v-checkbox label="STOPEL" hide-details dense></v-checkbox>
              <v-checkbox label="D-SEAL" hide-details dense></v-checkbox>
              <v-checkbox label="Industry" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Color</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="Blue" hide-details dense></v-checkbox>
              <v-checkbox label="Black" hide-details dense></v-checkbox>
              <v-checkbox label="Yellow" hide-details dense></v-checkbox>
              <v-checkbox label="Red" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Talla</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="XS" hide-details dense></v-checkbox>
              <v-checkbox label="S" hide-details dense></v-checkbox>
              <v-checkbox label="M" hide-details dense></v-checkbox>
              <v-checkbox label="L" hide-details dense></v-checkbox>
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
              <small>Showing 1-12 of 200 products</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              :key="pro.id"
              v-for="pro in products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-card-title>{{ pro.type }} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="
                          d-flex
                          transition-fast-in-fast-out
                          white
                          darken-2
                          v-card--reveal
                          display-3
                          white--text
                        "
                        style="height: 100%"
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
                        pro.name
                      }}</a>
                    </div>
                    <div>${{ pro.price }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
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
export default {
  data: () => ({
    range: [0, 10000],
    select: "Popularity",
    options: [
      "Default",
      "Popularity",
      "Relevance",
      "Price: Low to High",
      "Price: High to Low",
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
        text: "Men",
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
          { id: 1, name: "Jeans" },
          { id: 2, name: "Bermuda" },
          { id: 3, name: "Camisa" },
        ],
      },
    ],
    products: [
      {
        id: 1,
        name: "Jean oscuro",
        type: "Jean",
        price: "18.00",
        src: require("../../assets/images/men/1.jpg"),
      },
      {
        id: 2,
        name: "Jean Hielo",
        type: "Jean",
        price: "40.00",
        src: require("../../assets/images/men/2.jpg"),
      },
      {
        id: 3,
        name: "Denim",
        type: "Jean",
        price: "25.00",
        src: require("../../assets/images/men/3.jpg"),
      },
      {
        id: 4,
        name: "Jean negro",
        type: "Jean",
        price: "30.00",
        src: require("../../assets/images/men/4.jpg"),
      },
      {
        id: 5,
        name: "MANGO WINTER",
        type: "Bermuda",
        price: "50.00",
        src: require("../../assets/images/men/5.jpg"),
      },
      {
        id: 6,
        name: "SHIRT",
        type: "Bermuda",
        price: "34.00",
        src: require("../../assets/images/men/6.jpg"),
      },
      {
        id: 7,
        name: "TRUCKER JACKET",
        type: "Bermuda",
        price: "38.00",
        src: require("../../assets/images/men/7.jpg"),
      },
      {
        id: 8,
        name: "COATS",
        type: "Bermuda",
        price: "25.00",
        src: require("../../assets/images/men/8.jpg"),
      },
      {
        id: 9,
        name: "MANGO WINTER",
        type: "Camisa",
        price: "50.00",
        src: require("../../assets/images/men/9.jpg"),
      },
      {
        id: 10,
        name: "SHIRT",
        type: "Camisa",
        price: "34.00",
        src: require("../../assets/images/men/10.jpg"),
      },
      {
        id: 11,
        name: "TRUCKER JACKET",
        type: "Camisa",
        price: "38.00",
        src: require("../../assets/images/men/11.jpg"),
      },
      {
        id: 12,
        name: "COATS",
        type: "Camisa",
        price: "25.00",
        src: require("../../assets/images/men/12.jpg"),
      },
    ],
  }),
};
</script>
