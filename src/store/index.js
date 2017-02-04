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
import dict from './modules/dict';
import sidebar from './modules/sidebar';
import originlist from './modules/originlist';
import transferlist from './modules/transferlist';
import transferdetail from './modules/transferdetail';
import projectlist from './modules/projectlist';
import projectdetail from './modules/projectdetail';
import order from './modules/order';
import investor from './modules/investor';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  mutations,
  modules: {
    dict,
    sidebar,
    originlist,
    transferlist,
    transferdetail,
    projectlist,
    projectdetail,
    order,
    investor,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
