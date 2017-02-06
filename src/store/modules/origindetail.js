/**
 * Internal dependencies
 */
// import Vue from 'vue';
import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  detail: {},
};

// const getters = {
//   [types.OriginListPENDING]: state => state.data.PENDING,
// };

const actions = {
  [types.ORIGINDETAIL_REQ]({ commit }, params) {
    const { id, sendData } = params;
    commit(types.ORIGINDETAIL_REQ);
    server.getQuotedDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.ORIGINDETAIL_SUC, {
          resdata: res.body.data,
        });
      }
    });
  },
};

const mutations = {
  [types.ORIGINDETAIL_REQ](state) {
    state.loading = true;
  },
  [types.ORIGINDETAIL_SUC](state, data) {
    state.loading = false;
    state.detail = data.resdata;
  },
  [types.ORIGINDETAIL_ERR](state) {
    state.loading = false;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
