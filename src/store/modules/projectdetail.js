import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  ProjectDetail: {
    loading: false,
    data: {},
  },
  ProjectOriginShare: {
    loading: false,
  },
  ProjectTransferShare: {
    loading: false,
    list: [],
  },
  ProjectTransferEarn: {
    loading: false,
    list: [],
  },
  ProjectProgress: {
    loading: false,
    list: [],
  },
};

const getters = {
  [types.ProjectDetailData]: state => state.ProjectDetail,
  [types.PROJECTTRANSFERSHARE_GET]: state => state.ProjectTransferShare,
  [types.PROJECTTRANSFEREARN_GET]: state => state.ProjectTransferEarn,
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

  // 获取项目“初始份额登记”list
  [types.PROJECTORIGINSHARE_REQ]({ commit }, params) {
    commit(types.PROJECTORIGINSHARE_REQ);
    server.getOriginShareList({
      sendData: {
        movie_id: params.movie_id,
      },
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECTORIGINSHARE_SUC, res.body.data);
      }
    }, () => {
    });
  },

  // 获取“可转让初始份额、可转让收益”list
  [types.PROJECTTRANSFERSHARE_REQ]({ commit }, params) {
    commit(types.PROJECTTRANSFERSHARE_REQ, params);
    server.getAssetsList({
      sendData: params.sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECTTRANSFERSHARE_SUC, {
          ...res.body,
          ...params,
        });
      }
    }, () => {
    });
  },
  // 获取“项目进度”list
  [types.PROJECTPROGRESS_REQ]({ commit }, params) {
    commit(types.PROJECTPROGRESS_REQ, params);
    server.getProjectProgressList({
      sendData: params.sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECTPROGRESS_SUC, {
          ...res.body,
          ...params,
        });
        params.callback(res.body.data.list);
      }
    }, () => {
    });
  },
};
const ENUM = {
  SHARE: 1,
  EARN: 2,
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

  // 获取可转让初始份额list
  [types.PROJECTTRANSFERSHARE_REQ](state, params) {
    const { type } = params.sendData;
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = true;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = true;
    }
  },
  [types.PROJECTTRANSFERSHARE_SUC](state, data) {
    const { type } = data.sendData;
    const tempArr = [];
    data.data.forEach((el) => {
      const tempInfo = {};
      tempInfo.certificate_name = el.user.real_info.certificate_name;
      tempInfo.certificate_number = el.user.real_info.certificate_number;
      tempInfo.certificate_type = el.user.real_info.certificate_type;
      tempInfo.share = el.share;
      tempInfo.price = '接口文档没有这个字段';
      tempArr.push(tempInfo);
    });
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = false;
      state.ProjectTransferShare.list = tempArr;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = false;
      state.ProjectTransferEarn.list = tempArr;
    }
  },
  [types.PROJECTTRANSFERSHARE_ERR](state, data) {
    const { type } = data.sendData;
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = false;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = false;
    }
  },

  // 获取项目进度
  [types.PROJECTPROGRESS_REQ](state) {
    state.ProjectProgress.loading = true;
  },
  [types.PROJECTPROGRESS_SUC](state, data) {
    state.ProjectProgress.loading = false;
    state.ProjectProgress.list = data.data.list;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
