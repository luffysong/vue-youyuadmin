<template>
  <div>
    <el-table
      :data="data.data"
      stripe
      border>
      <el-table-column
        fixed
        sortable
        align="center"
        prop="id"
        label="项目ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="producer"
        label="制片方"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="publish_time"
        label="登记时间"
        width="200">
      </el-table-column>

      <el-table-column
        sortable
        align="center"
        prop="release_date"
        label="上映时间"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="settlement_time"
        label="清算时间"
        width="200">
      </el-table-column>

      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <el-button-group>
          <el-button type="success"
                     icon="circle-check" size="small"
                     @click="displayHandle(row.id)">
            显示
          </el-button>
          <el-button type="info"
                     icon="view" size="small"
                      @click="toDetail(row.id)">
            查看
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="data.total"
        :page-size="data.per_page - 0"
        :current-page="data.current_page"
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
    data: Object,
    displayHandle: Function,
    toDetail: Function,
    pageChange: Function,
  },
};
</script>

<style lang="less" scoped>

</style>
