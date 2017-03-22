<template>
  <div>
    <el-table
      :data="data.data" border>
      <el-table-column
        align="center"
        prop="id"
        label="项目ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="180">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="producer"
        label="制片方"
        width="150">
        <template scope="scope">
          <el-popover trigger="click" placement="top">
            <p>项目: {{ scope.row.producer }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.producer }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="publish_time"
        label="登记时间"
        width="120">
      </el-table-column>

      <el-table-column
        sortable
        align="center"
        prop="release_date"
        label="上映时间"
        width="120">
      </el-table-column>
      <el-table-column
        sortable
        align="center"
        prop="settlement_time"
        label="清算时间"
        width="120">
      </el-table-column>

      <el-table-column
        v-if="listType==='all'"
        inline-template
        align="center"
        label="上首页"
        width="90">
        <div>
          <el-switch
            v-model="row.is_hot "
            on-text=""
            off-text=""
          @change="upIndexHandle(row.is_hot , row.id)">
          </el-switch>
        </div>

      </el-table-column>

      <el-table-column
        v-if="listType==='all'"
        inline-template
        align="center"
        label="显 / 隐"
        width="90">
        <el-switch
          v-model="row.is_hide"
          on-text=""
          off-text=""
        @change="displayHandle(row.is_hide, row.id)">
        </el-switch>
      </el-table-column>

      <el-table-column
        inline-template
        align="center"
        label="操作"
        width="90">
        <el-button type="info"
                   icon="view" size="small"
                   @click="toDetail(row.id)">
          查看
        </el-button>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"> </span>
      <el-pagination
        layout="prev, pager, next"
        :total="data.total"
        :page-size="data.per_page - 0"
        :current-page="data.current_page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'ProjectTable',
    props: {
      data: Object,
      displayHandle: Function,
      upIndexHandle: Function,
      toDetail: Function,
      pageChange: Function,
      listType: {
        type: String,
        default: 'all',
      },
    },
    data() {
      return {
        listdata: _.cloneDeep(this.data),
      };
    },
  };
</script>

<style lang="less" scoped>
  .el-tag {
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 6px;
  }
</style>
