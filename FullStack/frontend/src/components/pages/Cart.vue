<template>
  <div>
    <v-container class="contenedor">
      <p class="display-3 font-weight-light text-center pa-4">
        Carrito de Compra
      </p>
      <v-row>
        <div class="tableOrders container col-md-8">
          <v-col :cols="12" md="12" sm="12">
            <v-simple-table class="table_products">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Producto</th>
                    <th class="text-center">Precio (COP)</th>
                    <th class="text-center">Cantidad</th>
                    <th class="text-center">Total (COP)</th>
                  </tr>
                </thead>
                <tbody v-for="product in products" :key="product.id">
                  <tr>
                    <td>
                      <v-list-item key="1">
                        <v-list-item-content>
                          <v-list-item-title>{{
                            product.item
                          }}</v-list-item-title>
                          <v-list-item-subtitle
                            >Ref. {{ product.reference }}</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <td>{{ product.price }}</td>
                    <td>{{ quanty }}</td>
                    <td>{{ totalProduct }}</td>
                    <td>
                      <v-btn
                        elevation="2"
                        color="error"
                        @click="eliminar()"
                        small
                        >ELIMINAR</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </div>
        <div class="order col-4 col-md-4 container">
          <v-col :cols="12" md="12" sm="12">
            <div class="pay container">
              <p class="title_order headline">Orden</p>
              <p class="overline">
                Los costos de envío y adicionales se calculan en función de los
                valores que ingresó.
              </p>
              <v-simple-table class="table_order">
                <template v-slot:default>
                  <tbody>
                    <tr class="subtotal">
                      <td>Subtotal</td>
                      <td class="text-right">COP 160.00</td>
                    </tr>
                    <tr class="gastos_envio">
                      <td>Gastos de envío</td>
                      <td class="text-right">COP 10.00</td>
                    </tr>
                    <tr class="taza">
                      <td>Taza</td>
                      <td class="text-right">COP 5.00</td>
                    </tr>
                    <tr class="total">
                      <td><b>Total</b></td>
                      <td class="text-right"><b>COP 175.00</b></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div class="btn_pay text-center">
                <v-btn color="primary" class="mt-5">PROCEDER A PAGAR</v-btn>
              </div>
            </div>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAllProducts } from "../../controllers/ProductController";
export default {
  data() {
    return {
      img: "",
      title: "",
      subtitle: "",
      price: 0,
      quanty: 1,
      totalProduct: 0,
      totalOrder: 0,
      products: [],
    };
  },
  mounted() {
    getAllProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    calcularTotal() {},
    eliminar() {},
  },
};
</script>

<style scoped>
.contenedor {
  margin-bottom: 150px;
  color: rgba(0, 0, 0, 0.7);
}

.table_products {
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 5px;
}

.pt-10 {
  width: 65px;
}

.pay {
  padding: 40px;
  border: 1px solid rgb(240, 240, 240);
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.2);
  display: fixed;
}

.pay > .table_order {
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.pay > .title_order {
  text-align: center;
  font-size: 32px !important;
}

.pay > .btn_pay {
  margin-top: 15px;
}
</style>
