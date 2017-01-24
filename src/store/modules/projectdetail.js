import Vue from 'vue';
import * as types from '../types';

const initialState = {
  loading: false,
  ProjectDetail: {
    data: {

    },
  },
};

const getters = {
  [types.ProjectDetailData]: state => state.ProjectDetail,
};

const actions = {
  // 获取list数据
  [types.ProjectDetailReq]({ commit }, params) {
    const url = `/api/movie/${params.id}`;
    commit(types.ProjectDetailReq);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ProjectDetailSuc, {
          data: data.body.data,
        });
      }
    }, () => {
      commit(types.ProjectDetailErr, {});
    });
  },

};

const mutations = {
  // 获取detail 数据
  [types.ProjectDetailReq](state) {
    state.loading = true;
  },
  [types.ProjectDetailSuc](state, data) {
    state.loading = false;
    state.ProjectDetail = data.data;
  },
  [types.ProjectDetailErr](state, data) {
    state.loading = false;
    state.ProjectDetail = data.data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
