<template>
  <div style="margin-bottom: 10px;">
    <el-row>
      <el-col :span="2">
        <el-select v-model="searchParams.select" placeholder="请选择">
          <el-option
            v-for="item in searchParams.options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin: 0 10px">
        <el-input v-model="searchParams.input" placeholder="请输入搜索关键字"/>
      </el-col>
      <el-col :span="2">
        <el-button @click="searchParams.commit">搜索</el-button>
      </el-col>
    </el-row>

  </div>
</template>
<script>

  export default {
    name: 'Search',
    props: {
      searchParams: {
        type: Object,
        defalut: {
          options: [
            {
              value: 'id',
              label: '项目ID',
            },
            {
              value: 'name',
              label: '项目名称',
            },
          ],
          select: 'name',
          input: '',
          commit: () => {},
        },
      },
    },
  };

</script>
<style scoped lang="less">
</style>
