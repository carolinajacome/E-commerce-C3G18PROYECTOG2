<template>
  <v-main>
    <header-app />
    <div>
      <v-container class="container">
        <h1>{{ isNew ? "Agregar un Nuevo" : "Editar" }} Producto</h1>
        <br />
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Id:"
              type="number"
              hide-details="auto"
              v-model="reference"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dc3545"> mdi-numeric </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Nombre:"
              :rules="nameRules"
              hide-details="auto"
              v-model="name"
            >
              <v-icon slot="prepend" color="#dc3545">
                mdi-package-variant
              </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Descripción:"
              :rules="nameRules"
              hide-details="auto"
              v-model="description"
            >
              <v-icon slot="prepend" color="#dc3545"> mdi-pen </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Cantidad:"
              type="number"
              hide-details="auto"
              v-model="stock"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dc3545"> mdi-numeric </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Precio :"
              type="number"
              hide-details="auto"
              v-model="pricein"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dc3545"> mdi-cash </v-icon>
            </v-text-field>
          </v-col>

         

          <v-col cols="12" sm="6">
            <v-text-field
              label="Categoría:"
              :rules="nameRules"
              hide-details="auto"
              v-model="category"
            >
              <v-icon slot="prepend" color="#dc3545">
                mdi-checkbox-multiple-blank
              </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-img max-heigth="300" :src="img"></v-img>
            <v-text-field label="URL de la imagen" v-model="img">
              <v-icon slot="prepend" color="#dc3545"> mdi-image</v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div class="botones">
        <v-btn
          tile
          class="rounded-pill"
          style="margin-right: 10px"
          dark
          color="#E65245"
          link
          href="/productlist"
        >
          <v-icon left wh> mdi-close-thick </v-icon>
          Cancelar
        </v-btn>

        <v-btn
          tile
          class="rounded-pill"
          dark
          color="#1089ff"
          @click="guardar()"
          v-if="isNew"
        >
          <v-icon left> mdi-note-check </v-icon>
          Guardar
        </v-btn>

        <v-btn
          tile
          dark
          class="rounded-pill"
          color="#dc3545"
          @click="actualizar()"
          v-if="!isNew"
        >
          <v-icon left> mdi-account-check </v-icon>
          Actualizar
        </v-btn>
      </div>
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="closeConfirmation()">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
      <br /><br /><br /><br />
    </div>
  </v-main>
</template>

<script>

import {
  getProduct,
  createProduct,
  updateProduct,
} from "../../controllers/ProductController";
export default {
  
  data() {
    return {
      id: "",
      item: "",
      description: "",
      stock: "",
      price:"",
      category: "",
      img: "",
      snackbar: false,
      snackbarText: "",
      isNew: true,
      nameRules: [
        (value) => !!value || "Campo Requerido.",
        (value) => (value && value.length >= 3) || "Escribe mínimo 3 carácteres",
      ],
      numberRules: [(value) => !!value || "Campo Requerido."],
    };
  },

  created() {
    const id = this.$route.params.id;
    if (id != undefined) {
      getProduct(id)
        .then((response) => {
          const product = response.data;
          this.id = product.id;
          this.item = product.item;
          this.description = product.description;
          this.stock = product.stock;
          this.price = product.price;
         
          this.category = product.category;
          this.img = product.img;

          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },

  methods: {
    guardar() {
      const product = {
        id: this.id,
        item: this.item,
        description: this.description,
        stock: this.stock,
        price: this.price,        
        category: this.category,
        img: this.img,
      };
      createProduct(product)
        .then(() => {
          this.openSuccesDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    actualizar() {
      if (
        this.id == undefined ||
        this.id == "" ||
        this.name == undefined ||
        this.name == "" ||
        this.stock == undefined ||
        this.stock == ""
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      }
      const product = {
        id: this.id,
        item: this.item,
        description: this.description,
        stock: this.stock,
        price: this.price,
       
        category: this.category,
        img: this.img,
      };
      updateProduct(this.id, product)
        .then(() => {
          this.openSuccesDialog(
            "Se ha actualizado el producto: " +
              this.item +
              " con Referencia:" +
              this.id
          );
        })
        .catch(() =>
          this.openErrorDialog("Ha ocurrido un error al actualizar el producto")
        );
    },
    openSuccesDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    openErrorDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    closeConfirmation() {
      this.snackbar = false;
      this.$router.push("/productlist");
    },
  },
};
</script>

<style>
.botones {
  float: right;
}
input {
  border-color: rgba(255, 255, 255, 0) !important;
}
.v-input__slot {
  margin-left: 20px;
}
.v-input__prepend-outer {
  margin-left: 30px;
}
.botones {
  text-decoration: none !important;
  padding-right: 10px;
  padding-top: 30px;
  float: right;
}
a:hover {
  text-decoration: none;
}
.v-main {
  padding: 50px 0px 0px !important;
}
h1 {
  text-align: center;
  font-weight: bold;
  color: #494949;
}
</style>