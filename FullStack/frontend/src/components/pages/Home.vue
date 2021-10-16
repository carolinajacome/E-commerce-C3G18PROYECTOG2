<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-1.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Upto 60% + Extra 10%</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-2.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Upto 60% + Extra 10%</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-3.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Upto 60% + Extra 10%</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../../assets/images/home/carousel/slider-4.jpg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Upto 60% + Extra 10%</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <br />
    <div class="pl-4 pr-4 row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('../../assets/images/home/img-women.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Mujer</h1>
            <div class="text-center">
              <v-btn href="/women" class="white--text " outlined
                >Compra ahora</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('../../assets/images/home/img-men.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Hombre</h1>
            <div class="text-center">
              <v-btn href="/men" class="white--text" outlined
                >Compra ahora</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading ">PROMO DEL DÍA</v-card-title>
            <v-divider></v-divider>
            <br />
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/images/women/1.jpg')"
                    >
                      <v-card-title>Jeans dama </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>NUEVA COLECCIÓN DAMA</div>
                      <div>$50.000</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        href="/promotions"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        OBTÉN LA PROMO
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/images/women/12.jpg')"
                    >
                      <v-card-title>Blusas </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Descuento del 30%</div>
                      <div>$35.000</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        href="/promotions"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        OBTÉN LA PROMO
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/images/men/1.jpg')"
                    >
                      <v-card-title>Jeans </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Jean Clásico Caballero</div>
                      <div>$76.000</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        href="/promotions"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        OBTÉN LA PROMO
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/images/men/11.jpg')"
                    >
                      <v-card-title>Camisas </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Manga Larga</div>
                      <div>$59.999</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        href="/promotions"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        OBTÉN LA PROMO
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      value: 1,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
