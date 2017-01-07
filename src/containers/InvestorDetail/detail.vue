<template>
  <div>
    <el-row>

    </el-row>
    <el-form ref="form" :model="form" :rules="rules" label-width="160px">
      <el-form-item label="申请人" prop="proposer">
        <el-col :span="8">
          <el-input v-model="form.proposer" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="证件号" prop="idNumber">
        <el-col :span="8">
          <el-input v-model="form.idNumber" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="会员类型" prop="memberType">
        <el-col :span="8">
          <el-input v-model="form.memberType" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="applyTime">
        <el-col :span="8">
          <el-input v-model="form.applyTime" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="开户类型" prop="accountType">
        <el-col :span="8">
          <el-input v-model="form.accountType" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="个人名片" prop="businessCard">
        <el-col :span="8">
          <img src="https://pic.36krcnd.com/avatar/201701/06062920/2xaazz4jwq0hcqlg.jpg!heading" alt="">
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">通过</el-button>
        <el-button @click="handleReset">驳回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<style src='' scoped lang="less"> </style>
<script src=''> </script>
