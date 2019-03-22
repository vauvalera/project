import Vue from 'vue';
import VueSVGIcon from 'vue-svgicon';
import App from './App.vue';
import store from './store/index';
import './assets/compiled-icons';

Vue.config.productionTip = false;
Vue.use(VueSVGIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
