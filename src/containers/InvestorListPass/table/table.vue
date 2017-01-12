<template>
  <div>
    <el-table
      :data="dataTable"
      stripe
      border>
      <el-table-column
        fixed
        prop="certificate_name"
        label="申请人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="member_type"
        label="会员类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="申请时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="operator"
        label="审核人"
        width="200">
      </el-table-column>

      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="操作"
        width="200">
        <el-button-group>
          <!-- <el-button type="success"
			icon="circle-check" size="small">
			显示
		  </el-button> -->
          <el-button type="info"
                     icon="view" size="small">
            查看
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>

    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next, jumper"
        :current-page="dataTable.page"
        :page-size="10"
        :total="dataTable.total"
        @current-change="dataChangePage"
      >
      </el-pagination>
    </div>
    {{dataTable.page}}=={{dataTable.type}}
  </div>
</template>
<style src='' scoped lang="less"> </style>
<script>
  // import { mapGetters } from 'vuex';
  // import * as types from '../../store/types';

  export default {
    name: 'InvestorListPassTable',
    props: {
    },
    methods: {
      dataChangePage() {

      },
    },
    computed: {
    },
    data() {
      return {
        dataTable: [
          {
            certificate_name: 1,
            member_type: 2,
            created_at: 11111,
            operator: 'aa',
          },
          {
            certificate_name: 1,
            member_type: 2,
            created_at: 1,
            operator: 'aa',
          },
        ],
      };
    },
    mounted() {
      console.log('mounted');
      // this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
      console.log('created');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    updated() {
      console.log('updated');
    },
    components: {

    },
  };

</script>
