<template>
  <div>
    <el-table
      :data="pList.data"
      border>
      <el-table-column
        align="center"
        prop="id"
        label="订单ID"
        width="80">
      </el-table-column>
      <el-table-column
        align="center"
        inline-template
        label="订单类型"
        width="100">
        <span>{{row.type | filterOrderType}}</span>
      </el-table-column>
      <el-table-column
        align="center"
        prop="business_id"
        label="订单号"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>订单号: {{ scope.row.business_id }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.business_id }}</el-tag>
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
        prop="order_movie.movie.name"
        label="项目"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.order_movie.movie.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.order_movie.movie.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="order_movie.share"
        label="份额"
        width="100">
      </el-table-column>
      <el-table-column
        align="center"
        prop="proceeds"
        label="实收"
        width="120">
      </el-table-column>

      <el-table-column
        align="center"
        prop="created_at"
        label="下单时间"
        width="180">
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
  import dict from '../../../store/modules/dict';

  export default {
    name: 'ListTable',
    props: {
      pList: Object,
      pageChange: Function,
    },
    filters: {
      filterOrderType(cs) {
        const OrderType = dict.state.trade_type;
        return OrderType[cs];
      },
    },
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'TradeDetail',
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
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>
