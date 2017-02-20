import Vue from 'vue';
import moment from 'moment';
import { Message } from 'element-ui';
import config from '../../config';
import '../../global.less';

const message = Vue.component(Message.name, Message);

function ajax(method, ...params) {
  Vue.http.interceptors.push((request, next) => {
    next((res) => {
      if (res.status === 401 || res.status === 403) {
        location.href = res.body.redirect; // eslint-disable-line
        return false;
      } else if (res.body.code !== 0) {
        message({
          showClose: true,
          message: `请求出错啦(>_<)，${res.body.msg}，请重试~~~`,
          type: 'error',
        });
        return false;
      }
      return res;
    });
  });
  return Vue.http[method](...params);
}

const sucCallback = (res) => {
  if (res.body.code !== 0) {
    message({
      showClose: true,
      message: `出错啦: ${res.body.msg}`,
      type: 'error',
      duration: 4000,
      customClass: 'ajaxErrorMsg',
    });
  }
  return res;
};

const errCallback = (error) => {
  message({
    showClose: true,
    message: `${error.statusText}`,
    type: 'error',
  });

  throw error;
};

const server = {
  // 项目管理 - 获取 list 数据， 参数 status -> list 类型
  getProjectList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 获取项目详情
  getProjectDetail(params) {
    const { id } = params;
    return Vue.http.get(`${config.apiBase}/api/movie/${id}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 创建项目
  createProject(params) {
    const { sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.post(`${config.apiBase}/api/movie`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 修改项目
  fixProject(params) {
    const { id, sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.put(`${config.apiBase}/api/movie/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 项目转换 - 项目详情最下面的操作按钮
  // status 目标状态
  changeProject(params) {
    const { id, sendData } = params;
    const { status } = sendData;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.put(`${config.apiBase}/api/movie/${id}/${status}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 项目显隐
  displayProject(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/movie/${id}/hide`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目管理 - 上首页
  hotProject(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/movie/${id}/hot`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },

  // 原始份额管理 获取 list
  getOriginShareList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-initial-share`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(sucCallback, errCallback);
  },
  // 原始份额管理 创建份额 - 一次传递所有数据，因为有总量相关的校验
  createOriginShare(params) {
    const { sendData } = params;
    return Vue.http.post(`${config.apiBase}/api/movie-initial-share`, sendData, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // emulateJSON: false,
    }).then(sucCallback, errCallback);
  },
  // 原始份额管理 修改份额信息
  fixOriginShare(params) {
    const { movie_id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/movie-initial-share/${movie_id}`, sendData, { // eslint-disable-line
      headers: {
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目进展 获取 list
  getProjectProgressList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-progress`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目进展 创建
  createProjectProgress(params) {
    const { sendData } = params;
    return Vue.http.post(`${config.apiBase}/api/movie-progress`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目进展 修改 todo: method err
  fixProjectProgress(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/movie-progress/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 项目进展 删除
  delProjectProgress(params) {
    const { id, sendData } = params;
    return Vue.http.delete(`${config.apiBase}/api/movie-progress/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },

  // 挂牌 获取 list (原始份额转让管理)
  getQuotedList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-listing`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 挂牌 详情
  getQuotedDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-listing/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 挂牌 状态转换 驳回 挂牌中
  changeQuoted(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/movie-listing/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 订单 获取 list
  getOrderList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-order`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 订单 详情
  getOrderDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/movie-order/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 可转让资产（初始份额、收益权）
  getAssetsList(params) {
    const { sendData } = params;
    // return Vue.http.get('/static/transferShare.json', {
    return Vue.http.get(`${config.apiBase}/api/movie-assets`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },

  // 结算管理 收款 获取订单 list
  getTradeList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/financial/trade`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 结算管理 收款 获取订单详情
  getTradeDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/financial/trade/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 结算管理 收款 切换订单状态
  changeTrade(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/financial/trade/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },

  // 结算管理 退款 获取订单 list
  getRefundList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/financial/trade-refund`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 结算管理 退款 获取订单详情
  getRefundDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/financial/trade-refund/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 结算管理 退款 切换订单状态
  changeRefund(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/financial/trade-refund/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },

  // 投资人审核 获取list
  getUserRealInfoList(params) {
    const { sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/audit/user-real-info`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 投资人审核 获取详情
  getUserRealInfoDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`${config.apiBase}/api/audit/user-real-info/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
  // 投资人审核 修改 通过/驳回
  changeUser(params) {
    const { id, sendData } = params;
    return Vue.http.put(`${config.apiBase}/api/audit/user-real-info/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    }).then(sucCallback, errCallback);
  },
};
export default server;
