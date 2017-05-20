import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  result: {},
};

const actions = {
  [types.LINKSCREATE_REQ]({ commit }, params) {
    const { sendData, callback } = params;
    commit(types.LINKSCREATE_REQ);
    server.createLink({
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.LINKSCREATE_SUC, {
          resdata: res.data.data,
          callback,
        });
      }
    });
  },
};

const mutations = {
  [types.LINKSCREATE_REQ](state) {
    state.loading = true;
  },
  [types.LINKSCREATE_SUC](state, data) {
    const { callback } = data;
    state.loading = false;
    if (callback) {
      callback();
    }
  },
  [types.LINKSCREATE_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
