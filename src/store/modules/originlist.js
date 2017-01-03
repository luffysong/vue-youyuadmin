/**
 * Internal dependencies
 */
import Vue from 'vue';
import * as types from '../types';

const initialState = {
  loading: false,
  data: {
    PENDING: {},
    LISTED: {},
    COMPLETE: {},
    INVALID: {},
    REJECT: {},
  },
};

const getters = {
  [types.OriginListPENDING]: state => state.data.PENDING.body,
  [types.OriginListLISTED]: state => state.data.LISTED.body,
  [types.OriginListCOMPLETE]: state => state.data.COMPLETE.body,
  [types.OriginListINVALID]: state => state.data.INVALID.body,
  [types.OriginListREJECT]: state => state.data.REJECT.body,
};

const actions = {
  [types.ORIGINLIST_REQ]({ commit }, params) {
    const url = `http://localhost:10001/static/origin.json?${params.TYPE}=${params.TYPEVAL}`;
    commit(types.ORIGINLIST_REQ);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      commit(types.ORIGINLIST_REQ_SUC, {
        data,
        params,
      });
    }, (err) => {
      commit(types.ORIGINLIST_REQ_ERR, {
        data: err,
        params,
      });
    });
  },
  [types.ORIGINLIST_REQ_SUC]({ commit }, data) {
    commit(types.ORIGINLIST_REQ_SUC, data);
  },
  [types.ORIGINLIST_REQ_ERR]({ commit }, data) {
    commit(types.ORIGINLIST_REQ_ERR, data);
  },
};

const mutations = {
  [types.ORIGINLIST_REQ](state) {
    state.loading = true;
  },
  [types.ORIGINLIST_REQ_SUC](state, data) {
    state.loading = false;
    state.data[data.params.TYPEVAL] = data.data;
  },
  [types.ORIGINLIST_REQ_ERR](state, data) {
    state.loading = false;
    state.data[data.params.TYPEVAL] = data.data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
