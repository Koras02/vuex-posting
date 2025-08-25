import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          customBlue: "#3f51b5",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#FFCDD2",
        },
      },
    },
  },
});
