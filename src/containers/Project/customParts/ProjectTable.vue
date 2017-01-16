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
        prop="movie.id"
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
        sortable
        align="center"
        prop="created_at"
        label="登记时间"
        width="200">
      </el-table-column>

      <el-table-column
        sortable
        align="center"
        prop="release_at"
        label="上映时间"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="created_at"
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
                     @click="displayHandle">
            显示
          </el-button>
          <el-button type="info"
                     icon="view" size="small">
            查看
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next, jumper"
        :current-page="data.page"
        :page-size="10"
        :total="data.total"
        @current-change="dataChangePage"
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
  },
  data() {
    return {
    };
  },
  methods: {
    dataChangePage() {

    },
  },
};
</script>

<style lang="less" scoped>

</style>
