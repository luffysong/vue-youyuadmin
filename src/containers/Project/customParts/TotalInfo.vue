<template>
  <div class="total-info">
    <el-row>
      <el-col :span="4">
        <span>合计人数</span>
      </el-col>
      <el-col :span="10">
        <el-input :value="totalPeople"
                  :disabled="true">
          <template slot="append">人</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span>合计份额</span>
      </el-col>
      <el-col :span="10">
        <el-input :value="totalShare"
                  :disabled="true">
          <template slot="append">%</template>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';

  export default {
    name: 'TotalInfo',
    props: {
      poriginData: Object,
    },
    methods: {},
    computed: {
      totalPeople() {
//        const result = this.poriginData.list ? this.poriginData.list.length : 0;
        return this.poriginData.list.length;
      },
      totalShare() {
        let total = 0;
        if (this.poriginData.list) {
          this.poriginData.list.forEach((el) => {
            total += Number(el.share);
          });
          return total * 100;
        }
        return total;
      },
    },
    data() {
      return {};
    },
  };

</script>
<style scoped lang="less">
  .total-info {
    padding-top: 20px;
  }

  .el-row {
    margin: 0 0 10px;
  }

  .el-col span {
    line-height: 34px;
    float: right;
    margin: 0 15px 0 0;
  }
</style>
