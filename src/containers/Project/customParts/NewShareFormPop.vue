<template>
<div class="share-form">
  <el-form ref="form" :model="form" :rules="rules" label-width="160px">
    <el-form-item label="姓名/企业全称" prop="name">
      <el-input v-model="form.name">
      </el-input>
    </el-form-item>
    <el-form-item label="身份证/信用代码" prop="number">
      <el-input v-model="form.number">
      </el-input>
    </el-form-item>
    <el-form-item label="所占份额" prop="share">
      <el-input v-model="form.share">
        <template slot="append">%</template>
      </el-input>
    </el-form-item>
    <el-form-item label="投资金额" prop="count">
      <el-input v-model="form.count">
        <template slot="append">元</template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="handleReset">返回</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
/**
 * Internal dependencies
 */

export default {
  name: 'DescriptionForm',
  components: {
  },
  data() {
    return {
      form: {
        name: '',
        number: '',
        share: '',
        count: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名/企业全称', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入身份证/信用代码', trigger: 'blur' },
        ],
        share: [
          { required: true, message: '请输入所占份额', trigger: 'blur' },
        ],
        count: [
          { required: true, message: '请输入投资金额', trigger: 'blur' },
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
