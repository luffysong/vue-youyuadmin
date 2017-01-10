import Vue from 'vue';
import * as types from '../types';

const initState = {
  loading: false,
  data: {
    data: {},
    type: '',
    params: {},
  },
};

const getters = {
  [types.TransferDetailData]: state => state.data,
};

const actions = {
  [types.TRANSFERDETAIL_REQ]({ commit }, params) {
    const url = `http://localhost:10001/static/transferdetail.json?id=${params.id}`;
    commit(types.TRANSFERDETAIL_REQ);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.TRANSFERDETAIL_SUC, {
          type: params.type,
          data: data.body.data,
          params,
        });
      }
    }, () => {
      commit(types.TRANSFERDETAIL_ERR, {});
    });
  },
  [types.TRANSFERDETAIL_SUC]({ commit }, data) {
    commit(types.TRANSFERDETAIL_SUC, data);
  },
  [types.TRANSFERDETAIL_ERR]({ commit }, data) {
    commit(types.TRANSFERDETAIL_ERR, data);
  },
};

const mutations = {
  [types.TRANSFERDETAIL_REQ](state) {
    state.loading = true;
  },
  [types.TRANSFERDETAIL_SUC](state, data) {
    state.loading = false;
    state.data = data;
  },
  [types.TRANSFERDETAIL_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
