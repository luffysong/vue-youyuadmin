<template>
  <div>
    <el-row>
      pending
    </el-row>
    <el-form ref="form" :model="form" :rules="rules" label-width="160px">
      <el-form-item label="份额ID" prop="id">
        <el-col :span="8">
          <el-input v-model="form.id" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目名称" prop="projectName">
        <el-col :span="8">
          <el-input v-model="form.projectName" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="movieMaker">
        <el-col :span="8">
          <el-input v-model="form.movieMaker" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="转让方" prop="transferor">
        <el-col :span="8">
          <el-input v-model="form.transferor" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="原始份额" prop="originalShare">
        <el-col :span="8">
          <el-input v-model="form.originalShare" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="现持有原始份额" prop="ownOriginalShare">
        <el-col :span="8">
          <el-input v-model="form.ownOriginalShare" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌份额" prop="listedShare">
        <el-col :span="8">
          <el-input v-model="form.listedShare" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌价格" prop="listedPrice">
        <el-col :span="8">
          <el-input v-model="form.listedPrice" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="applyTime">
        <el-col :span="8">
          <el-input v-model="form.applyTime" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌天数" prop="listedDays">
        <el-col :span="8">
          <el-input v-model="form.listedDays" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方名称" prop="assignee">
        <el-col :span="8">
          <el-input v-model="form.assignee" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方证件号" prop="assigneeIdCard">
        <el-col :span="8">
          <el-input v-model="form.assigneeIdCard" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="禁售期" prop="lockupPeriod">
        <el-col :span="8">
          <el-input v-model="form.lockupPeriod" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">通过</el-button>
        <el-button type="danger" @click="handleReset">驳回</el-button>
        <el-button>查看项目登记册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src='./pending.js'> </script>
