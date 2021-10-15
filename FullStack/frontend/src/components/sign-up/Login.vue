<template>
  <v-app>
    <v-container
      class="cuadro"
      v-model="contain"
      persistent
      outlined
      color="#F1F1F1"
    >
      <div>
        <h1 class="title">INICIO DE SESIÓN</h1>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="contraseña"
                  :rules="contraseñaRules"
                  label="Contraseña"
                  required
                  :append-icon="show1 ? 'eye' : 'eye-off'"
                  :type="show1 ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center" cols="12">
                <v-btn
                  rounded
                  large
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate()"
                >
                  Iniciar sesion
                </v-btn>
              </v-col>
              <div class="container">
                ¿No posees una cuenta? <a href="/register">¡Regístrate!</a>
              </div>
            </v-row>
          </v-form>
        </v-card-text>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { getEmail } from "../../controllers/Register.contr";

export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail requerido",
      (v) => /.+@.+\..+/.test(v) || "El E-mail debe ser válido",
    ],
    contraseña: "",
    contraseñaRules: [
      (v) => !!v || "Contraseña requerida",
      (v) => (v && v.length >= 8) || "Mínimo 8 caracteres",
    ],
  }),

  methods: {
    validarDatos() {
      const email = this.email;
      getEmail(email)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
    validate() {
      if (this.$refs.form.validate() === true) {
        this.validarDatos();
      }
    },
  },
};
</script>

<style>
.title {
  color: #234351;
  font-style: normal;
  text-align: center;
}
.cuadro {
  width: 600px;
  height: 360px;
  padding: 15px;
  margin-top: 100px;
  border: 2px solid #234351;
  background-color: #fffbfe;
  justify-content: center;
}
</style>
