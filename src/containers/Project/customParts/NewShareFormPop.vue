<template>
<div class="share-form">
  <el-form ref="form" :model="form" :rules="rules" label-width="160px">
    <el-form-item label="身份类型">
      <el-col>
        <template>
          <el-radio class="radio" v-model="form.certificate_type" label="1">
            个人（身份证）
          </el-radio>
          <el-radio class="radio" v-model="form.certificate_type" label="2">
            企业（社会统一信用代码）
          </el-radio>
        </template>
      </el-col>
    </el-form-item>
    <el-form-item label="姓名/企业全称" prop="certificate_name">
      <el-input v-model="form.certificate_name">
      </el-input>
    </el-form-item>
    <el-form-item label="身份证/信用代码" prop="certificate_number">
      <el-input v-model="form.certificate_number">
      </el-input>
    </el-form-item>
    <el-form-item label="所占份额" prop="share">
      <el-input v-model="form.share">
        <template slot="append">%</template>
      </el-input>
    </el-form-item>
    <el-form-item label="投资金额" prop="price">
      <el-input v-model="form.price">
        <template slot="append">元</template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">添加</el-button>
      <el-button @click="handleReset">取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
/**
 * Internal dependencies
 */
import _ from 'lodash';

export default {
  name: 'DescriptionForm',
  components: {
  },
  props: {
    addCallback: Function,
    cancelCallback: Function,
  },
  data() {
    return {
      form: {
        certificate_type: '1',
        certificate_name: '',
        certificate_number: '',
        share: '',
        price: '',
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
      this.cancelCallback();
      this.$refs.form.resetFields();
    },
    handleSubmit() {
//      this.$refs.form.validate();
      const result = _.cloneDeep(this.form);
      this.$refs.form.resetFields();
      this.addCallback(result);
    },
  },
};
</script>

<style lang="less" scoped>

</style>
