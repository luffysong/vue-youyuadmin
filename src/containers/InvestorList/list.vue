<template>
  <div>
    <el-tabs @tab-click="tabChange">
      <el-tab-pane label="待审核" name="pending"></el-tab-pane>
      <el-tab-pane label="已通过" name="pass"></el-tab-pane>
      <el-tab-pane label="已驳回" name="reject"></el-tab-pane>
      <el-tab-pane label="全部" name="all"></el-tab-pane>
    </el-tabs>
    <div>
      <router-view> </router-view>

    </div>
  </div>
</template>
<script src="./list.js"></script>
