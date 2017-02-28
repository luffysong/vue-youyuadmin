<template>
  <div class="total-info">
    <el-row>
      <el-col :span="4">
        <span>合计人数</span>
      </el-col>
      <el-col :span="10">
        <el-input :value="data.totalInfo.totalPeople"
                  :disabled="true">
          <template slot="append">人</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span>合计份额</span>
      </el-col>
      <el-col :span="10">
        <el-input :value="data.totalInfo.totalShare"
                  :disabled="true">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  export default {
    name: 'TotalInfo',
    props: {
      data: Object,
    },
  };
</script>
<style scoped lang="less">
  .total-info {
    padding-top: 20px;
  }

  .el-row {
    margin: 0 0 10px;
  }

  .el-col span {
    line-height: 34px;
    float: right;
    margin: 0 15px 0 0;
  }
</style>
