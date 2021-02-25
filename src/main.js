import Vue from 'vue';
import App from './App.vue';
import './index.css';

import Unicon from "vue-unicons";
import { uniMouseAlt, uniAngleDown } from "vue-unicons/src/icons";

Unicon.add([uniMouseAlt, uniAngleDown]);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
