<template>
  <v-container>
    <v-content>
      <div class="staticHero">
        <v-img
          class="logo"
          :src="require('../../assets/images/contact/contact_us_banner.jpg')"
        ></v-img>
      </div>
      <div class="block">
        <v-container>
          <v-row no-gutters>
            <v-col :key="n" cols="6" sm="6" class="d-flex pa-2">
              <span class="group pa-2">
                <v-icon>Deseo</v-icon>
                <v-icon>información</v-icon>
                <v-icon>sobre... </v-icon>
              </span>
            </v-col>
            <v-col :key="n" cols="6" sm="6">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                action="https://submit-form.com/tMnpyl4y"
              >
                <v-text-field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  v-model="message"
                  :rules="messageRules"
                  label="Mensaje"
                  required
                ></v-textarea>
                <v-btn
                  type="submit"
                  :disabled="!valid"
                  color="primary"
                  class="mr-4"
                  @click="validate"
                  >Enviar</v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="googlemap mt-10 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.110857739074!2d-72.50782048476677!3d7.883468908045121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664543cde0afc1%3A0x3a0c02cdac172ce4!2sCentro%20Comercial%20La%20Estrella!5e0!3m2!1ses!2sco!4v1632234424375!5m2!1ses!2sco"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </v-content>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useFormspark } from "@formspark/use-formspark";
export default {
  setup() {
    const message = ref("");

    const [submit, submitting] = useFormspark({
      formId: "your-form-id",
    });

    const onInput = (e) => {
      message.value = e.target.value;
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      await submit({ message: message.value });
      message.value = "";
    };

    return {
      message,
      onInput,
      onSubmit,
      submitting,
    };
  },
};
</script>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.logo {
  height: 400px;
  width: 100%;
  object-fit: cover;
}

.block {
  margin: 50px;
  border: 1px solid #000;
}
</style>
