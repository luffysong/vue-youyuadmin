import Vue from 'vue';
import * as types from '../types';

const initState = {
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
  [types.TransferListPENDING]: state => state.data.PENDING,
  [types.TransferListLISTED]: state => state.data.LISTED,
  [types.TransferListCOMPLETE]: state => state.data.COMPLETE,
  [types.TransferListINVALID]: state => state.data.INVALID,
  [types.TransferListREJECT]: state => state.data.REJECT,
};

const actions = {
  [types.TRANSFERLIST_REQ]({ commit }, params) {
    const url = `http://localhost:10001/static/transfer.json?type=${params.type}&page=${params.page}&keyword=${params.keyword}`;
    commit(types.TRANSFERLIST_REQ);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.TRANSFERLIST_REQ_SUC, {
          type: params.type,
          page: data.body.data.current_page,
          total: data.body.data.total,
          items: data.body.data.data,
          params,
        });
      }
    }, () => {
      commit(types.TRANSFERLIST_REQ_ERR, {

      });
    });
  },
  [types.TRANSFERLIST_REQ_SUC]({ commit }, data) {
    commit(types.TRANSFERLIST_REQ_SUC, data);
  },
  [types.TRANSFERLIST_REQ_ERR]({ commit }, data) {
    commit(types.TRANSFERLIST_REQ_ERR, data);
  },
};

const mutations = {
  [types.TRANSFERLIST_REQ](state) {
    state.loading = true;
  },
  [types.TRANSFERLIST_REQ_SUC](state, data) {
    state.loading = false;
    state.data[data.params.type] = data;
  },
  [types.TRANSFERLIST_REQ_ERR](state, data) {
    state.loading = false;
    state.data[data.params.type] = data;
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
