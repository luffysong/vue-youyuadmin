/**
 * External dependencies
 */
import 'animate.css';
import 'normalize.css';
import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import NProgress from 'vue-nprogress';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import 'element-ui/lib/theme-default/index.css';

/**
 * Internal dependencies
 */
import App from './App';
import store from './store';
import router from './router';
import * as filters from './filters';

Vue.use(Vuex);
Vue.use(Element);
Vue.use(NProgress);
Vue.use(VueResource);

sync(store, router);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// Enable devtools
Vue.config.devtools = true;

// Set Nprogress Container
const nprogress = new NProgress({ parent: '.nprogress-container' });

router.beforeEach((route, redirect, next) => {
  next();
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  nprogress,
  ...App,
}).$mount('#app');
