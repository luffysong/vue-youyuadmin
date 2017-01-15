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

    <div class="wrap" v-for="item in items">
      <el-form-item label="身份类型">
        <el-col>
          <template>
            <el-radio class="radio" v-model="item.certificate_type" label="1">个人（身份证）</el-radio>
            <el-radio class="radio" v-model="item.certificate_type" label="2">企业（社会统一信用代码）</el-radio>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="证件名称" prop="certificate_name">
        <el-col :span="8">
          <el-input v-model="item.certificate_name"/>
        </el-col>
      </el-form-item>
      <el-form-item label="证件号码" prop="certificate_number">
        <el-col :span="8">
          <el-input v-model="item.certificate_number" />
        </el-col>
      </el-form-item>
      <el-form-item label="所占份额" prop="share">
        <el-col :span="8">
          <el-input v-model="item.share">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="投资金额" prop="price">
        <el-col :span="8">
          <el-input v-model="item.price">
            <template slot="append">元</template>
          </el-input>
        </el-col>
      </el-form-item>
    </div>


    <el-form-item>
      <el-button type="primary" @click="addShare">新建份额</el-button>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-dialog :title="dialog.name" v-model="dialog.visible">
    <NewShareFormPop />
  </el-dialog>
</div>
</template>

<script>
/**
 * Internal dependencies
 */
import NewShareFormPop from './NewShareFormPop';

export default {
  name: 'DescriptionForm',
  components: {
    NewShareFormPop,
  },
  data() {
    return {
      radio: 1,
      items: [
        {
          certificate_type: '1',
          certificate_name: 'sss',
          certificate_number: '1234',
          share: '50',
          price: '1234567',
        },
        {
          certificate_type: '2',
          certificate_name: 'sss111',
          certificate_number: '2221234',
          share: '50',
          price: '0001234567',
        },
      ],
      form: {
        totalPeople: 0,
        totalShare: 0,
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
.wrap {
  width: 100%;
  margin: 35px 0 0;
  padding: 20px 0 0;
  border-top: 1px dashed #d3d7db;
}
</style>
