<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="160px">
    <el-form-item label="项目名称" prop="name">
      <el-col :span="8">
        <el-input v-model="form.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="制片方" prop="producer">
      <el-col :span="8">
        <el-input v-model="form.producer"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="导演" prop="director">
      <el-col :span="8">
        <el-input v-model="form.director"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="编剧" prop="scriptwriter">
      <el-col :span="8">
        <el-input v-model="form.scriptwriter"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="主演" prop="protagonist">
      <el-col :span="8">
        <el-input v-model="form.protagonist"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电影类型" prop="type">
      <el-col :span="8">
        <el-input v-model="form.type"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="上映时间" prop="release_date">
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.release_date" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="剧情简介" prop="story_description">
      <el-col :span="8">
        <el-input type="textarea" :rows="4" v-model="form.story_description"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="初始份额可转让比例" prop="transferable_ratio">
      <el-col :span="8">
        <el-input v-model="form.transferable_ratio">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="项目预算金额" prop="budget">
      <el-col :span="8">
        <el-input v-model="form.budget">
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="备案立项号" prop="record_number">
      <el-col :span="8">
        <el-input v-model="form.record_number"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拍摄许可证号" prop="shoot_licence_number">
      <el-col :span="8">
        <el-input v-model="form.shoot_licence_number"></el-input>
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
          producer: '',
          director: '',
          scriptwriter: '',
          protagonist: '',
          type: '',
          release_date: '',
          story_description: '',
          transferable_ratio: '',
          budget: '',
          record_number: '',
          shoot_licence_number: '',
          stage: '',
          list_img: [],
          header_img: [],
          desc_img: [],
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
    },
  };
</script>

<style lang="less" scoped>

</style>
