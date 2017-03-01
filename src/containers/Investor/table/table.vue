<template>
  <div>
    <el-table
      :data="plist.data"
      border>
      <el-table-column
        fixed
        prop="certificate_name"
        label="申请人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="member_type"
        label="会员类型"
        inline-template
        width="200">
        <span>{{row.member_type | memberTransfer}}</span>
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="申请时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="operator.name"
        label="审核人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="操作时间"
        width="200">
      </el-table-column>
      <el-table-column
        label="状态"
        width="200"
        inline-template>
        <div>
          {{row.status | statusTransfer}}
        </div>
      </el-table-column>
      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <el-button type="info" @click="toDetail(row.uid)"
                   icon="view" size="small">
          查看
        </el-button>
      </el-table-column>
    </el-table>

    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="plist.total"
        :page-size="plist.per_page - 0"
        :current-page="plist.current_page"
        @current-change="pPageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
<script>
  import mixins from './mixins';

  export default {
    name: 'InvestorListTable',
    props: {
      plist: Object,
      pPageChange: Function,
    },
    mixins: [mixins],
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'InvestorDetail',
          params: {
            id: cs[0],
          },
        });
      },
    },
  };

</script>
