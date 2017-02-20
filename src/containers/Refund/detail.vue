<template>
  <div v-if="form && form.movie">
    <el-form :model="form" label-width="100px">
      <div class="whole-bill">
        <h5>总订单</h5>
        <el-form-item label="订单号">
          <el-input v-model="form.trade.business_id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="项目">
          <el-input  v-model="form.movie.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="制片方">
          <el-input  v-model="form.movie.producer" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="支付人">
          <el-input v-model="form.user.real_info.certificate_name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.user.base.phone" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="订单总额">
          <el-input v-model="form.amount" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="--" :disabled="true">
            <el-option v-for="it in orderStatus" :label="it.label" :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开启时间">
          <el-input v-model="form.created_at" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="完成时间">
          <el-input v-model="form.notify_time" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="关闭时间">
          <el-input v-model="form.trade.updated_at" :disabled="true"></el-input>
        </el-form-item>
      </div>

      <div class="deposit-bill">
        <h5>{{form.trade.type | billType}}</h5>
        <el-form-item label="退款单号">
          <el-input v-model="form.business_id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="退款金额">
          <el-input v-model="form.amount" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="订单状态" :disabled="true">
            <el-option v-for="it in orderStatus" :label="it.label" :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="待退款时间">
          <el-input v-model="form.created_at" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="退款时间">
          <el-input v-model="form.notify_time" :disabled="true"></el-input>
        </el-form-item>
      </div>
      <el-button v-if="form.status === 1" type="primary" @click="submitHandle">退款</el-button>
    </el-form>
    <PopMsg :popMsgConfig="popMsgConfig"/>
  </div>
</template>
<script>
  import _ from 'lodash';
  import * as types from '../../store/types';
  import server from '../../store/modules/AjaxServer';
  import PopMsg from '../../components/PopMsg';

  export default {
    name: 'RefundDetail',
    props: {},
    methods: {
      getDetail() {
        this.$store.dispatch(types.REFUNDDETAIL_REQ, {
          id: this.$route.params.id,
          sendData: {},
          callback: (data) => {
            this.form = data.info;
          },
        });
      },
      submitHandle() {
        _.assign(this.popMsgConfig, this.popDefault, {
          dialogVisible: true,
          title: '操作提示',
          desc: '确定已退款？',
          type: 'confirm',
          sureCallback: () => {
            const id = this.$route.params.id;
            server.changeRefund({
              id,
              sendData: {},
            }).then((res) => {
              if (res.body.code === 0) {
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '已退款确认操作',
                  desc: '操作成功',
                  sureCallback: () => {
                    this.getDetail();
                    this.popMsgConfig.dialogVisible = false;
                  },
                });
              }
            });
            this.popMsgConfig.dialogVisible = false;
          },
        });
      },
    },
    filters: {
      billType(cs) {
        const OrderType = {
          1: '保证金订单',
          2: '剩余款订单',
        };
        return OrderType[cs];
      },
    },
    computed: {},
    data() {
      return {
        orderStatus: [
          {
            value: 1,
            label: '退款中',
          },
          {
            value: 2,
            label: '已退款',
          },
          {
            value: 3,
            label: '退款失败',
          },
          {
            value: 4,
            label: '已取消',
          },
          {
            value: 5,
            label: '已删除',
          },
        ],
        form: {},
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
        popDefault: {
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
    mounted() {
      // console.log('mounted');
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.getDetail();
    },
    components: {
      PopMsg,
    },
  };

</script>
<style scoped lang="less">
</style>
