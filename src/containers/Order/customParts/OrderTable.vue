<template>
  <div class="order-table">
    <el-table
      :data="plist.data"
      border>
      <el-table-column
        align="center"
        prop="id"
        label="订单号"
        width="80">
      </el-table-column>
      <el-table-column
        align="center"
        prop="movie.name"
        label="项目名称"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.movie.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.movie.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="支付人"
        prop="user.real_info.certificate_name"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        label="支付状态"
        inline-template
        width="100">
        <ul class="split">
          <li>{{row.bill.trade_deposit.status | tradeStatus}}</li>
          <li>{{row.bill.trade_balance.status | tradeStatus}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="类型"
        inline-template
        width="100">
        <ul class="split">
          <li>保证金</li>
          <li>尾款</li>
        </ul>
      </el-table-column>
      <el-table-column
        align="center"
        prop="accept"
        label="实收"
        inline-template
        width="120">
        <ul class="split">
          <li>{{row.bill.trade_deposit.proceeds}}</li>
          <li>{{row.bill.trade_balance.proceeds}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        align="center"
        label="开启时间"
        inline-template
        width="170">
        <ul class="split">
          <li>{{row.bill.trade_deposit.created_at}}</li>
          <li>{{row.open_balance_time}}</li>
        </ul>
      </el-table-column>
      <el-table-column
        align="center"
        prop="amount"
        label="总额"
        width="130">
      </el-table-column>
      <el-table-column
        inline-template
        align="center"
        label="操作"
        width="100">
        <el-button-group>
          <el-button type="info" @click="toDetail(row.id)"
                     icon="view" size="small">
            查看
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="plist.total"
        :page-size="plist.per_page - 0"
        :current-page="plist.current_page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import dict from '../../../store/modules/dict';

  export default {
    name: 'ProjectTable',
    props: {
      plist: Object,
      pageChange: Function,
    },
    filters: {
      tradeStatus(val) {
        return dict.state.trade_status[val];
      }
    },
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'OrderDetail',
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

  .el-tag {
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>

<style>
  .order-table .el-table__fixed-body-wrapper td:first-child .cell {
    line-height: 89px;
  }

  .order-table .el-table__fixed-right td:last-child .cell {
    line-height: 89px;
  }
</style>
