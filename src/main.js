import Vue from 'vue';
import App from './App.vue';
import './index.css';

import Unicon from "vue-unicons";
import { uniMouseAlt, uniAngleDown, uniImageV } from "vue-unicons/src/icons";
import { ObserveVisibility } from "vue-observe-visibility";

Unicon.add([uniMouseAlt, uniAngleDown, uniImageV]);
Vue.use(Unicon);
Vue.directive("observe-visibility", ObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
