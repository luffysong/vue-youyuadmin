import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
import { Message } from 'element-ui';
import config from '../../config';
import '../../global.less';

const message = Vue.component(Message.name, Message);
axios.interceptors.response.use((res) => {
  if (res.data.code !== 0) {
    message({
      showClose: true,
      message: `出错啦: ${res.data.msg}`,
      type: 'error',
      duration: 4000,
      customClass: 'ajaxErrorMsg',
    });
  }
  return res;
}, (...err) => {
  const res = err[0].response;
  // console.log(err[0].response, '全局捕获错误');
  if (res.status === 401 || res.status === 403) {
    location.href = res.data.redirect; // eslint-disable-line
  } else {
    message({
      showClose: true,
      message: `出错啦: ${res.data.msg}`,
      type: 'error',
      duration: 4000,
      customClass: 'ajaxErrorMsg',
    });
  }
  return Promise.reject('出错误了, 全局捕获return');
});

function ajax(method, ...params) {
  console.log(method, params);
  return axios[method](...params);
}

// const message = Vue.component(Message.name, Message);
// let midflag = false;
// function ajax(method, ...params) {
//   if (!midflag) {
//     midflag = true;
//     Vue.http.interceptors.push((request, next) => {
//       next((res) => {
//         if (res.status === 401 || res.status === 403) {
//           location.href = res.body.redirect; // eslint-disable-line
//           return false;
//         }
//         if (res.body.code !== 0) {
//           message({
//             showClose: true,
//             message: `出错啦: ${res.body.msg}`,
//             type: 'error',
//             duration: 4000,
//             customClass: 'ajaxErrorMsg',
//           });
//           return false;
//         }
//         return res;
//       });
//     });
//   }
//   return Vue.http[method](...params);
// }

const server = {
  // 项目管理 - 获取 list 数据， 参数 status -> list 类型
  getProjectList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 获取项目详情
  getProjectDetail(params) {
    const { id } = params;
    return ajax('get', `${config.apiBase}/api/movie/${id}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 创建项目
  createProject(params) {
    const { sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return ajax('post', `${config.apiBase}/api/movie`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 修改项目
  fixProject(params) {
    const { id, sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return ajax('put', `${config.apiBase}/api/movie/${id}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 项目转换 - 项目详情最下面的操作按钮
  // status 目标状态
  changeProject(params) {
    const { id, sendData } = params;
    const { status } = sendData;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return ajax('put', `${config.apiBase}/api/movie/${id}/${status}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 项目显隐
  displayProject(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie/${id}/hide`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 上首页
  hotProject(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie/${id}/hot`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 原始份额管理 获取 list
  getOriginShareList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-initial-share`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 原始份额管理 创建份额 - 一次传递所有数据，因为有总量相关的校验
  createOriginShare(params) {
    const { sendData } = params;
    return ajax('post', `${config.apiBase}/api/movie-initial-share`, qs.stringify(sendData), {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 原始份额管理 修改份额信息
  fixOriginShare(params) {
    const { movie_id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie-initial-share/${movie_id}`, qs.stringify(sendData), { // eslint-disable-line
      headers: {
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目进展 获取 list
  getProjectProgressList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-progress`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目进展 创建
  createProjectProgress(params) {
    const { sendData } = params;
    return ajax('post', `${config.apiBase}/api/movie-progress`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目进展 修改 todo: method err
  fixProjectProgress(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie-progress/${id}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目进展 删除
  delProjectProgress(params) {
    const { id, sendData } = params;
    return ajax('delete', `${config.apiBase}/api/movie-progress/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 挂牌 获取 list (原始份额转让管理)
  getQuotedList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-listing`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 挂牌 详情
  getQuotedDetail(params) {
    const { id, sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-listing/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 挂牌 状态转换 驳回 挂牌中
  changeQuoted(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie-listing/${id}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 订单 获取 list
  getOrderList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-order`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 订单 详情
  getOrderDetail(params) {
    const { id, sendData } = params;
    return ajax('get', `${config.apiBase}/api/movie-order/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 订单管理 关闭订单
  closeOrder(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie-order/${id}/close`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 订单管理 开启剩余款
  openBalanceOrder(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/movie-order/${id}/open-balance`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 可转让资产（初始份额、收益权）
  getAssetsList(params) {
    const { sendData } = params;
    // return ajax('get','/static/transferShare.json', {
    return ajax('get', `${config.apiBase}/api/movie-assets`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 结算管理 收款 获取订单 list
  getTradeList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/financial/trade`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 结算管理 收款 获取订单详情
  getTradeDetail(params) {
    const { id, sendData } = params;
    return ajax('get', `${config.apiBase}/api/financial/trade/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 结算管理 收款 切换订单状态
  changeTrade(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/financial/trade/${id}/confirm-paid`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 结算管理 退款 获取订单 list
  getRefundList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/financial/trade-refund`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 结算管理 退款 获取订单详情
  getRefundDetail(params) {
    const { id, sendData } = params;
    return ajax('get', `${config.apiBase}/api/financial/trade-refund/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 结算管理 退款 切换订单状态
  changeRefund(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/financial/trade-refund/${id}/confirm-refunded`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 投资人审核 获取list
  getUserRealInfoList(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/audit/user-real-info`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 投资人审核 获取详情
  getUserRealInfoDetail(params) {
    const { id, sendData } = params;
    return ajax('get', `${config.apiBase}/api/audit/user-real-info/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 投资人审核 修改 通过/驳回
  changeUser(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/audit/user-real-info/${id}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 用户管理，获取用户list
  getUserManage(params) {
    const { sendData } = params;
    return ajax('get', `${config.apiBase}/api/system/user`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 用户管理，修改用户激活状态
  putUserActiveStatus(params) {
    const { id, sendData } = params;
    return ajax('put', `${config.apiBase}/api/system/user/${id}`, qs.stringify(sendData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
};
export default server;
