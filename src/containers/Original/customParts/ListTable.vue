<template>
  <div>
    <el-table
      :data="pListData.data"
      stripe
      border>
      <el-table-column
        fixed
        prop="id"
        label="项目ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="movie.name"
        label="项目名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="movie.producer"
        label="制片方"
        width="200">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="登记时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="转让人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="原始份额"
        width="200">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="挂牌份额"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <el-button-group>
          <!-- <el-button type="success"
			icon="circle-check" size="small">
			显示
		  </el-button> -->
          <el-button type="info" @click="toDetail(row.id)"
                     icon="view" size="small">
            查看
          </el-button>
        </el-button-group>
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
    name: 'ProjectTable',
    props: {
      pListData: Object,
    },
    methods: {
      toDetail(...cs) {
        this.$router.push({
          name: 'OriginDetail',
          params: {
            id: cs[0],
          },
        });
      },
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
