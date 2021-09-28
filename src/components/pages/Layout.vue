<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="50"
            max-width="50"
            :src="require('../../assets/logo.png')"
          ></v-img>
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn href="/login" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge content="2" value="2" color="primary" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
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
    </v-content>
    <router-view />

    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>


     
    
      <a href="/quienes-somos"  class="white--text pt-0" style="text-decoration: none">
          <p> Nosotros </p>
        </a>
    
        
      <a href="/Terminos-y-Condiciones"  class="white--text pt-0" style="text-decoration: none">
          <p> Términos y Condiciones</p>
        </a>
        
      <a href="/Politica-tratamiento-datos"  class="white--text align-end" style="text-decoration: none" >
          <p> Política de Tratamiento de datos personales </p>
        </a>
              
    

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
  data: () => ({ value: 0 })
};
</script>
