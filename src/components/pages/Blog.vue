<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item :src="require('../../assets/images/home/carousel/slider-4.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Encuentra novedades cada semana</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../../assets/images/home/carousel/slider-2.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong> </strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      
      <v-carousel-item :src="require('../../assets/images/home/carousel/slider-1.jpg')">
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
Aprende sobre moda      </p>
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

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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
              <v-card-title>¿Por qué te gustan tanto de las marcas de alta costura?</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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
              <v-card-title>Las 10 tendencias en moda de esta temporada</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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
              <v-card-title>Top 10 Fashion of the Week</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Lorem ipsum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                venenatis cras sed felis eget velit aliquet sagittis id. Enim
                praesent elementum facilisis leo vel fringilla est ullamcorper.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Read More
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
      value: 4
    };
  }
};
</script>
