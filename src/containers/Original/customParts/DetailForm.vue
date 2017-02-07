<template>
  <div>
    <el-form ref="form" :model="pDetailData.info" :rules="rules"
             label-width="160px">
      <el-form-item label="份额ID" prop="id">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.id" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目名称" prop="name">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.movie.name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="producer">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.movie.producer" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="转让方" prop="certificate_name">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.user.real_info.certificate_name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="原始份额" prop="share">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.asset.share" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="现持有原始份额" prop="share">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.asset.share"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌份额" prop="share">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.share" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌价格" prop="price">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.price" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.created_at" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌天数" prop="days">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.days" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方名称" prop="transferee_certificate_name">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.transferee_certificate_name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方证件号" prop="transferee_certificate_number">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.transferee_certificate_number" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="禁售期" prop="transferee_deadline">
        <el-col :span="8">
          <el-input v-model="pDetailData.info.transferee_deadline" :disabled="true">
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
<script>
  // import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';

  export default {
    name: 'OriginDetail',
    props: {
      pDetailData: Object,
    },
    methods: {
      handleReset() {
        this.$refs.form.resetFields();
      },
      handleSubmit() {
        this.$refs.form.validate();
      },
    },
    computed: {},
    data() {
      return {
        rules: {
          id: [
            { required: true, message: '请输入份额ID', trigger: 'blur' },
          ],
        },
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {},
  };

</script>
