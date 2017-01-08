<template>
<el-tabs class="el-col-24" type="border-card"
         :active-name="curTab" @tab-click="tabchange">
  <el-tab-pane name="PENDING" label="待审核">
    <transfer-table :dataTable="PENDING" :dataChangePage="curChange" />
  </el-tab-pane>
  <el-tab-pane name="LISTED" label="已挂牌">
    <transfer-table :dataTable="LISTED" :dataChangePage="curChange" />
  </el-tab-pane>
  <el-tab-pane name="COMPLETE" label="已成交">
    <transfer-table :dataTable="COMPLETE" :dataChangePage="curChange" />
  </el-tab-pane>
  <el-tab-pane name="INVALID" label="已失效">
    <transfer-table :dataTable="INVALID" :dataChangePage="curChange" />
  </el-tab-pane>
  <el-tab-pane name="REJECT" label="已驳回">
    <transfer-table :dataTable="REJECT" :dataChangePage="curChange" />
  </el-tab-pane>
</el-tabs>
</template>

<script src="./list.js"> </script>

<style lang="less" scoped>

</style>
