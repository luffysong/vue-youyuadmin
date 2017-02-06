<template>
  <div>
    <el-table
      :data="pListData.data"
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
        prop="movie.name"
        label="项目名称"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        label="制片方"
        prop="movie.producer"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        label="转让人"
        prop="movie.name"
        width="200">
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
        prop="listedShare"
        label="挂牌价格"
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
    <!--<div class="block">-->
      <!--<span class="demonstration"> </span>-->
      <!--<el-pagination-->
        <!--layout="prev, pager, next, jumper"-->
        <!--:current-page="dataTable.page"-->
        <!--:page-size="10"-->
        <!--:total="dataTable.total"-->
        <!--@current-change="dataChangePage"-->
      <!--&gt;-->
      <!--</el-pagination>-->
    <!--</div>-->
  </div>

</template>

<script>

  export default {
    name: 'TransferTable',
    props: {
      pListData: Object,
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
