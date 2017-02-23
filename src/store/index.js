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
import origindetail from './modules/origindetail';
import transferlist from './modules/transferlist';
import transferdetail from './modules/transferdetail';
import projectlist from './modules/projectlist';
import projectdetail from './modules/projectdetail';
import projectcreate from './modules/projectcreate';
import order from './modules/order';
import tradelist from './modules/tradelist';
import tradedetail from './modules/tradedetail';
import investor from './modules/investor';
import usermanage from './modules/usermanage';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  mutations,
  modules: {
    dict,
    sidebar,
    originlist,
    origindetail,
    transferlist,
    transferdetail,
    projectlist,
    projectdetail,
    projectcreate,
    order,
    tradelist,
    tradedetail,
    investor,
    usermanage,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
