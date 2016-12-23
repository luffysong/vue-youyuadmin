/**
 * External dependencies
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

/**
 * Internal dependencies
 */
import App from './App';

Vue.use(Vuex);
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
});
