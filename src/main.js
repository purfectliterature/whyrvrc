import Vue from 'vue';
import App from './App.vue';
import './index.css';

import Unicon from "vue-unicons";
import {
  uniMouseAlt,
  uniAngleDown,
  uniImageV,
  uniArrowUpRight,
  uniFacebook,
  uniInstagram,
  uniRedditAlienAlt,
  uniYoutube,
  uniMapPin,
  uniPhone,
  uniAt,
  uniMap,
  uniArrowRight
} from "vue-unicons/src/icons";
import { ObserveVisibility } from "vue-observe-visibility";
import { tiktokIcon } from "@/customIcons";

import VueGtag from "vue-gtag";

Unicon.add([
  uniMouseAlt,
  uniAngleDown,
  uniImageV,
  uniArrowUpRight,
  uniFacebook,
  uniInstagram,
  uniRedditAlienAlt,
  uniYoutube,
  tiktokIcon,
  uniMapPin,
  uniPhone,
  uniAt,
  uniMap,
  uniArrowRight
]);
Vue.use(Unicon);
Vue.directive("observe-visibility", ObserveVisibility);

Vue.use(VueGtag, {
  config: { id: "G-CVS3HMG97W" }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
