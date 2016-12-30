/**
 * Internal dependencies
 */
import * as types from '../types';

const initialState = {
  show: true,
  data: [],
};

const getters = {};

const actions = {
  hideSidebar({ commit }) {
    commit(types.HIDE_SIDEBAR);
  },
  toggleSidebar({ commit }) {
    commit(types.TOGGLE_SIDEBAR);
  },
  setSidebarData({ commit }, data) {
    commit(types.SET_SIDEBAR_DATA, data);
  },
};

const mutations = {
  [types.HIDE_SIDEBAR](state) {
    state.show = false;
  },
  [types.TOGGLE_SIDEBAR](state) {
    state.show = !state.show;
  },
  [types.SET_SIDEBAR_DATA](state, data) {
    state.show = true;
    state.data = data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
