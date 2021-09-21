<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              :src="require('../../assets/img/home/slider1.jpg')"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../assets/img/home/slider2.jpg')"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../assets/img/home/slider3.jpg')"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../assets/img/home/slider4.jpg')"
            >
            </v-carousel-item>

          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">Jean JFOUR REF218</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">$75.000 <del style="" class="subtitle-1 font-weight-thin">$85.000</del></p>
              <v-spacer></v-spacer>
             
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
             Jean 3 Botones Sin Bolsillos Y Doble Relojera

                Tela: Piel de Durazno

                Tiro: Alto /  Bota: Tubo

                Tono: Azul Zafiro
            </p>
            <p class="title">Talla</p>
            <v-radio-group v-model="row" row>
              <v-radio label="6" value="6"></v-radio>
              <v-radio label="8" value="8"></v-radio>
              <v-radio label="10" value="10"></v-radio>
              <v-radio label="12" value="12"></v-radio>
              <v-radio label="14" value="14"></v-radio>
            <v-radio label="16" value="16"></v-radio>
            </v-radio-group>
            <p class="title">ITEMS</p>

            <v-text-field
                outlined
                style="width:100px"
                :value="1"
                dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense><v-icon>mdi-cart</v-icon> Agregar al carrito</v-btn>
            <v-btn class="ml-4" outlined tile>Agregar a la lista de deseos</v-btn>

          </div>

        </di>
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab >Descripción</v-tab>
            <v-tab >Materiales</v-tab>
           
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                JEAN CLÁSICO AZUL
                 Composición: 98 % Algodón 2 % Elastano 
                 Cuidados del JEAN CLÁSICO AZUL CON CORREA: 
                 – No dejar en remojo.
                  – Lavar a mano. 
                  – No secar al sol directo. 
                  – No usar blanqueador. 
                  – En caso de usar plancha, usar a temperatura media. 
                  Los procesos son únicos y exclusivos de la marca, por lo tanto se aconseja seguir detalladamente los cuidados 
                  para garantizar su calidad. 
                  Políticas de envío para el JEAN CLÁSICO AZUL: Los pedidos a nivel nacional tardan entre 3 a 8 días hábiles en 
                  llegar a su ciudad destino.
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
             Algodón 98% elastano 2%
            REGISTRO SIC: 805003626
            PAÍS ORIGEN: COLOMBIA
            NOMBRE FABRICANTE: STF GROUP S.A – NIT. 805003626-4

              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true"
              >
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title><v-rating v-model="rating" class="" background-color="warning lighten-3"
                                                                                           color="warning" dense></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
          <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                     :src="require('../../assets/img/shop/5.jpg')"
                    >
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Baggit, Zara, Fossil</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/img/shop/5.jpg')"
                    >
                      <v-card-title>T-Shirt </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 50%</div>
                      <div>Zara, Selected, Celio</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/img/shop/5.jpg')"
                    >
                      <v-card-title>Jeans </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Jack & Jones, Levis</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/img/shop/5.jpg')"
                    >
                      <v-card-title>Shirts </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/img/home/deal4.jpg')"
                    >
                      <v-card-title>Shoes </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../../assets/img/shop/3.jpg')"
                    >
                      <v-card-title>Jackets </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">Envíos Nacionales</h3>
                <p class="font-weight-thin">Envío gratis a partir de $100.000</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">Servicio de pago contraentrega</h3>
                <p class="font-weight-thin">Recibe en menos 4 días en   ciudades principales</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">+57-322-3658-208</h3>
                <p class="font-weight-thin">Atención Personalizada por WhatsApp</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            rating:4.5,
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_home',
                },
                {
                    text: 'Clothing',
                    disabled: false,
                    href: 'breadcrumbs_clothing',
                },
                {
                    text: 'Jeans',
                    disabled: true,
                    href: 'breadcrumbs_shirts',
                },
            ],
            item: 5,
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Lorem ipsum dolor?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                        "\n",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: ""
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
            ],
        }),
    }
</script>
