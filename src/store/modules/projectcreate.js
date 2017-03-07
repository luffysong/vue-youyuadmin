import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  result: {},
};

// const getters = {
//   [types.PROJECTCREATEData]: state => state.data,
// };

const actions = {
  [types.PROJECTCREATE_REQ]({ commit }, params) {
    const { sendData, callback } = params;
    commit(types.PROJECTCREATE_REQ);
    server.createProject({
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.PROJECTCREATE_SUC, {
          resdata: res.data.data,
          callback,
        });
      }
    });
  },
};

const mutations = {
  [types.PROJECTCREATE_REQ](state) {
    state.loading = true;
  },
  [types.PROJECTCREATE_SUC](state, data) {
    const { callback } = data;
    state.loading = false;
    state.detail = data.resdata;
    if (callback) {
      callback(data.resdata.id);
    }
  },
  [types.PROJECTCREATE_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
