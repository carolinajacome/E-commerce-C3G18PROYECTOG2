import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#196b9c",
        secondary: "#196b9c",
        accent: "#3AE3D6",
        error: "#f44336",
        info: "#2d3753",
        success: "#7a904a",
        warning: "#f78012",
        grey: "#6c757d",
        white: "#fff",
        white2: "#ffffff"
      },
    },
  },
});
