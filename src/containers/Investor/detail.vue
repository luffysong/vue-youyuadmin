<template>
  <div v-if="detailData.info" class="investor-detail">
    <el-form ref="form" :model="detailData.info" :rules="rules" label-width="160px">
      <el-form-item label="申请人" prop="name">
        <el-col :span="8">
          <el-input v-model="detailData.info.certificate_name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="证件号" prop="certificate_number">
        <el-col :span="8">
          <el-input v-model="detailData.info.certificate_number" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="会员类型" prop="member_type">
        <el-col :span="8">
          <el-select v-model="detailData.info.member_type" placeholder="请选择" :disabled="true">
            <el-option
              v-for="item in memberTypes"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="detailData.info.created_at" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="开户类型" prop="identity_type">
        <el-col :span="8">
          <el-input v-model="detailData.info.identity_type" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="个人名片" prop="business_card">
        <el-col :span="8">
          <img class="business_card"
            :src="detailData.info.business_card"
            alt="">
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePass">通过</el-button>
        <el-button @click="handleReject">驳回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<style>
  .investor-detail input {
    color: #333 !important;
  }

  .business_card {
    max-width: 300px;
  }
</style>
<script>
  // import { mapGetters } from 'vuex';
  import * as types from '../../store/types';
  import mixins from './table/mixins';

  export default {
    name: 'InvestorDetail',
    props: {},
    mixins: [mixins],
    methods: {
      handleReject() {
//        this.$refs.form.resetFields();
      },
      handlePass() {
//        this.$refs.form.validate();
      },
    },
    computed: {
      detailData() {
        return this.$store.state.investor.detail;
      },
    },
    data() {
      return {
        memberTypes: [
          {
            label: '普通交易会员',
            value: 1,
          },
          {
            label: '综合会员',
            value: 2,
          },
        ],
        rules: {
          id: [
            { required: true, message: '请输入份额ID', trigger: 'blur' },
          ],
        },
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.INVESTORDETAIL_REQ, {
        id: this.$route.params.id,
        sendData: {},
      });
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
