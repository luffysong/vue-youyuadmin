<template>
<el-table
  :data="table.content"
  stripe
  border>
  <el-table-column
    fixed
    sortable
    align="center"
    prop="id"
    label="份额ID"
    width="150">
  </el-table-column>
  <el-table-column
    align="center"
    prop="name"
    label="项目名称"
    width="200">
  </el-table-column>
  <el-table-column
    align="center"
    inline-template
    label="制片方"
    width="200">
    <el-popover trigger="hover" placement="top">
      <p>片名: {{ row.name }}</p>
      <div slot="reference">
        <el-tag>{{ row.maker }}</el-tag>
      </div>
    </el-popover>
  </el-table-column>
  <el-table-column
    align="center"
    inline-template
    label="转让人"
    width="200">
    <el-popover trigger="hover" placement="top">
      <p>片名: {{ row.name }}</p>
      <div slot="reference">
        <el-tag>{{ row.user }}</el-tag>
      </div>
    </el-popover>
  </el-table-column>
  <el-table-column
    sortable
    align="center"
    prop="percent"
    label="挂牌份额"
    width="200">
  </el-table-column>
  <el-table-column
    sortable
    align="center"
    prop="applyTime"
    label="申请时间"
    width="200">
  </el-table-column>
  <el-table-column
    align="center"
    prop="auditor"
    label="审核人"
    width="200">
  </el-table-column>
  <el-table-column
    fixed="right"
    inline-template
    align="center"
    label="操作"
    width="200">
    <el-button type="info"
      icon="view" size="small">
      查看
    </el-button>
  </el-table-column>
</el-table>
</template>

<script>
export default {
  name: 'TransferTable',
  data() {
    return {
      table: {
        content: [
          {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          }, {
            id: '00001',
            name: '神奇动物在哪里',
            maker: '华纳影业',
            user: '李冰冰',
            percent: '20%',
            applyTime: '2016-12-18 20:40',
            auditor: '汤圆儿',
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>

</style>
