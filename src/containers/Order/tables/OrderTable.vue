<template>
  <div>
    <el-table
      :data="plist.data"
      stripe
      border>
      <el-table-column
        fixed
        sortable
        align="center"
        prop="id"
        label="订单号"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="projectName"
        label="项目名称"
        inline-template
        width="200">
        <span>接口无此字段</span>
      </el-table-column>
      <el-table-column
        align="center"
        inline-template
        label="支付人"
        width="200">
        <span>接口无此字段</span>
      </el-table-column>
      <el-table-column
        align="center"
        prop="bill"
        label="支付状态"
        inline-template
        width="200">
        <ul class="split">
          <li>{{row.bill.trade_deposit.type | tradeStatus}}</li>
          <li>{{row.bill.trade_balance.type | tradeStatus}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        align="center"
        prop="bill"
        label="类型"
        inline-template
        width="200">
        <ul class="split">
          <li>保证金</li>
          <li>尾款</li>
        </ul>
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="accept"
        label="实收"
        inline-template
        width="200">
        <ul class="split">
          <li>{{row.bill.trade_deposit.proceeds}}</li>
          <li>{{row.bill.trade_balance.proceeds}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        label="开启时间"
        inline-template
        width="200">
        <ul class="split">
          <li>{{row.bill.trade_deposit.created_at}}</li>
          <li>{{row.bill.trade_balance.created_at}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="amount"
        label="总额"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <el-button-group>
          <el-button type="info" @click="toDetail(row.id)"
                     icon="view" size="small">
            查看
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  /* eslint-disable */
  import dict from '../../../store/modules/dict';

  export default {
    name: 'ProjectTable',
    props: {
      plist: Object,
    },
    filters: {
      tradeStatus(val) {
        return dict.state.trade_status[val];
      }
    },
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'orderDetail',
          params: { id: cs[0] },
        });
      },
    },
    data() {
      return {};
    },
  };
</script>

<style lang="less" scoped>
  .split {
    padding: 0;
    list-style: none;
  }

  li {
    line-height: 30px;
  }

  li:first-child {
    border-bottom: 1px solid #e1e1e1;
  }
</style>
