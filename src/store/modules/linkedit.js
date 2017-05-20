import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  result: {},
};

const actions = {
  [types.LINKSEDIT_REQ]({ commit }, params) {
    const { id, sendData, callback } = params;
    commit(types.LINKSEDIT_REQ);
    server.updateLink({
      id,
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.LINKSEDIT_SUC, {
          resdata: res.data.data,
          callback,
        });
      }
    });
  },
};

const mutations = {
  [types.LINKSEDIT_REQ](state) {
    state.loading = true;
  },
  [types.LINKSEDIT_SUC](state, data) {
    const { callback } = data;
    state.loading = false;
    if (callback) {
      callback();
    }
  },
  [types.LINKSEDIT_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
