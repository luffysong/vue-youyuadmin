<template>
  <div class="share-form">
    <el-form ref="form" :model="form" :rules="rules" label-width="160px">
      <div class="wrap" v-for="(item, index) in localdata.list">
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
        <el-form-item label="证件名称" prop="certificate_name">
          <el-col :span="8">
            <el-input v-model="item.certificate_name" :disabled="!editable"/>
          </el-col>
        </el-form-item>
        <el-form-item label="证件号码" prop="certificate_number">
          <el-col :span="8">
            <el-input v-model="item.certificate_number" :disabled="!editable"/>
          </el-col>
        </el-form-item>
        <el-form-item label="所占份额" prop="share">
          <el-col :span="8">
            <el-input v-model="item.share" :disabled="!editable">
              <template slot="append">%</template>
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="投资金额" prop="price">
          <el-col :span="8">
            <el-input v-model="item.price" :disabled="!editable">
              <template slot="append">元</template>
            </el-input>
          </el-col>
        </el-form-item>
        <el-button v-if="buttonsIsHide" type="danger" @click="del(index)">删除
        </el-button>

      </div>

      <div class="whole-form-operate" v-if="buttonsIsHide">
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
  import { moneyMul } from '../../../utils/math';
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
    },
    computed: {},
    data() {
      return {
        radio: 1,
        localdata: (() => {
          const data = _.cloneDeep(this.poriginData);
          data.list.forEach((el) => {
            el.share = moneyMul(el.share, 100);
          });
          return data;
        })(),
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
        this.localdata = _.cloneDeep(this.poriginData);
      },
      handleSubmit() {
        this.$refs.form.validate();
        server.fixOriginShare({
          movie_id: this.$route.params.id,
          sendData: {
            movie_id: this.$route.params.id,
            items: this.localdata.list,
          },
        });
      },
      addShare() {
        this.dialog.visible = true;
      },
      addCallback(data) {
        data.certificate_type -= 0;
        this.$refs.dia.close();
        this.localdata.list.push(data);
      },
      cancelCallback() {
        this.$refs.dia.close();
      },
      del(index) {
        this.localdata.list.splice(index, 1);
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
