import Vue from "vue";
import App from "./App.vue";

import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";

import VModal from "vue-js-modal";
Vue.use(VueSweetalert2);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
