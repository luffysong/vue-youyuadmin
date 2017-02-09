/* eslint-disable */
const initialState = {
  stage: [
    {
      label: '策划筹备期',
      value: 10,
      eumn: 'READY',
    },
    {
      label: '拍摄制作期',
      value: 20,
    },
    {
      label: '宣传期',
      value: 30,
    },
    {
      label: '上映期',
      value: 40,
    },
    {
      label: '回款期',
      value: 50,
    },
  ],
  "movie_status": {
    "10": "草稿",
    "20": "已上线",
    "30": "已上映",
    "40": "已结算",
    "50": "已删除",
  },
  "movie_stage": {
    "10": "策划筹备期",
    "20": "拍摄制作期",
    "30": "宣传期",
    "40": "上映期",
    "50": "回款期",
  },
  "movie_order_status": {
    "10": "代付保证金",
    "20": "已付保证金",
    "30": "待付剩余款",
    "40": "已付剩余款",
    "50": "交易完成",
  },
  "movie_assets_type": {
    "1": "原始份额",
    "2": "影视收益权",
  },
  "movie_listing_status": {
    "1": "待审核",
    "2": "已驳回",
    "3": "挂牌中",
    "4": "已成功",
    "5": "已失效",
  },
  "trade_status": {
    "1": "待付款",
    "2": "已付款",
    "3": "退款中",
    "4": "已退款",
  },
  "platform_type": {
    "1": "线下汇款",
  },
  "trade_refund_status": {
    "1": "退款中",
    "2": "已退款",
    "3": "退款失败",
    "4": "已取消",
    "5": "已删除",
  },
  "audit_user_real_info_status": {
    "1": "待审核",
    "2": "通过",
    "3": "驳回",
  },
  "investment_condition": {
    "10": "年收入超过50万元人民币",
    "20": "金融资产超过200万元人民币",
    "30": "具有三年以上的风险投资经验，或专业的文娱从业人员",
  },
  "certificate_type": {
    "1": "身份证",
    "2": "统一社会信用代码",
  },
  "member_type": {
    "1": "普通交易会员",
    "2": "综合会员",
  },
  "identity_type": {
    "1": "个人",
    "2": "企业",
  },
};
export default {
  state: initialState,
};
