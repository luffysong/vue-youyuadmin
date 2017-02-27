<template>
  <div>
    <el-table
      :data="pListData.data"
      stripe
      border>
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="movie.name"
        label="项目名称"
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
        prop="movie.producer"
        label="制片方"
        width="200">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.movie.producer }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.movie.producer }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="登记时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="user.real_info.certificate_name"
        label="转让人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="asset.share"
        label="原始份额"
        width="200">
      </el-table-column>
      <el-table-column
        prop="share"
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

    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="pListData.total"
        :page-size="pListData.per_page - 0"
        :current-page="pListData.current_page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'ProjectTable',
    props: {
      pListData: Object,
      pageChange: Function,
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
  };

</script>
<style lang="less" scoped>
  .el-tag {
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>
