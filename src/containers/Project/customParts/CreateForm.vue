<template>
  <div class="project-mgr-form">
    <el-form ref="form" :rules="rules" :model="pOriginData" label-width="160px">
      <el-form-item label="项目名称" prop="name">
        <el-col :span="8">
          <el-input v-model="pOriginData.name"/>
        </el-col>
      </el-form-item>
      <el-form-item label="制片方" prop="producer">
        <el-col :span="8">
          <el-input v-model="pOriginData.producer"/>
        </el-col>
      </el-form-item>
      <el-form-item label="导演" prop="director">
        <el-col :span="8">
          <el-input v-model="pOriginData.director"/>
        </el-col>
      </el-form-item>
      <el-form-item label="编剧" prop="scriptwriter">
        <el-col :span="8">
          <el-input v-model="pOriginData.scriptwriter"/>
        </el-col>
      </el-form-item>
      <el-form-item label="主演" prop="protagonist">
        <el-col :span="8">
          <el-input v-model="pOriginData.protagonist"/>
        </el-col>
      </el-form-item>
      <el-form-item label="电影类型" prop="type">
        <el-col :span="8">
          <el-input v-model="pOriginData.type"/>
        </el-col>
      </el-form-item>
      <el-form-item label="上映时间" prop="release_date">
        <el-col :span="8">
          <el-date-picker type="date" placeholder="待定"
                          :editable=false
                          v-model="pOriginData.release_date"
                          @change="changeDateVal"
                          :picker-options="pickerOptions"
                          style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item label="剧情简介" prop="story_description">
        <el-col :span="8">
          <el-input type="textarea" :rows="4"
                    v-model="pOriginData.story_description"/>
        </el-col>
      </el-form-item>
      <el-form-item label="初始份额可转让比例" prop="transferable_ratio">
        <el-col :span="8">
          <el-input v-model="pOriginData.transferable_ratio">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="项目预算金额" prop="budget">
        <el-col :span="8">
          <el-input v-model="pOriginData.budget">
            <template slot="prepend">￥</template>
            <template slot="append">元</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="备案立项号" prop="record_number">
        <el-col :span="8">
          <el-input v-model="pOriginData.record_number"/>
        </el-col>
      </el-form-item>
      <el-form-item label="拍摄许可证号" prop="shoot_licence_number">
        <el-col :span="8">
          <el-input v-model="pOriginData.shoot_licence_number"/>
        </el-col>
      </el-form-item>
      <el-form-item label="项目阶段" prop="stage">
        <el-col :span="8">
          <el-select v-model="pOriginData.stage" placeholder="项目阶段"
                     @change="changeProjectStage">
            <el-option v-for="it in dict"
                       :label="it.label" :value="Number(it.value)"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="首页列表图">
        <Upload :pFileList="fileListFn(pOriginData.list_img)"
                :pCallback="uploadCallback" pType="list_img"
                prop="header_img" pTip="上传格式 jpg, png; 尺寸：210x294px"
                :pDisabled="false"/>
      </el-form-item>

      <el-form-item label="详情页头图">
        <Upload :pFileList="fileListFn(pOriginData.header_img)"
                :pCallback="uploadCallback" pType="header_img"
                pTip="上传格式 jpg, png; 尺寸：212x296px"
                :pDisabled="false"/>
      </el-form-item>

      <el-form-item label="详情页项目介绍图">
        <Upload :pFileList="fileListFn(pOriginData.desc_img)"
                :pCallback="uploadCallback" pType="desc_img"
                pTip="上传格式 jpg, png; 尺寸：宽度小于680px"
                :pDisabled="false"/>
      </el-form-item>

      <el-form-item label="重要公告">
        <el-col :span="8">
          <el-input type="textarea" :rows="4"
                    v-model="pOriginData.notice"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <!--<el-button type="primary" @click="handleSubmit">保存</el-button>-->
        <!--<el-button @click="handlePublish">发布</el-button>-->
        <Buttons :buttonData="buttonData"/>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import { Message } from 'element-ui';
  import Upload from '../../../components/Upload';
  import Buttons from '../../../components/Button';
  import dict from '../../../store/modules/dictLabel';

  export default {
    name: 'CreateForm',
    props: {
      pOriginData: Object,
      submitCallback: Function,
    },
    mounted() {
    },
    data() {
      return {
        dict: dict.state.movie_stage,
        buttonData: (() => {
          const params = [];
          params.push({
            desc: '保存',
            callback: () => {
              this.handleSubmit();
            },
          });
          return params;
        })(),
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        rules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          producer: [
            { required: true, message: '请输入制片方', trigger: 'blur' },
          ],
          director: [
            { required: true, message: '请输入导演', trigger: 'blur' },
          ],
          scriptwriter: [
            { required: true, message: '请输入编剧', trigger: 'blur' },
          ],
          protagonist: [
            { required: true, message: '请输入主演', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请输入电影类型', trigger: 'blur' },
          ],
          release_date: [
            { required: false, message: '请输入上映时间', trigger: 'change' },
          ],
          story_description: [
            { required: true, message: '请输入剧情简介', trigger: 'blur' },
          ],
          transferable_ratio: [
            { required: true, message: '请输入份额', trigger: 'blur' },
          ],
          budget: [
            { required: true, message: '请输入项目预算金额', trigger: 'blur' },
          ],
          record_number: [
            { required: false, message: '请输入备案立项号', trigger: 'blur' },
          ],
          shoot_licence_number: [
            { required: false, message: '请输入拍摄许可证号', trigger: 'blur' },
          ],
          stage: [
            { type: 'number', required: true, message: '请输入项目阶段', trigger: 'change' },
          ],
        },
      };
    },
    methods: {
      // datepicker change
      changeDateVal(...cs) {
        this.pOriginData.release_date = cs[0];
      },
      changeProjectStage() {

      },
      checkUpload() {
        if (!this.pOriginData.list_img
          || !this.pOriginData.header_img
          || this.pOriginData.desc_img.length === 0) {
          return '请上传相关图片';
        }
        return false;
      },
      errPop(msg) {
        Message({ // eslint-disable-line
          showClose: true,
          message: `出错啦：${msg}`,
          type: 'error',
          duration: 4000,
          customClass: 'ajaxErrorMsg',
        });
      },
      handleSubmit() {
        this.$refs.form.validate((cs) => {
          if (!cs) {
            this.errPop('表单填写有误，请检查');
            return;
          }
          const uploadMsg = this.checkUpload();
          if (uploadMsg) {
            this.errPop(uploadMsg);
            return;
          }
          this.submitCallback(this.pOriginData);
        });
      },
      // upload 组件使用 callback
      uploadCallback(params) {
        let tempVal;
        if (params.type === 'header_img' || params.type === 'list_img') {
          if (params.value.length === 0) {
            tempVal = [];
          } else {
            tempVal = params.value[0].url;
          }
        } else if (params.type === 'desc_img') {
          tempVal = [];
          params.value.forEach((el) => {
            tempVal.push(el.url);
          });
        }
        this.pOriginData[params.type] = tempVal;
      },
      fileListFn(...cs) {
        // 此处数据处理说明，组件需要数组，但实际需求中，有可能是一个字符串
        if (typeof cs[0] === 'string') {
          const arr = [];
          if (cs[0].length > 0) {
            arr.push(cs[0]);
          }
          return arr;
        }
        return cs[0];
      },
    },
    components: {
      Upload,
      Buttons,
    },
  };
</script>

<style lang="css">
  .el-input.is-disabled .el-input__inner,
  .el-textarea.is-disabled .el-textarea__inner {
    color: #434343;
  }

</style>
