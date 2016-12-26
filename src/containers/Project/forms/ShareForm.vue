<template>
<div class="share-form">
  <el-form ref="form" :model="form" :rules="rules" label-width="160px">
    <el-form-item label="合计人数" prop="totalPeople">
      <el-col :span="8">
        <el-input v-model="form.totalPeople" disabled>
          <template slot="append">人</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="合计份额" prop="totalShare">
      <el-col :span="8">
        <el-input v-model="form.totalShare" disabled>
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="初始份额可转让比例" prop="availablePercent">
      <el-col :span="8">
        <el-input v-model="form.availablePercent">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addShare">新建份额</el-button>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-dialog :title="dialog.name" v-model="dialog.visible">
    <new-share-form />
  </el-dialog>
</div>
</template>

<script>
/**
 * Internal dependencies
 */
import NewShareForm from './NewShareForm';

export default {
  name: 'DescriptionForm',
  components: {
    NewShareForm,
  },
  data() {
    return {
      form: {
        totalPeople: 0,
        totalShare: 0,
        availablePercent: '',
      },
      rules: {
        availablePercent: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
        ],
      },
      dialog: {
        name: '新建份额',
        visible: false,
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
    addShare() {
      this.dialog.visible = true;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
