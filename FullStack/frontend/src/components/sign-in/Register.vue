<template>
  <v-container
    class="conten"
    v-model="contain"
    persistent
    outlined
    color="#F1F1F1"
  >
    <div>
      <h1 class="title">Registro de Usuario</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          class="name"
          v-model="name"
          :counter="16"
          :rules="nameRules"
          label="Nombre(s)"
          required
        ></v-text-field>

        <v-text-field
          class="last_name"
          v-model="last_name"
          :counter="16"
          :rules="last_nameRules"
          label="Apellido(s)"
          required
        ></v-text-field>

        <v-text-field
          class="email"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          class="password"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Contraseña"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          class="password2"
          v-model="password2"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules2.required, rules2.min]"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirmar contraseña"
          hint="At least 8 characters"
          counter
          @click:append="show2 = !show2"
        ></v-text-field>

        <v-btn
          @click:append="registerUser() && validate()" 
        >
          Crear cuenta
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import {createUser} from "../../controllers/Register.contr";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nombre(s) requerido",
      (v) =>
        (v && v.length <= 16) ||
        "Nombre(s) debe contener menos de 16 caracteres",
    ],
    last_name: "",
    last_nameRules: [
      (v) => !!v || "Apellido(s) es requerido",
      (v) =>
        (v && v.length <= 16) ||
        "Apellido(s) debe contener menos de 16 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
    },
    show2: false,
    password2: "",
    rules2: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
    }
  }),

  methods: {
    registerUser(){
      const user = {
        firstName: this.name,
        lastName: this.last_name,
        email: this.email,
        password: this.password
      };
      createUser(user)
      .then(() =>{
        console.log("Registrado correctamente")
      })
      .catch((err) => console.error(err));
    },
    validate() {
      this.$refs.form.validate();
    }
  },
};
</script>

<style>
.title {
  color: #234351;
  font-style: normal;
  text-align: center;
}

.conten {
  margin-top: 100px;
  width: 600px !important;
  padding: 30px !important;
  border: 2px solid #234351;
  background-color: #fffbfe;
  justify-content: center;
}

.name,
.last_name,
.email,
.password,
.password2 {
  margin-bottom: 15px;
}

.mr-4 {
  margin: 5px 0 10px 0;
}
</style>
