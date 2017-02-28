<template>
  <div>
    <el-form ref="form" :model="detailData.info" :rules="rules"
             label-width="160px">
      <el-form-item label="份额ID" prop="id">
        <el-col :span="8">
          <el-input v-model="detailData.info.id" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目名称" prop="name">
        <el-col :span="8">
          <el-input v-model="detailData.info.movie.name" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="producer">
        <el-col :span="8">
          <el-input v-model="detailData.info.movie.producer" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="转让方" prop="certificate_name">
        <el-col :span="8">
          <el-input v-model="detailData.info.user.real_info.certificate_name"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="原始份额" prop="share">
        <el-col :span="8">
          <el-input :value="detailData.info.asset.share*100" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="现持有原始份额" prop="share">
        <el-col :span="8">
          <el-input :value="detailData.info.asset.share*100"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌份额" prop="share">
        <el-col :span="8">
          <el-input v-model="detailData.info.share" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌价格" prop="price">
        <el-col :span="8">
          <el-input v-model="detailData.info.price" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="申请时间" prop="created_at">
        <el-col :span="8">
          <el-input v-model="detailData.info.created_at" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="挂牌天数" prop="days">
        <el-col :span="8">
          <el-input v-model="detailData.info.days" :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方名称" prop="transferee_certificate_name">
        <el-col :span="8">
          <el-input v-model="detailData.info.transferee_certificate_name"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="指定受让方证件号" prop="transferee_certificate_number">
        <el-col :span="8">
          <el-input v-model="detailData.info.transferee_certificate_number"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="禁售期" prop="transferee_deadline">
        <el-col :span="8">
          <el-input v-model="detailData.info.transferee_deadline"
                    :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="理由(驳回操作必填)" v-if="pDetailData.info.status === 1">
        <el-col :span="8">
          <el-input v-model="reason" type="textarea"/>
        </el-col>
      </el-form-item>
      <el-form-item>
        <Buttons :buttonData="buttons"/>
      </el-form-item>
    </el-form>
    <PopMsg :popMsgConfig="popMsgConfig"/>

  </div>
</template>

<script>
  // import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import Buttons from '../../../components/Button';
  import PopMsg from '../../../components/PopMsg';
  import server from '../../../store/modules/AjaxServer';

  export default {
    name: 'OriginDetail',
    props: {
      pDetailData: Object,
      getDetail: Function,
    },
    computed: {
      detailData() {
        if (this.pDetailData.info.status === 1) {
          this.buttons = [
            {
              type: 'primary',
              desc: '通过',
              callback: () => {
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '操作提示',
                  desc: '确定通过该项目？',
                  type: 'confirm',
                  sureCallback: () => {
                    server.changeQuoted({
                      id: this.$route.params.id,
                      sendData: {
                        status: 3,
                      },
                    }).then((res) => {
                      if (res.body.code === 0) {
                        this.getDetail();
                        _.assign(this.popMsgConfig, this.popDefault, {
                          dialogVisible: true,
                          title: '项目操作',
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
            {
              type: 'danger',
              desc: '驳回',
              callback: () => {
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '操作提示',
                  desc: '确定驳回该项目？',
                  type: 'confirm',
                  sureCallback: () => {
                    server.changeQuoted({
                      id: this.$route.params.id,
                      sendData: {
                        status: 2,
                      },
                    }).then((res) => {
                      if (res.body.code === 0) {
                        this.getDetail();
                        _.assign(this.popMsgConfig, this.popDefault, {
                          dialogVisible: true,
                          title: '项目操作',
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
            {
              desc: '查看项目登记页',
              callback: () => {
                this.$router.push({
                  name: 'OriginShareTransfer',
                });
              },
            },
          ];
        } else if (this.pDetailData.info.status === 2) {
          this.buttons = [];
        } else if (this.pDetailData.info.status === 3) {
          this.buttons = [
            {
              type: 'danger',
              desc: '撤下',
              callback: () => {
                _.assign(this.popMsgConfig, this.popDefault, {
                  dialogVisible: true,
                  title: '操作提示',
                  desc: '确定撤下该项目？',
                  type: 'confirm',
                  sureCallback: () => {
                    server.changeQuoted({
                      id: this.$route.params.id,
                      sendData: {
                        status: 5,
                      },
                    }).then((res) => {
                      if (res.body.code === 0) {
                        this.getDetail();
                        _.assign(this.popMsgConfig, this.popDefault, {
                          dialogVisible: true,
                          title: '项目操作',
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
          ];
        } else if (this.pDetailData.info.status === 4) {
          this.buttons = [];
        } else if (this.pDetailData.info.status === 5) {
          this.buttons = [];
        }
        return this.pDetailData;
      },
    },
    data() {
      return {
        reason: '',
        buttons: [],
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
    components: {
      Buttons,
      PopMsg,
    },
  };

</script>
