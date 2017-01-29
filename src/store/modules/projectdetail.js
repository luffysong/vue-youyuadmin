import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  ProjectDetail: {
    data: {

    },
  },
  ProjectOriginShare: {
    list: [],
  },
};

const getters = {
  [types.ProjectDetailData]: state => state.ProjectDetail,
};

const actions = {
  // 获取项目描述详情detail 数据
  [types.ProjectDetailReq]({ commit }, params) {
    commit(types.ProjectDetailReq);
    server.getProjectDetail({
      id: params.id,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ProjectDetailSuc, {
          data: data.body.data,
        });
      }
    }, (data) => {
      commit(types.ProjectDetailErr, data);
    });
  },

  [types.PROJECTORIGINSHARE_REQ]({ commit }, params) {
    commit(types.PROJECTORIGINSHARE_REQ);
    server.getOriginShareList({
      sendData: {
        movie_id: params.movie_id,
      },
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.PROJECTORIGINSHARE_SUC, data.body.data);
      }
    }, (data) => {
      console.log(data);
    });
  },

};

const mutations = {
  // 获取项目描述详情detail 数据
  [types.ProjectDetailReq](state) {
    state.loading = true;
  },
  [types.ProjectDetailSuc](state, data) {
    state.loading = false;
    state.ProjectDetail = data.data;
  },
  [types.ProjectDetailErr](state, data) {
    state.loading = false;
    state.ProjectDetail = data;
  },

  // 获取项目原始份额list
  [types.PROJECTORIGINSHARE_REQ](state) {
    state.ProjectOriginShare.loading = true;
  },
  [types.PROJECTORIGINSHARE_SUC](state, data) {
    state.ProjectOriginShare = data;
  },
  [types.PROJECTORIGINSHARE_ERR](state, data) {
    state.ProjectOriginShare = data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
