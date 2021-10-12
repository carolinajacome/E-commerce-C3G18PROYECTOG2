<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="d-flex justify-space-between" style="width: 100%">
        <a href="/" class="white--text logo" style="text-decoration: none">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="50"
            max-width="50"
            :src="require('../../assets/logo.png')"
          ></v-img>
        </a>
        <a href="/" class="blog-header-logo">JFOURJEANS</a>
        <div>
          <v-btn href="/login" icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-btn  href="/cart" icon>
            <v-badge content="2" value="2" color="primary" overlap>
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </div>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-bottom-navigation :value="value" color="primary" horizontal>
        <v-btn href="/">
          <span>Inicio</span>
        </v-btn>
        <v-btn href="/women">
          <span>Mujer</span>
        </v-btn>
        <v-btn href="/men">
          <span>Hombre</span>
        </v-btn>
        <v-btn href="/promotions">
          <span>Promociones</span>
        </v-btn>
        <v-btn href="/blog">
          <span>Blog</span>
        </v-btn>
        <v-btn href="/contact-us">
          <span>Contacto</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>

    <router-view />

    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <div class="my-4">
          <v-row>
            <a
              href="/quienes-somos"
              class="white--text pt-0"
              style="text-decoration: none"
            >
              <p class="mt-2 ml-5 ">Nosotros</p>
            </a>
          </v-row>

          <v-row>
            <a
              href="/Terminos-y-Condiciones"
              class="white--text pt-0"
              style="text-decoration: none"
            >
              <p class="ml-5">Términos y Condiciones</p>
            </a>
          </v-row>

          <v-row>
            <a
              href="/Politica-tratamiento-datos"
              class="white--text align-end"
              style="text-decoration: none"
            >
              <p class="ml-5">Política de Tratamiento de datos personales</p>
            </a>
          </v-row>
        </div>

        <v-divider color="#fff"></v-divider>

        <v-card-text class="white--text">
          Copyright &copy; {{ new Date().getFullYear() }} —
          <strong>JFOURJEANS</strong>. Todos los derechos reservados
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
};
</script>

<style scoped>
.logo {
  margin-top: 5px;
}

.blog-header-logo {
  color: #fff;
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-header-logo:hover {
  text-decoration: none;
}
</style>
