<template>
  <div>
    <el-table
      :data="pListData.data"
      border>
      <el-table-column
        align="center"
        prop="id"
        label="份额ID"
        width="80">
      </el-table-column>
      <el-table-column
        align="center"
        prop="movie.name"
        label="项目名称"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>订单号: {{ scope.row.movie.name}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.movie.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="制片方"
        prop="movie.producer"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>订单号: {{ scope.row.movie.producer }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.movie.producer }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="转让人"
        prop="user.real_info.certificate_name"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="share"
        label="挂牌份额"
        width="100">
      </el-table-column>
      <el-table-column
        align="center"
        prop="price"
        label="挂牌价格"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="申请时间"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="operator.name"
        label="审核人"
        width="100">
      </el-table-column>
      <el-table-column
        inline-template
        align="center"
        label="操作"
        width="100">
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
    name: 'TransferTable',
    props: {
      pListData: Object,
      pageChange: Function,
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
