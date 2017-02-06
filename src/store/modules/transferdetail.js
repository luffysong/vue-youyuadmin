import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  detail: {},
};

// const getters = {
//   [types.TransferDetailData]: state => state.data,
// };

const actions = {
  [types.TRANSFERDETAIL_REQ]({ commit }, params) {
    const { id, sendData } = params;
    commit(types.TRANSFERDETAIL_REQ);
    server.getQuotedDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.TRANSFERDETAIL_SUC, {
          resdata: res.body.data,
        });
      }
    });
  },
};

const mutations = {
  [types.TRANSFERDETAIL_REQ](state) {
    state.loading = true;
  },
  [types.TRANSFERDETAIL_SUC](state, data) {
    state.loading = false;
    state.detail = data.resdata;
    console.log(state.data);
  },
  [types.TRANSFERDETAIL_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
