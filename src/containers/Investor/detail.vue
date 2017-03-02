<template>
  <div v-if="!detailData.detailLoading" class="investor-detail">
    <el-form ref="form" :model="detailData.detail.info" :rules="rules"
             label-width="160px">
      <el-form-item label="申请人" prop="certificate_name">
        <el-col :span="8">
          <el-input v-model="detailData.detail.info.certificate_name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="证件号" prop="certificate_number">
        <el-col :span="8">
          <el-input v-model="detailData.detail.info.certificate_number"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="会员类型" prop="member_type">
        <el-col :span="8">
          <el-select v-model="detailData.detail.info.member_type" placeholder="请选择"
                     :disabled="true">
            <el-option
              v-for="item in memberTypes"
              :label="item.label"
              :value="Number(item.value)">
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="detailData.detail.info.created_at" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="开户类型" prop="identity_type">
        <el-col :span="8">
          <el-input :value="detailData.detail.info.identity_type | identityTransfer" :disabled="true">
          </el-input>
          <div v-if="detailData.detail.info.identity_type === 2">
            <a class="link" href="http://www.gsxt.gov.cn/index.html" target="_blank">国家企业信用信息公示系统</a>
            <a class="link" href="http://www.tianyancha.com/" target="_blank">天眼查</a>
          </div>

        </el-col>
      </el-form-item>
      <el-form-item label="身份证复印件" prop="copies_identity_card" v-if="detailData.detail.info.identity_type === 1">
        <el-col :span="8">
          <img class="business_card"
               :src="detailData.detail.info.copies_identity_card"
               alt="">
        </el-col>
      </el-form-item>
      <el-form-item label="营业执照" prop="copies_ic_business_license" v-if="detailData.detail.info.identity_type === 2">
        <el-col :span="8">
          <img class="business_card"
               :src="detailData.detail.info.copies_ic_business_license"
               alt="">
        </el-col>
      </el-form-item>
      <el-form-item label="个人名片" prop="business_card" v-if="detailData.detail.info.identity_type === 1">
        <el-col :span="8">
          <img class="business_card"
               :src="detailData.detail.info.business_card"
               alt="">
        </el-col>
      </el-form-item>
      <el-form-item v-if="detailData.detail.info.status === 1">
        <el-button type="primary" @click="handlePass">通过</el-button>
        <el-button @click="handleReject">驳回</el-button>
      </el-form-item>
    </el-form>
    <PopMsg :popMsgConfig="popMsgConfig"/>
  </div>

</template>
<style>
  .investor-detail input {
    color: #333 !important;
  }

  .business_card {
    max-width: 300px;
  }

  .investor-detail .link {
    text-decoration: none;
    color: #777;
    display: inline-block;
    margin-top: 10px;
    padding: 0 10px;
    border: 1px solid #aaa;
    border-radius: 3px;
  }
</style>
<script>
  // import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import * as types from '../../store/types';
  import server from '../../store/modules/AjaxServer';
  import mixins from './table/mixins';
  import PopMsg from '../../components/PopMsg';
  import dict from '../../store/modules/dictLabel';

  export default {
    name: 'InvestorDetail',
    props: {},
    mixins: [mixins],
    methods: {
      getDetailData() {
        this.$store.dispatch(types.HIDE_SIDEBAR);
        this.$store.dispatch(types.INVESTORDETAIL_REQ, {
          id: this.$route.params.id,
          sendData: {},
        });
      },
      handleReject() {
        _.assign(this.popMsgConfig, this.popDefault, {
          dialogVisible: true,
          title: '操作提示',
          desc: '确定拒绝该用户成为投资人？',
          type: 'confirm',
          sureCallback: () => {
            server.changeUser({
              id: this.$route.params.id,
              sendData: {
                status: 3,
              },
            }).then((res) => {
              if (res.body.code === 0) {
                this.getDetailData();
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '用户驳回操作',
                  desc: '操作成功',
                  sureCallback: () => {
                    this.popMsgConfig.dialogVisible = false;
                  },

                });
              }
            });
            this.popMsgConfig.dialogVisible = false;
          },
        });
      },
      handlePass() {
        _.assign(this.popMsgConfig, this.popDefault, {
          dialogVisible: true,
          title: '操作提示',
          desc: '确定批准该用户成为投资人？',
          type: 'confirm',
          sureCallback: () => {
            server.changeUser({
              id: this.$route.params.id,
              sendData: {
                status: 2,
              },
            }).then((res) => {
              if (res.body.code === 0) {
                this.getDetailData();
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '用户通过操作',
                  desc: '操作成功',
                  sureCallback: () => {
                    this.popMsgConfig.dialogVisible = false;
                  },
                });
              }
            });
            this.popMsgConfig.dialogVisible = false;
          },
        });
      },
    },
    computed: {
      detailData() {
        return this.$store.state.investor;
      },
    },
    data() {
      return {
        memberTypes: dict.state.member_type,
        rules: {
          id: [
            { required: true, message: '请输入份额ID', trigger: 'blur' },
          ],
        },
        popMsgConfig: {
          dialogVisible: false,
          type: 'alert', // alert | confirm
          title: '提示',
          desc: '描述',
          sureCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
          cancelCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
        },
        popDefault: {
          dialogVisible: false,
          type: 'alert', // alert | confirm
          title: '提示',
          desc: '描述',
          sureCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
          cancelCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
        },
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.INVESTORDETAIL_REQ, {
        id: this.$route.params.id,
        sendData: {},
      });
    },
    components: {
      PopMsg,
    },
  };

</script>
