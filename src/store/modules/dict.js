const initialState = {
  stage: [
    {
      label: '策划筹备期',
      value: 10,
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
  movie_status: {
    10: '草稿 ',
    20: '已上线',
    30: '已上映',
    40: '已结算',
    50: '已删除',
  },
  movie_stage: {
    10: '策划筹备期',
    20: '拍摄制作期',
    30: '宣传期',
    40: '上映期',
    50: '回款期',
  },
  trade_status: {
    1: '待付款',
    2: '已付款',
    3: '退款中',
    4: '已退款',
  },
  movie_order_status: {
    10: '代付保证金',
    20: '已付保证金',
    30: '待付剩余款',
    40: '已付剩余款',
    50: '交易完成',
  },
  trade_refund_status: {
    1: '退款中',
    2: '已退款',
    3: '退款失败',
    4: '已取消',
    5: '已删除',
  },
};
export default {
  state: initialState,
};
