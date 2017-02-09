<template>
  <div v-if="form && form.movie">
    <el-form :model="form" label-width="100px">
      <div class="whole-bill">
        <h5>总订单</h5>
        <el-form-item label="订单号">
          <el-input v-model="form.trade.business_id"></el-input>
        </el-form-item>
        <el-form-item label="项目">
          <el-input  v-model="form.movie.name"></el-input>
        </el-form-item>
        <el-form-item label="制片方">
          <el-input  v-model="form.movie.producer"></el-input>
        </el-form-item>
        <el-form-item label="支付人">
          <el-input v-model="form.user.real_info.certificate_name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.user.base.phone"></el-input>
        </el-form-item>
        <el-form-item label="订单总额">
          <el-input v-model="form.amount"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="--">
            <el-option v-for="it in orderStatus" :label="it.label" :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开启时间">
          <el-input v-model="form.created_at"></el-input>
        </el-form-item>
        <el-form-item label="完成时间">
          <el-input v-model="form.notify_time"></el-input>
        </el-form-item>
        <el-form-item label="关闭时间">
          <el-input v-model="form.trade.updated_at"></el-input>
        </el-form-item>
      </div>

      <div class="deposit-bill">
        <h5>退款订单</h5>
        <el-form-item label="退款单号">
          <el-input v-model="form.business_id"></el-input>
        </el-form-item>
        <el-form-item label="退款金额">
          <el-input v-model="form.amount"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="订单状态">
            <el-option v-for="it in childOrderStatus" :label="it.label" :value="it.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="待退款时间">
          <el-input v-model="form.created_at"></el-input>
        </el-form-item>
        <el-form-item label="退款时间">
          <el-input v-model="form.notify_time"></el-input>
        </el-form-item>
      </div>

    </el-form>

  </div>
</template>
<script>
  import * as types from '../../store/types';

  export default {
    name: 'RefundDetail',
    props: {},
    methods: {

    },
    computed: {},
    data() {
      return {
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
        form: {},
      };
    },
    mounted() {
      // console.log('mounted');
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.REFUNDDETAIL_REQ, {
        id: this.$route.params.id,
        sendData: {},
        callback: (data) => {
          this.form = data.info;
        },
      });
    },
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    beforeMount() {
      // console.log('beforeMount');
    },
    updated() {
      // console.log('updated');
    },
    components: {},
  };

</script>
<style scoped lang="less">
</style>
