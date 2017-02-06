<template>
  <div>
    <el-table
      :data="plist.data"
      stripe
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
      <el-pagination
        layout="prev, pager, next, jumper"
        :current-page="plist.page"
        :page-size="10"
        :total="plist.total"
        @current-change="dataChangePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style src='' scoped lang="less"></style>
<script>
  import mixins from './mixins';

  export default {
    name: 'InvestorListTable',
    props: {
      plist: Object,
    },
    mixins: [mixins],
    methods: {
      dataChangePage() {
      },
      toDetail(...cs) {
        this.$router.push({
          name: 'InvestorDetail',
          params: {
            id: cs[0],
          },
        });
      },
    },
    computed: {},
    data() {
      return {
      };
    },
    mounted() {
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {},
  };

</script>
