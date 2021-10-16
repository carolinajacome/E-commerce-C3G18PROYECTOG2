<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-4.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Encuentra novedades cada semana</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-2.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong> </strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-1.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong> </strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">
        Aprende sobre Moda
      </p>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-10.jpg')"
            >
              <v-card-title>Tendencias 2022</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Fashion revival </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
               El gran responsable de este revival fashion ha sido Hedi Slimane que, en su colección Spring summer 2021 para Celine, emuló a la princesa convirtiendo este mix en una de las grandes estrellas de su desfile. El diseñador es –por méritos propios– el nuevo Rey Midas de la industria: todas sus propuestas se convierten automáticamente en must. Así que, como era de esperar, durante la pasada primavera las redes sociales se inundaron de blazers oversize y gorras. Sin embargo, este fue solo el comienzo.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4 col-sm-3 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-11.jpg')"
            >
              <v-card-title
                >¿Por qué te gustan tanto de las marcas de alta
                costura?</v-card-title
              >
            </v-img>

            <v-card-subtitle class="pb-0"> Tendecias </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
               Esta temporada, las líneas Prefall de las firmas de lujo recogen el testigo y se suman a esta tendencia, dándole un twist (cada una con su sello). Este dúo aparece en infinitas versiones, desde en total black y con cortes maximalistas al estilo de Balenciaga, a las mezclas color block de Philosophy di Lorenzo Serafini, el animal print de Maria Grazia Chiuri para Dior o el minimalismo con aires parisinos de Balmain.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4 col-sm-3 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-12.jpg')"
            >
              <v-card-title>Trucos de moda</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Grandes tendencias</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Las súper modelos son, sin duda, los grandes referentes en esta tendencia. Tanto es así que, en el imaginario colectivo, la combinación de las gorras de béisbol y las americanas oversize describe a la perfección lo que se entiende como el uniforme fashion de las tops. Desde la inspiración clásica de Elsa Hosk –con jeans de corte recto y deportivas XL– al mix en rosa chicle de Bella Hadid, siempre fiel a su estilo alternativo.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-13.jpg')"
            >
              <v-card-title
                >Las 10 tendencias en moda de esta temporada</v-card-title
              >
            </v-img>

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
              Las it-girls y expertas en moda no han tardado en sumarse a este must. En lo que a las gorras se refiere, hay una clara favorita: el emblemático diseño de los New York Yankees. Esta es, sin duda, la más buscada. ¿En cuanto al resto del outfit? Sobre el asfalto lo hemos visto con shorts masculinos, leggins o, por supuesto, vaqueros, con botas y sneakers, camisetas o cropped tops... Todo vale. Eso sí, si quieres sacar nota e incorporar un toque maestro, añade sobre los hombros un jersey anudado al cuello: será el broche de oro a un look perfecto.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-14.jpg')"
            >
              <v-card-title>Top 10 Fashion of the Week</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">¿Comida real?</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
               Si a estas alturas de la vida no has escuchado hablar de la corriente ‘real fooding’, no estás vivo. Todo comenzó cuando Carlos Ríos, “dietista-nutricionista inconformista” (como así se define en su web), comenzó a divulgar la corriente a través de sus redes sociales, a la que sumaron cientos de miles de seguidores.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/post">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="require('../../assets/images/blog/img-15.jpg')"
            >
              <v-card-title>Top 10 marcas de moda</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">¿Por qué la polémica?</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Si por algo se ha caracterizado Carlos Ríos es por la forma de moralizar con la comida y por la facilidad que tiene de crear polémica, algo que también le ha servido para crear un hate muy particular. No es nuevo que Ríos, además, la emprenda con sus colegas de profesión incluso con profesionales del periodismo, mediante campañas de desprestigio y boicot a la mínima. Y no ha sido menos tras lanzar la famosa crema de cacao.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Leer más
              </v-btn>
            </v-card-actions>
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
