/* eslint-disable */
const initialState = {
    "code": 0,
    "data": {
        "movie_status": {
            "10": "草稿 ",
            "20": "已上线",
            "30": "已上映",
            "40": "已结算",
            "50": "已删除"
        },
        "movie_stage": {
            "10": "策划筹备期",
            "20": "拍摄制作期",
            "30": "宣传期",
            "40": "上映期",
            "50": "回款期"
        },
        "movie_order_status": {
            "10": "待付保证金",
            "20": "已付保证金",
            "30": "待付剩余款",
            "40": "已付剩余款",
            "50": "交易完成",
            "60": "交易关闭"
        },
        "movie_assets_type": {
            "1": "原始份额",
            "2": "影视收益权"
        },
        "movie_listing_status": {
            "1": "待审核",
            "2": "已驳回",
            "3": "挂牌中",
            "4": "已成交",
            "5": "已失效"
        },
        "trade_status": {
            "1": "待付款",
            "2": "已付款",
            "3": "退款中",
            "4": "已退款"
        },
        "trade_type": {
            "1": "保证金",
            "2": "剩余款"
        },
        "trade_category": {
            "1": "影视收益权"
        },
        "platform_type": {
            "1": "线下汇款"
        },
        "trade_refund_status": {
            "1": "退款中",
            "2": "已退款",
            "3": "退款失败",
            "4": "已取消",
            "5": "已删除"
        },
        "audit_user_real_info_status": {
            "1": "待审核",
            "2": "通过",
            "3": "驳回"
        },
        "member_status": {
            "1": "待审核",
            "2": "通过",
            "3": "驳回"
        },
        "investment_condition": {
            "10": "年收入超过50万元人民币",
            "20": "金融资产超过200万元人民币",
            "30": "具有三年以上的风险投资经验，或专业的文娱从业人员"
        },
        "certificate_type": {
            "1": "身份证",
            "2": "统一社会信用代码"
        },
        "member_type": {
            "1": "普通交易会员",
            "2": "综合会员"
        },
        "identity_type": {
            "1": "个人",
            "2": "企业"
        },
        "platform_fee": {
            "1": 0.1
        },
        "remittance_info": {
            "account_num": "110923350710705",
            "account_name": "北京协力创成股权投资基金管理有限公司",
            "bank": "招商银行北京建国门支行"
        },
        "movie_assets_detail_category": {
            "1": "认领原始份额",
            "2": "下单购买所得",
            "3": "挂牌卖出"
        }
    }
};
export default {
  state: initialState,
};
