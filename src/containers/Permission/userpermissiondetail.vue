<template>
  <div>
    <el-row class="row">
      <el-col :span="2">
        用户名称：
      </el-col>
      <el-col :span="22">
        name
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        用户角色：
      </el-col>
      <el-col :span="22">
        role
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        权限明细
      </el-col>
      <el-col :span="22">
        <div>
          2222 <br>
          2222 <br>
          2222 <br>
          2222 <br>
          2222 <br>
          2222 <br>
          2222 <br>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'UserPermissionDetail',
  };
</script>
<style scoped>
  .row {
    margin: 20px 0;
  }
</style>
