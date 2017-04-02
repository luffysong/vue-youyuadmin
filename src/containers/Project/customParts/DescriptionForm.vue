<template>
  <el-form ref="form" :rules="rules" :model="origindata" label-width="160px">
    <el-form-item label="项目名称" prop="name">
      <el-col :span="8">
        <el-input v-model="origindata.name"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="制片方" prop="producer">
      <el-col :span="8">
        <el-input v-model="origindata.producer"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="导演" prop="director">
      <el-col :span="8">
        <el-input v-model="origindata.director"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="编剧" prop="scriptwriter">
      <el-col :span="8">
        <el-input v-model="origindata.scriptwriter"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="主演" prop="protagonist">
      <el-col :span="8">
        <el-input v-model="origindata.protagonist"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电影类型" prop="type">
      <el-col :span="8">
        <el-input v-model="origindata.type"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="上映时间" prop="release_date">
      <el-col :span="8">
        <el-date-picker type="date" placeholder="待定"
                        :disabled="checkEditEnable(origindata.status)"
                        :editable=false
                        v-model="origindata.release_date"
                        @change="changeDateVal"
                        style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="剧情简介" prop="story_description">
      <el-col :span="8">
        <el-input type="textarea" :rows="4"
                  v-model="origindata.story_description"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="初始份额可转让比例" prop="transferable_ratio">
      <el-col :span="8">
        <el-input v-model.number="origindata.transferable_ratio"
                  :disabled="origindata.status !== 10">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="项目预算金额" prop="budget">
      <el-col :span="8">
        <el-input v-model="origindata.budget"
                  :disabled="checkEditEnable(origindata.status)">
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="备案立项号" prop="record_number">
      <el-col :span="8">
        <el-input v-model="origindata.record_number"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拍摄许可证号" prop="shoot_licence_number">
      <el-col :span="8">
        <el-input v-model="origindata.shoot_licence_number"
                  :disabled="checkEditEnable(origindata.status)"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="项目阶段" prop="stage">
      <el-col :span="8">
        <el-select v-model="origindata.stage" placeholder="项目阶段"
                   :disabled="checkEditEnable(origindata.status)"
                   @change="changes">
          <el-option v-for="it in dict"
                     :label="it.label" :value="Number(it.value)"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="首页列表图">
      <Upload :pFileList="fileListFn(origindata.list_img)"
              :pCallback="uploadCallback" pType="list_img"
              pTip="上传格式 jpg, png; 尺寸：210x294px"
              :pDisabled="checkEditEnable(origindata.status)"/>
    </el-form-item>

    <el-form-item label="详情页头图">
      <Upload :pFileList="fileListFn(origindata.header_img)"
              :pCallback="uploadCallback" pType="header_img"
              pTip="上传格式 jpg, png; 尺寸：212x296px"
              :pDisabled="checkEditEnable(origindata.status)"/>
    </el-form-item>

    <el-form-item label="详情页项目介绍图">
      <Upload :pFileList="fileListFn(origindata.desc_img)"
              :pCallback="uploadCallback" pType="desc_img"
              pTip="上传格式 jpg, png; 尺寸：宽度小于680px"
              :pDisabled="checkEditEnable(origindata.status)"/>
    </el-form-item>
    <el-form-item label="重要公告">
      <el-col :span="8">
        <el-input type="textarea" :rows="4"
                  v-model="origindata.notice"
                  ></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <div class="buttons">
        <span v-for="it in pbuttons" class="button-wrap">
          <el-button :type="it.type" @click="it.callback(origindata, form)">{{it.desc}}</el-button>
        </span>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import _ from 'lodash';
  import Upload from '../../../components/Upload';
  import dict from '../../../store/modules/dictLabel';
  import permissionCheck from '../../../utils/permissionCheck';

  export default {
    name: 'DescriptionForm',
    props: {
      porigindata: Object,
      pbuttons: {
        type: Array,
        default: [
          {
            type: 'primary',
            desc: '按钮',
            callback: () => {},
          },
        ],
      },
    },
    mounted() {
    },
    computed: {
      form() {
        return this.$refs;
      },
    },
    data() {
      return {
        dict: dict.state.movie_stage,
        origindata: (() => {
          const data = _.cloneDeep(this.porigindata);
          return data;
        })(),
        permissionCheck,
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
//          release_date: [
//            { required: false, message: '请输入上映时间', trigger: 'blur' },
//          ],
          story_description: [
            { required: true, message: '请输入剧情简介', trigger: 'blur' },
          ],
          transferable_ratio: [
            { required: true, message: '请输入份额', trigger: 'blur', type: 'number' },
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
            { required: true, message: '请输入项目阶段', trigger: 'blur', type: 'number' },
          ],
        },
      };
    },
    methods: {
      // datepicker change
      changeDateVal(...cs) {
        const tempVal = cs[0] ? cs[0] : '0000-00-00';
        this.origindata.release_date = tempVal;
      },
      //      handleReset() {
      //        this.$refs.form.resetFields();
      //      },
      handleSubmit() {
        //        this.$refs.form.validate();
      },
      // 项目阶段change
      changes() {

      },
      checkEditEnable(status) {
        let result = true;
        if (status !== 10 && status !== 20) {
          result = true;
        } else if ((status === 10 || status === 20) && permissionCheck(['api.movie.update'])) {
          result = false;
        }
        return result;
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
    },
  };
</script>

<style lang="css">
  .el-input.is-disabled .el-input__inner,
  .el-textarea.is-disabled .el-textarea__inner {
    color: #434343;
  }

  .buttons button {
    margin-right: 20px;
  }
</style>
