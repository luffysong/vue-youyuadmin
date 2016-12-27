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
    label="订单号"
    width="150">
  </el-table-column>
  <el-table-column
    align="center"
    prop="projectName"
    label="项目名称"
    width="200">
  </el-table-column>
  <el-table-column
    align="center"
    inline-template
    label="支付人"
    width="200">
    <el-popover trigger="hover" placement="top">
      <p>订单号: {{ row.id }}</p>
      <div slot="reference">
        <el-tag>{{ row.payer }}</el-tag>
      </div>
    </el-popover>
  </el-table-column>
  <el-table-column
    align="center"
    prop="payStatus"
    label="支付状态"
    width="200">
  </el-table-column>
  <el-table-column
    align="center"
    prop="payType"
    label="类型"
    width="200">
  </el-table-column>
  <el-table-column
    sortable
    align="center"
    prop="accept"
    label="实收"
    width="200">
  </el-table-column>
  <el-table-column
    sortable
    align="center"
    prop="openTime"
    label="开启时间"
    width="200">
  </el-table-column>
  <el-table-column
    sortable
    align="center"
    prop="totalCount"
    label="总额"
    width="200">
  </el-table-column>
  <el-table-column
    fixed="right"
    inline-template
    align="center"
    label="操作"
    width="200">
    <el-button-group>
      <el-button type="info"
        icon="view" size="small">
        详情
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
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          }, {
            id: '00000000',
            projectName: '爱宠大作战',
            payer: '大土豪',
            payStatus: '要不起',
            payType: '保证金',
            accept: '10,000.00',
            openTime: '2016-12-26 10:00',
            totalCount: '10,000.00',
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>

</style>
