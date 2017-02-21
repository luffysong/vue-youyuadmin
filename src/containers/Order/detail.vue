<template>
  <div v-if="form.status">
    <el-form :model="form" label-width="80px">
      <div class="whole-bill">
        <h5>总订单</h5>
        <el-form-item label="订单号">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目">
          <el-input v-model="form.movie.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="制片方">
          <el-input v-model="form.movie.producer" disabled></el-input>
        </el-form-item>
        <el-form-item label="支付人">
          <el-input v-model="form.user.real_info.certificate_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.user.base.phone" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单总额">
          <el-input v-model="form.amount" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="--" disabled>
            <el-option v-for="it in orderStatus" :label="it.label"
                       :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开启时间">
          <el-input v-model="form.created_at" disabled></el-input>
        </el-form-item>
        <el-form-item label="完成时间">
          <el-input v-model="form.success_time" disabled></el-input>
        </el-form-item>
        <el-form-item label="关闭时间">
          <el-input v-model="form.failure_time" disabled></el-input>
        </el-form-item>
      </div>

      <div class="deposit-bill">
        <h5>保证金订单</h5>
        <el-form-item label="订单号">
          <el-input v-model="form.trade_deposit.business_id" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单金额">
          <el-input v-model="form.trade_deposit.amount" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.trade_deposit.status" placeholder="订单状态" disabled>
            <el-option v-for="it in childOrderStatus" :label="it.label"
                       :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开启时间">
          <el-input v-model="form.trade_deposit.created_at" disabled></el-input>
        </el-form-item>
        <el-form-item label="付款时间">
          <el-input v-model="form.trade_deposit.notify_time" disabled></el-input>
        </el-form-item>
      </div>

      <div class="balance-bill">
        <h5>尾款订单</h5>
        <el-form-item label="订单号">
          <el-input v-model="form.trade_balance.business_id" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单金额">
          <el-input v-model="form.trade_balance.amount" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.trade_balance.status" placeholder="订单状态" disabled>
            <el-option v-for="it in childOrderStatus" :label="it.label"
                       :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开启时间">
          <el-input v-model="form.trade_balance.created_at" disabled></el-input>
        </el-form-item>
        <el-form-item label="付款时间">
          <el-input v-model="form.trade_balance.notify_time" disabled></el-input>
        </el-form-item>
      </div>
    </el-form>
    <Buttons :buttonData="buttonData"></Buttons>
    <PopMsg :popMsgConfig="popMsgConfig"/>

  </div>
</template>
<script>
  import * as types from '../../store/types';
  import Buttons from '../../components/Button';
  import server from '../../store/modules/AjaxServer';
  import PopMsg from '../../components/PopMsg';

  export default {
    name: 'OrderDetail',
    watch: {
      form() {
        if (this.form.status === 10 || this.form.status === 20 || this.form.status === 30) {
          this.buttonData = [
            {
              type: 'primary',
              desc: '关闭订单',
              callback: () => {
                server.closeOrder({
                  id: this.$route.params.id,
                });
              },
            },
            {
              type: 'primary',
              desc: '开启剩余款',
              callback: () => {
                server.openBalanceOrder({
                  id: this.$route.params.id,
                });
              },
            },
          ];
        }
      },
    },
    data() {
      return {
        form: {},
        buttonData: [],

        orderStatus: [
          {
            value: 10,
            label: '待付保证金',
          },
          {
            value: 20,
            label: '已付保证金',
          },
          {
            value: 30,
            label: '待付剩余款',
          },
          {
            value: 40,
            label: '已付剩余款',
          },
          {
            value: 50,
            label: '交易完成',
          },
        ],
        childOrderStatus: [
          {
            value: 1,
            label: '待付款',
          },
          {
            value: 2,
            label: '已付款',
          },
          {
            value: 3,
            label: '退款中',
          },
          {
            value: 4,
            label: '已退款',
          },
        ],
        popMsgConfig: {
          dialogVisible: false,
          type: 'alert', // alert | confirm
          title: '提示',
          desc: '描述',
          sureCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
          cancelCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
        },
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.ORDERDETAIL_REQ, {
        id: this.$route.params.id,
        sendData: {},
        callback: (data) => {
          this.form = data;
        },
      });
    },
    components: {
      Buttons,
      PopMsg,
    },
  };

</script>
<style scoped lang="less">
</style>
