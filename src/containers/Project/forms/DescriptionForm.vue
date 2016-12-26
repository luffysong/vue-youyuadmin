<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="140px">
    <el-form-item label="项目名称" prop="name">
      <el-col :span="8">
        <el-input v-model="form.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="制片方" prop="movieMaker">
      <el-col :span="8">
        <el-input v-model="form.movieMaker"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="导演" prop="director">
      <el-col :span="8">
        <el-input v-model="form.director"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="编剧" prop="writer">
      <el-col :span="8">
        <el-input v-model="form.writer"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="主演" prop="majorRoles">
      <el-col :span="8">
        <el-input v-model="form.majorRoles"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电影类型" prop="movieType">
      <el-col :span="8">
        <el-input v-model="form.movieType"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="上映时间" prop="releaseTime">
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.releaseTime" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="剧情简介" prop="description">
      <el-input type="textarea" :rows="4" v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="项目预算金额" prop="budget">
      <el-col :span="8">
        <el-input v-model="form.budget">
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="备案立项号" prop="projectNumber">
      <el-col :span="8">
        <el-input v-model="form.projectNumber"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拍摄许可证号" prop="licenseNumber">
      <el-col :span="8">
        <el-input v-model="form.licenseNumber"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="项目阶段" prop="stage">
      <el-col :span="8">
        <el-select v-model="form.stage" placeholder="项目阶段">
          <el-option label="策划筹备期" value="1"></el-option>
          <el-option label="拍摄制作间" value="2"></el-option>
          <el-option label="宣发期" value="3"></el-option>
          <el-option label="上映期" value="4"></el-option>
          <el-option label="回款期" value="5"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="首页列表图">
      <el-upload
        action=""
        type="drag"
        :multiple="false"
        :thumbnail-mode="true"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="详情页头图">
      <el-upload
        action=""
        type="drag"
        :multiple="false"
        :thumbnail-mode="true"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="详情页项目介绍图">
      <el-upload
        action=""
        type="drag"
        :multiple="true"
        :thumbnail-mode="true"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'DescriptionForm',
    data() {
      return {
        form: {
          name: '',
          movieMaker: '',
          director: '',
          writer: '',
          majorRoles: '',
          movieType: '',
          releaseTime: '',
          description: '',
          budget: '',
          projectNumber: '',
          licenseNumber: '',
          stage: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          movieMaker: [
            { required: true, message: '请输入制片方', trigger: 'blur' },
          ],
          director: [
            { required: true, message: '请输入导演', trigger: 'blur' },
          ],
          writer: [
            { required: true, message: '请输入编剧', trigger: 'blur' },
          ],
          majorRoles: [
            { required: true, message: '请输入主演', trigger: 'blur' },
          ],
          movieType: [
            { required: true, message: '请输入电影类型', trigger: 'blur' },
          ],
          releaseTime: [
            { required: true, message: '请输入上映时间', trigger: 'blur' },
          ],
          description: [
            { required: true, message: '请输入剧情简介', trigger: 'blur' },
          ],
          budget: [
            { required: true, message: '请输入项目预算金额', trigger: 'blur' },
          ],
          projectNumber: [
            { required: true, message: '请输入备案立项号', trigger: 'blur' },
          ],
          licenseNumber: [
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
    },
  };
</script>

<style lang="less" scoped>

</style>
