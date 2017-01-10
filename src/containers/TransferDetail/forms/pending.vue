<template>
<el-form ref="form" :model="form.data" :rules="rules" label-width="160px">
  <el-form-item label="份额ID" prop="id">
    <el-col :span="8">
      <el-input v-model="id">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="项目名称" prop="projectName">
    <el-col :span="8">
      <el-input v-model="projectName">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="制片方" prop="maker">
    <el-col :span="8">
      <el-input v-model="maker">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="转让方" prop="transferor">
    <el-col :span="8">
      <el-input v-model="transferor">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌份额" prop="listedShare">
    <el-col :span="8">
      <el-input v-model="listedShare">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌价格" prop="listedPrice">
    <el-col :span="8">
      <el-input v-model="listedPrice">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="申请时间" prop="applyTime">
    <el-col :span="8">
      <el-input v-model="applyTime">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌天数" prop="listedDays">
    <el-col :span="8">
      <el-input v-model="listedDays">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="指定受让方名称" prop="assignee">
    <el-col :span="8">
      <el-input v-model="assignee">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="指定受让方证件号" prop="assigneeCard">
    <el-col :span="8">
      <el-input v-model="assigneeCard">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleSubmit">通过</el-button>
    <el-button @click="handleReset">驳回</el-button>
  </el-form-item>
</el-form>
</template>

<script src="./pending.js"> </script>

<style lang="less" scoped>

</style>
