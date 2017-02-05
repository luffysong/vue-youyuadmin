<template>
  <div>
    <el-table
      :data="dataTable.items"
      stripe
      border>
      <el-table-column
        fixed
        sortable
        align="center"
        prop="id"
        label="份额ID"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="项目名称"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        inline-template
        label="制片方"
        width="200">
        <el-popover trigger="hover" placement="top">
          <p>片名: {{ row.name }}</p>
          <div slot="reference">
            <el-tag>{{ row.maker }}</el-tag>
          </div>
        </el-popover>
      </el-table-column>
      <el-table-column
        align="center"
        inline-template
        label="转让人"
        width="200">
        <el-popover trigger="hover" placement="top">
          <p>片名: {{ row.name }}</p>
          <div slot="reference">
            <el-tag>{{ row.transfer }}</el-tag>
          </div>
        </el-popover>
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="listedShare"
        label="挂牌份额"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="applyTime"
        label="申请时间"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        prop="auditor"
        label="审核人"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <router-link :to='{name: "TransferDetail", params: {id: row.id}}'>
          <el-button type="info"
                     icon="view" size="small">
            查看
          </el-button>
        </router-link>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next, jumper"
        :current-page="dataTable.page"
        :page-size="10"
        :total="dataTable.total"
        @current-change="dataChangePage"
      >
      </el-pagination>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'TransferTable',
    props: {
      dataTable: Object,
      dataChangePage: Function,
    },
    methods: {
    },
    computed: {
    },
    data() {
      return {

      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {

    },
  };

</script>

<style lang="less" scoped>
  .block {
    clear: both;
    text-align: right;
    padding: 10px 0 0;
  }
</style>
