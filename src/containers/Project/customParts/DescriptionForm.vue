<template>

  <el-form ref="form" :rules="rules" :model="detaildata" label-width="160px">
    <el-form-item label="项目名称" prop="name">
      <el-col :span="8">
        <el-input v-model="detaildata.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="制片方" prop="producer">
      <el-col :span="8">
        <el-input v-model="detaildata.producer"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="导演" prop="director">
      <el-col :span="8">
        <el-input v-model="detaildata.director"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="编剧" prop="scriptwriter">
      <el-col :span="8">
        <el-input v-model="detaildata.scriptwriter"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="主演" prop="protagonist">
      <el-col :span="8">
        <el-input v-model="detaildata.protagonist"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电影类型" prop="type">
      <el-col :span="8">
        <el-input v-model="detaildata.type"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="上映时间" prop="release_date">
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"
                        v-model="detaildata.release_date"
                        style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="剧情简介" prop="story_description">
      <el-col :span="8">
        <el-input type="textarea" :rows="4"
                  v-model="detaildata.story_description"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="初始份额可转让比例" prop="transferable_ratio">
      <el-col :span="8">
        <el-input v-model="detaildata.transferable_ratio">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="项目预算金额" prop="budget">
      <el-col :span="8">
        <el-input v-model="detaildata.budget">
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="备案立项号" prop="record_number">
      <el-col :span="8">
        <el-input v-model="detaildata.record_number"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拍摄许可证号" prop="shoot_licence_number">
      <el-col :span="8">
        <el-input v-model="detaildata.shoot_licence_number"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="项目阶段" prop="stage">
      <el-col :span="8">
        <el-select v-model="detaildata.stage" placeholder="项目阶段" @change="changes">
          <el-option v-for="it in dict.stage"
                     :label="it.label" :value="it.value"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="首页列表图">
      <Upload :pFileList="detaildata.desc_img" v-if="detaildata.desc_img" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
  import _ from 'lodash';
  import Upload from '../../../components/Upload';

  export default {
    name: 'DescriptionForm',
    props: {
      origindata: Object,
    },
    data() {
      const dict = _.cloneDeep(this.$store.state.dict);
      const tempData = _.cloneDeep(this.origindata);
      return {
        dict,
        detaildata: tempData,
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
      handleRemove() {
      },
      handlePreview() {
      },
      handleSuccess() {
      },
      handleError() {
      },
      handleReset() {
        this.$refs.form.resetFields();
      },
      handleSubmit() {
        this.$refs.form.validate();
      },
      changes() {
        console.log(this.detaildata, 'c');
      },
    },
    components: {
      Upload,
    },
  };
</script>

<style lang="less" scoped>

</style>
