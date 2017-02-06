<template>
  <div>
    <el-form ref="form" :model="local" :rules="rules" label-width="160px">
      <el-form-item label="份额ID" prop="id">
        <el-col :span="8">
          <el-input v-model="local.id">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目名称" prop="projectName">
        <el-col :span="8">
          <el-input v-model="local.projectName">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="maker">
        <el-col :span="8">
          <el-input v-model="local.maker">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="转让方" prop="transferor">
        <el-col :span="8">
          <el-input v-model="local.transferor">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌份额" prop="listedShare">
        <el-col :span="8">
          <el-input v-model="local.listedShare">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌价格" prop="listedPrice">
        <el-col :span="8">
          <el-input v-model="local.listedPrice">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="applyTime">
        <el-col :span="8">
          <el-input v-model="local.applyTime">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌天数" prop="listedDays">
        <el-col :span="8">
          <el-input v-model="local.listedDays">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方名称" prop="assignee">
        <el-col :span="8">
          <el-input v-model="local.assignee">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方证件号" prop="assigneeCard">
        <el-col :span="8">
          <el-input v-model="local.assigneeCard">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">通过</el-button>
        <el-button @click="handleReset">驳回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'TransferDetail',
    props: {
      pDetailData: Object,
    },
    data() {
      return {
        local: _.cloneDeep(this.pDetailData.info),
        rules: {
          id: [
            { required: true, message: '请输入份额ID', trigger: 'blur' },
          ],
          projectName: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      handleReset() {
        this.$refs.form.resetFields();
      },
      handleSubmit() {
//        this.$refs.form.validate((valid) => {
//        });
      },
    },
  };

</script>

<style lang="less" scoped>

</style>
