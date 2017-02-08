<template>
  <div>
    <el-form ref="form" :model="local" :rules="rules" label-width="160px">
      <el-form-item label="份额ID" prop="id">
        <el-col :span="8">
          <el-input v-model="local.id">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目名称" prop="name">
        <el-col :span="8">
          <el-input v-model="local.movie.name">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="producer">
        <el-col :span="8">
          <el-input v-model="local.movie.producer">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="转让方" prop="certificate_name">
        <el-col :span="8">
          <el-input v-model="local.user.real_info.certificate_name">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌份额" prop="share">
        <el-col :span="8">
          <el-input v-model="local.share">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌价格" prop="price">
        <el-col :span="8">
          <el-input v-model="local.price">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="local.created_at">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌天数" prop="days">
        <el-col :span="8">
          <el-input v-model="local.days">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方名称" prop="transferee_certificate_name">
        <el-col :span="8">
          <el-input v-model="local.transferee_certificate_name">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方证件号" prop="transferee_certificate_number">
        <el-col :span="8">
          <el-input v-model="local.transferee_certificate_number">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="local.created_at">
          </el-input>
        </el-col>
      </el-form-item>


      <el-form-item label="成交时间" prop="updated_at">
        <el-col :span="8">
          <el-input v-model="local.updated_at">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="受让方姓名" prop="name">
        <el-col :span="8">
          <el-input v-model="local.transferee.name">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="受让方ID" prop="uid">
        <el-col :span="8">
          <el-input v-model="local.transferee.uid">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="失效时间" prop="updated_at">
        <el-col :span="8">
          <el-input v-model="local.updated_at">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="驳回时间" prop="updated_at">
        <el-col :span="8">
          <el-input v-model="local.updated_at">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="驳回理由" prop="operate_comment">
        <el-col :span="8">
          <el-input v-model="local.operate_comment">
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
