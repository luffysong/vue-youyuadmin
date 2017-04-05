<template>
  <div>
    <el-table
      :data="plist.data"
      border>
      <el-table-column
        prop="certificate_name"
        label="申请人"
        align=center
        width="150">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.certificate_name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.certificate_name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="member_type"
        label="会员类型"
        align=center
        inline-template
        width="130">
        <span>{{row.member_type | memberTransfer}}</span>
      </el-table-column>
      <el-table-column
        prop="created_at"
        align=center
        label="申请时间"
        width="170">
      </el-table-column>
      <el-table-column
        prop="operator.name"
        label="审核人"
        align=center
        width="120">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        align=center
        label="操作时间"
        width="170">
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
        align=center
        inline-template>
        <div>
          {{row.status | statusTransfer}}
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        align="center"
        label="操作"
        width="100">
        <el-button type="info" @click="toDetail(row.uid)"
                   v-if="permissionCheck(['api.audit.user-real-info.show'])"
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
<style lang="less">
  .el-tag {
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>
<script>
  import mixins from './mixins';
  import permissionCheck from '../../../utils/permissionCheck';

  export default {
    name: 'InvestorListTable',
    props: {
      plist: Object,
      pPageChange: Function,
    },
    mixins: [mixins],
    data() {
      return {
        permissionCheck,
      };
    },
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
