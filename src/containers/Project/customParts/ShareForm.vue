<template>
  <div class="share-form">
    <el-form ref="form" :model="poriginData" label-width="160px">
      <div class="wrap" v-for="(item, index) in poriginData.list">
        <el-form-item label="身份类型">
          <el-col>
            <template>
              <el-radio class="radio" v-model="item.certificate_type" :label="1"
                        :disabled="!editable">
                个人（身份证）
              </el-radio>
              <el-radio class="radio" v-model="item.certificate_type" :label="2"
                        :disabled="!editable">
                企业（社会统一信用代码）
              </el-radio>
            </template>
          </el-col>
        </el-form-item>
        <el-form-item label="证件名称" :prop="checkName(index)" :rules="[{ required: true, message: '请输入证件名称'}]">
          <el-col :span="8">
            <el-input v-model="item.certificate_name" :disabled="!editable"/>
          </el-col>
        </el-form-item>
        <el-form-item label="证件号码" :prop="checkNumber(index)" :rules="[{ required: true, message: '请输入证件号码'}]">
          <el-col :span="8">
            <el-input v-model="item.certificate_number" :disabled="!editable"/>
          </el-col>
        </el-form-item>
        <el-form-item label="所占份额" :prop="checkShare(index)" :rules="[{ required: true, message: '请输入所占份额'}]">
          <el-col :span="8">
            <el-input v-model="item.share" :disabled="!editable">
              <template slot="append">%</template>
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="投资金额" v-if="!priceIsHide" :prop="checkPrice(index)" :rules="[{ required: true, message: '请输入投资金额'}]">
          <el-col :span="8">
            <el-input v-model="item.price" :disabled="!editable">
              <template slot="append">元</template>
            </el-input>
          </el-col>
        </el-form-item>
        <el-button v-if="!buttonsIsHide" type="danger" @click="del(index)">删除
        </el-button>

      </div>

      <div class="whole-form-operate" v-if="!buttonsIsHide">
        <el-form-item>
          <el-button type="primary" @click="addShare">新建份额</el-button>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-dialog ref="dia" :title="dialog.name" v-model="dialog.visible">
      <NewShareFormPop :addCallback="addCallback"
                       :cancelCallback="cancelCallback"/>
    </el-dialog>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import _ from 'lodash';
  import { Message } from 'element-ui';
  import NewShareFormPop from './NewShareFormPop';
  import server from '../../../store/modules/AjaxServer';

  export default {
    name: 'ShareForm',
    components: {
      NewShareFormPop,
    },
    props: {
      poriginData: Object,
      editable: Boolean,
      buttonsIsHide: {
        type: Boolean,
        default: true,
      },
      priceIsHide: Boolean,
    },
    data() {
      return {
        form: null,
        resetData: _.cloneDeep(this.poriginData),
        radio: 1,
        dialog: {
          name: '新建份额',
          visible: false,
        },
      };
    },
    methods: {
      checkName(cs) {
        return `list[${cs}].certificate_name`;
      },
      checkNumber(cs) {
        return `list[${cs}].certificate_number`;
      },
      checkShare(cs) {
        return `list[${cs}].share`;
      },
      checkPrice(cs) {
        return `list[${cs}].price`;
      },
      handleReset() {
        this.poriginData.totalInfo = this.resetData.totalInfo;
        this.poriginData.list.splice(0, this.resetData.totalInfo.totalPeople, ...this.resetData.list);
      },
      handleSubmit() {
        this.$refs.form.validate((val) => {
          if (val) {
            server.fixOriginShare({
              movie_id: this.$route.params.id,
              sendData: {
                movie_id: this.$route.params.id,
                items: this.poriginData.list,
              },
            }).then((res) => {
              if (res.data.code === 0) {
                Message({ // eslint-disable-line
                  showClose: true,
                  message: '保存成功',
                  type: 'success',
                  duration: 4000,
                  customClass: 'ajaxErrorMsg',
                });
              }
            });
          }
        });
      },
      addShare() {
        this.dialog.visible = true;
      },
      addCallback(data) {
        data.certificate_type -= 0;
        data.share -= 0;
        this.$refs.dia.close();
        this.poriginData.list.push(data);
      },
      cancelCallback() {
        this.$refs.dia.close();
      },
      del(index) {
        this.poriginData.list.splice(index, 1);
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

  .whole-form-operate {
    border-top: 1px dashed #d3d7db;
    padding-top: 20px;
    margin-top: 35px;
  }

  .el-button.el-button--danger {
    margin: 0 0 0 70%;
  }
</style>
