<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="项目描述">
    <description-form />
  </el-tab-pane>
  <el-tab-pane label="项目份额">
    <share-form />
  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * Internal dependencies
 */
import ShareForm from './forms/ShareForm';
import DescriptionForm from './forms/DescriptionForm';

export default {
  name: 'Create',
  components: {
    ShareForm,
    DescriptionForm,
  },
};
</script>

<style lang="less" scoped>

</style>
