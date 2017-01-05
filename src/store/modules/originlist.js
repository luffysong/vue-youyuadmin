/**
 * Internal dependencies
 */
import Vue from 'vue';
import * as types from '../types';

const initialState = {
  loading: false,
  data: {
    PENDING: {
      type: 'PENDING',
      page: 1,
      total: 1,
      items: [],
      params: {},
    },
    LISTED: {
      type: 'LISTED',
      page: 1,
      total: 1,
      items: [],
      params: {},
    },
    COMPLETE: {
      type: 'COMPLETE',
      page: 1,
      total: 1,
      items: [],
      params: {},
    },
    INVALID: {
      type: 'INVALID',
      page: 1,
      total: 1,
      items: [],
      params: {},
    },
    REJECT: {
      type: 'REJECT',
      page: 1,
      total: 1,
      items: [],
      params: {},
    },
  },
};

const getters = {
  [types.OriginListPENDING]: state => state.data.PENDING,
  [types.OriginListLISTED]: state => state.data.LISTED,
  [types.OriginListCOMPLETE]: state => state.data.COMPLETE,
  [types.OriginListINVALID]: state => state.data.INVALID,
  [types.OriginListREJECT]: state => state.data.REJECT,
  [types.OriginListPage]: state => state.data.REJECT,
};

const actions = {
  [types.ORIGINLIST_REQ]({ commit }, params) {
    const url = `http://localhost:10001/static/origin.json?type=${params.type}&page=${params.page}&keyword=${params.keyword}`;
    commit(types.ORIGINLIST_REQ);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ORIGINLIST_REQ_SUC, {
          type: params.type,
          page: data.body.data.current_page,
          total: data.body.data.total,
          items: data.body.data.data,
          params,
        });
      }
    }, () => {
      commit(types.ORIGINLIST_REQ_ERR, {

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
    state.data[data.params.type] = data;
  },
  [types.ORIGINLIST_REQ_ERR](state, data) {
    state.loading = false;
    state.data[data.params.type] = data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
