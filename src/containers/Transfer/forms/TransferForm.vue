<template>
<el-form ref="form" :model="form" :rules="rules" label-width="160px">
  <el-form-item label="份额ID" prop="id">
    <el-col :span="8">
      <el-input v-model="form.id">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="项目名称" prop="projectName">
    <el-col :span="8">
      <el-input v-model="form.projectName">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="制片方" prop="movieMaker">
    <el-col :span="8">
      <el-input v-model="form.movieMaker">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="转让方" prop="transferor">
    <el-col :span="8">
      <el-input v-model="form.transferor">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌份额" prop="percent">
    <el-col :span="8">
      <el-input v-model="form.percent">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌价格" prop="price">
    <el-col :span="8">
      <el-input v-model="form.price">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="申请时间" prop="applyTime">
    <el-col :span="8">
      <el-input v-model="form.applyTime">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="挂牌天数" prop="duration">
    <el-col :span="8">
      <el-input v-model="form.duration">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="指定受让方名称" prop="name">
    <el-col :span="8">
      <el-input v-model="form.name">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="指定受让方证件号" prop="license">
    <el-col :span="8">
      <el-input v-model="form.license">
      </el-input>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleSubmit">通过</el-button>
    <el-button @click="handleReset">驳回</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'TransferForm',
  data() {
    return {
      form: {
        id: '',
        projectName: '',
        movieMaker: '',
        transferor: '',
        percent: '',
        price: '',
        applyTime: '',
        duration: '',
        name: '',
        license: '',
      },
      rules: {
        id: [
          { required: true, message: '请输入份额ID', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="less" scoped>

</style>
