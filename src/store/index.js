/**
 * External dependencies
 */
import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Internal dependencies
 */
import { initialState, mutations } from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: initialState,
  mutations,
});

export default store;
