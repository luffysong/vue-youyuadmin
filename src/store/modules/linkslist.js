import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  result: {},
};

const actions = {
  [types.LINKSLIST_REQ]({ commit }, params) {
    const { sendData } = params;
    server.getLinksList({
      sendData,
    }).then((data) => {
      if (data.data.code === 0) {
        commit(types.LINKSLIST_SUC, {
          sendData,
          data: data.data.data,
        });
      }
    }, () => {
      commit(types.LINKSLIST_ERR, {
        sendData,
      });
    });
    commit(types.LINKSLIST_REQ, sendData);
  },
};

const mutations = {
  [types.LINKSLIST_REQ](state) {
    state.loading = true;
  },
  [types.LINKSLIST_SUC](state, data) {
    const { callback } = data;
    state.loading = false;
    state.linkslist = data.data;
    if (callback) {
      callback(data.resdata.id);
    }
  },
  [types.LINKSLIST_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
