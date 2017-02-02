<template>

  <el-form ref="form" :rules="rules" :model="origindata" label-width="160px">
    <el-form-item label="项目名称" prop="name">
      <el-col :span="8">
        <el-input v-model="origindata.name"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="制片方" prop="producer">
      <el-col :span="8">
        <el-input v-model="origindata.producer"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="导演" prop="director">
      <el-col :span="8">
        <el-input v-model="origindata.director"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="编剧" prop="scriptwriter">
      <el-col :span="8">
        <el-input v-model="origindata.scriptwriter"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="主演" prop="protagonist">
      <el-col :span="8">
        <el-input v-model="origindata.protagonist"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电影类型" prop="type">
      <el-col :span="8">
        <el-input v-model="origindata.type"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="上映时间" prop="release_date">
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"
                        :disabled="origindata.status !== 10"
                        v-model="origindata.release_date"
                        @change="changeDateVal"
                        style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="剧情简介" prop="story_description">
      <el-col :span="8">
        <el-input type="textarea" :rows="4"
                  v-model="origindata.story_description"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="初始份额可转让比例" prop="transferable_ratio">
      <el-col :span="8">
        <el-input v-model="origindata.transferable_ratio"
                  :disabled="origindata.status !== 10">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="项目预算金额" prop="budget">
      <el-col :span="8">
        <el-input v-model="origindata.budget"
                  :disabled="origindata.status !== 10">
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="备案立项号" prop="record_number">
      <el-col :span="8">
        <el-input v-model="origindata.record_number"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拍摄许可证号" prop="shoot_licence_number">
      <el-col :span="8">
        <el-input v-model="origindata.shoot_licence_number"
                  :disabled="origindata.status !== 10"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="项目阶段" prop="stage">
      <el-col :span="8">
        <el-select v-model="origindata.stage" placeholder="项目阶段"
                   :disabled="origindata.status !== 10"
                   @change="changes">
          <el-option v-for="it in dict.stage"
                     :label="it.label" :value="it.value"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="首页列表图">
      <Upload :pFileList="fileListFn(origindata.list_img)"
              :pCallback="uploadCallback" pType="list_img"
              :pDisabled="origindata.status !== 10"/>
    </el-form-item>

    <el-form-item label="详情页头图">
      <Upload :pFileList="fileListFn(origindata.header_img)"
              :pCallback="uploadCallback" pType="header_img"
              :pDisabled="origindata.status !== 10"/>
    </el-form-item>

    <el-form-item label="详情页项目介绍图">
      <Upload :pFileList="fileListFn(origindata.desc_img)"
              :pCallback="uploadCallback" pType="desc_img"
              :pDisabled="origindata.status !== 10"/>
    </el-form-item>

    <el-form-item>
      <!--<el-button type="primary" @click="handleSubmit">保存</el-button>-->
      <!--<el-button @click="handlePublish">发布</el-button>-->
      <Buttons :buttonData="buttonData"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import _ from 'lodash';
  import Upload from '../../../components/Upload';
  import server from '../../../store/modules/AjaxServer';
  import Buttons from './Button';

  export default {
    name: 'DescriptionForm',
    props: {
      porigindata: Object,
    },
    mounted() {
    },
    data() {
      return {
        dict: _.cloneDeep(this.$store.state.dict),
        origindata: _.cloneDeep(this.porigindata),
        buttonData: (() => {
          const params = [];
          if (this.porigindata.status === 10) {
            params.push({
              desc: '保存',
              callback: () => {
                this.handleSubmit();
              },
            });
            params.push({
              type: 'success',
              desc: '发布',
              callback: () => {
                this.handlePublish();
              },
            });
          }
          return params;
        })(),
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
            { required: true, message: '请输入上映时间', trigger: 'blur' },
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
            { required: true, message: '请输入备案立项号', trigger: 'blur' },
          ],
          shoot_licence_number: [
            { required: true, message: '请输入拍摄许可证号', trigger: 'blur' },
          ],
          stage: [
            { required: true, message: '请输入项目阶段', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      // datepicker change
      changeDateVal(...cs) {
        this.origindata.release_date = cs[0];
      },
      handleRemove() {
      },
      handlePreview() {
      },
      handleSuccess() {
      },
      handleError() {
      },
//      handleReset() {
//        this.$refs.form.resetFields();
//      },
      handleSubmit() {
//        this.$refs.form.validate();
        server.fixProject({
          id: this.$route.params.id,
          sendData: this.origindata,
        });
      },
      handlePublish() {
        const id = this.$route.params.id;
        server.changeProject({
          id,
          sendData: {
            id,
            status: 10,
          },
        });
      },
      // 项目阶段change
      changes() {

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
        this.origindata[params.type] = tempVal;
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
