<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-4.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>J FOUR JEANS</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">
        ¿Quiénes Somos?
      </p>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-1">
          <v-card class="mx-auto" max-width="1200">
            <v-card-text class="text--primary">
              <div>
                J FOUR JEANS es la marca de la empresa Cardani Stylos la cual
                está comprometida con mujeres y hombres que desean expresar
                mediante su atuendo cotidiano parte de su estilo personal, con
                el fin de impactar de manera positiva su rutina.
                <v-list>
                  Nuestra misión es proporcionar seguridad, autoconfianza y
                  sensualidad a la hora de vestir.</v-list
                >

                Nuestra historia comienza en 1997, en la ciudad de Cúcuta, en
                Colombia identificados como Cardani Stylos como una empresa
                familiar de confección infantil y blusas para dama, el enfoque
                principal era la producción y venta al mayor. Con los cambios
                del mercado y avances al día de hoy mantenemos la tradición y
                seguimos siendo una empresa familiar dedicados a la confección
                de jeans para dama y caballero, lo cual nos ha ofrecido nuevos
                retos y puesto en marcha hacia la máxima calidad y comodidad en
                una prenda. Actualmente Cardani Stylos es la empresa que
                respalda nuestra marca J FOUR JEANS. Somos un equipo que trabaja
                en cada detalle para lograr en cada prenda el acabado ideal,
                nuestro estilo es que todos expresar su estilo a través de
                nuestra marca para cualquier ocasión estando cómodos y seguros
                de como lucen.
                <v-list></v-list>

                <v-list-item-title>
                  Historia:
                </v-list-item-title>
                <v-list></v-list>
                <v-list>1999 Registro en Cámara de comercio. </v-list>
                <v-list
                  >1999 Apertura del local H6 del centro comercial La Estrella.
                  Se confeccionaba ropa infantil y pijamas.
                </v-list>
                <v-list
                  >2006: Confección de blusas para dama y niña. Venta al mayor
                  (Clientes en su mayoría de Venezuela)
                </v-list>
                <v-list
                  >2010: Se comienza a confeccionar Jeans para dama
                </v-list>

                <v-list
                  >2016 Inscripción de marca J FOUR JEANS en la Superintendencia
                  de Industria y Comercio.</v-list
                >
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
    };
  },
};
</script>
