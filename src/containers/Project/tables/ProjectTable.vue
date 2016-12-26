<template>
<el-table
  :data="table.content"
  stripe
  border>
  <el-table-column
    fixed
    prop="id"
    label="项目ID"
    width="150">
  </el-table-column>
  <el-table-column
    prop="name"
    label="项目名称"
    width="200">
  </el-table-column>
  <el-table-column
    prop="maker"
    label="制片方"
    width="200">
  </el-table-column>
  <el-table-column
    prop="registerTime"
    label="登记时间"
    width="200">
  </el-table-column>
  <el-table-column
    fixed="right"
    inline-template
    align="center"
    label="操作"
    width="200">
    <el-button-group>
      <el-button type="success"
        icon="circle-check" size="small">
        显示
      </el-button>
      <el-button type="info"
        icon="view" size="small">
        查看
      </el-button>
    </el-button-group>
  </el-table-column>
</el-table>
</template>

<script>
export default {
  name: 'ProjectTable',
  data() {
    return {
      table: {
        content: [
          {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            registerTime: '登记时间',
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>

</style>
