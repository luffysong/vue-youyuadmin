<template>
  <div>
    <el-table
      :data="pList.data"
      stripe
      border>
      <el-table-column
        fixed
        sortable
        align="center"
        prop="business_id"
        label="退款订单号"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        inline-template
        label="订单类型"
        width="200">
        <span>{{row.trade.type | filterOrderType}}</span>
      </el-table-column>
      <el-table-column
        align="center"
        prop="trade.business_id"
        label="子订单号"
        width="200">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.trade.business_id }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.trade.business_id }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="支付人"
        prop="user.real_info.certificate_name"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="movie.name"
        label="项目"
        width="200">
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
        sortable
        align="center"
        prop="amount"
        label="实退"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="notify_time"
        label="待退款时间"
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
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="pList.total"
        :page-size="pList.per_page - 0"
        :current-page="pList.current_page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ListTable',
    props: {
      pList: Object,
      pageChange: Function,
    },
    filters: {
      filterOrderType(cs) {
        const OrderType = {
          1: '保证金',
          2: '剩余款',
        };
        return OrderType[cs];
      },
    },
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'RefundDetail',
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
  .el-tag {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>
