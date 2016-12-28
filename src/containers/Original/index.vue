<template xmlns="">
  <div class="origin-share-transfer">
    <div class="search">
      <el-form :inline="true">
        <el-form-item>
          <el-select class="select" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            class="input"
            placeholder="请输入内容"
            v-model="input">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
        </el-form-item>
      </el-form>
    </div>


    <el-tabs class="el-col-24" type="border-card" active-name="已挂牌" @tab-click="getData()">
      <el-tab-pane label="待审核" name="待审核">
        <origin-form :dataTable="dataTable"/>
      </el-tab-pane>
      <el-tab-pane label="已挂牌" name="已挂牌">

      </el-tab-pane>
      <el-tab-pane label="已成交" name="已成交">

      </el-tab-pane>
      <el-tab-pane label="已失效" name="已失效">

      </el-tab-pane>
      <el-tab-pane label="已驳回" name="已驳回">

      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script src="./index.js">
</script>

<style lang="less" scoped>
  .origin-share-transfer {

  }
</style>
