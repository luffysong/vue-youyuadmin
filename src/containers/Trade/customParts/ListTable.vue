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
        prop="id"
        label="订单ID"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="business_id"
        label="订单号"
        width="200">
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
        prop="order_movie.movie.name"
        label="项目"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="order_movie.share"
        label="份额"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="proceeds"
        label="实收"
        width="200">
      </el-table-column>

      <el-table-column
        sortable
        align="center"
        prop="created_at"
        label="下单时间"
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
    name: 'ListTable',
    props: {
      pList: Object,
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
</style>
