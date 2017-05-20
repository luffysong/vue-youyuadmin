import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  result: {},
};

const actions = {
  [types.LINKSDELETE_REQ]({ commit }, params) {
    const { id, callback } = params;
    commit(types.LINKSDELETE_REQ);
    server.deleteLink({
      id,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.LINKSDELETE_SUC, {
          resdata: res.data.data,
          callback,
        });
      }
    });
  },
};

const mutations = {
  [types.LINKSDELETE_REQ](state) {
    state.loading = true;
  },
  [types.LINKSDELETE_SUC](state, data) {
    const { callback } = data;
    state.loading = false;
    if (callback) {
      callback();
    }
  },
  [types.LINKSDELETE_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
