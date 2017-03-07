import * as types from '../types';
import { moneyMul } from '../../utils/math';
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
      if (res.data.code === 0) {
        commit(types.ORIGINDETAIL_SUC, {
          resdata: res.data.data,
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
    data.resdata.info.asset.share = moneyMul(data.resdata.info.asset.share, 100);
    data.resdata.info.share = moneyMul(data.resdata.info.share, 100);
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
