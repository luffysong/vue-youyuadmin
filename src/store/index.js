/**
 * External dependencies
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

/**
 * Internal dependencies
 */
import * as actions from './actions';
import * as mutations from './mutations';
// Modules
import sidebar from './modules/sidebar';
import originlist from './modules/originlist';
import transferlist from './modules/transferlist';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  mutations,
  modules: {
    sidebar,
    originlist,
    transferlist,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
