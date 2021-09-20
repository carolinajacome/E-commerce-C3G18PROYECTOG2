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
          <span>Home</span>
        </v-btn>
        <v-btn href="/women">
          <span>Women</span>
        </v-btn>
        <v-btn href="/men">
          <span>Men</span>
        </v-btn>
        <v-btn href="/promotions">
          <span>Promotions</span>
        </v-btn>
        <v-btn href="/blog">
          <span>Blog</span>
        </v-btn>
        <v-btn href="/contact-us">
          <span>Contact</span>
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

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider color="#fff"></v-divider>

        <v-card-text class="white--text">
          Copyright &copy; {{ new Date().getFullYear() }} —
          <strong>JFOURJEANS</strong>. All Rights Reserved
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
