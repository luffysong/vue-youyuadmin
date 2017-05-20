<template>
  <div>
    <el-table v-if="!listData.loading" :data="listData.linkslist.data" border>
      <el-table-column align="center"
                       label="名称"
                       prop="link_name"
                       width="200px"
      >
      </el-table-column>
      <el-table-column align="left"
                       label="链接地址"
                       prop="link_url"
      >
      </el-table-column>
      <el-table-column align="right"
                       label="显示顺序"
                       prop="sort"
                       width="100px"
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="280px">
        <template scope="scope" inline-template>
          <el-button type="info" @click="detailLink(scope.row)"
                     icon="view" size="small">
            查看
          </el-button>
          <el-button type="info" @click="editLink(scope.row)"
                     icon="edit" size="small">
            修改
          </el-button>
          <el-button type="danger" @click="deleteLink(scope.row)"
                     icon="delete" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="!listData.loading"
      @current-change="handleCurrentChange"
      :current-page.sync="listData.linkslist.current_page"
      :page-size="listData.linkslist.per_page"
      layout="prev, pager, next, jumper"
      :total="listData.linkslist.total">
    </el-pagination>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';

  export default {
    name: 'LinksList',
    components: {
    },
    methods: {
      detailLink(row) {
        this.$store.state.detailLinkData = row;
        this.$router.push({
          path: `/links/detail/${row.id}`,
        });
      },
      deleteLink(row) {
        this.$confirm('此操作将永久删除该链接, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$store.dispatch(types.LINKSDELETE_REQ, {
            id: row.id,
            callback: () => {
              this.$message({
                message: '删除成功！',
                type: 'success',
              });
              this.$router.replace({
                path: '/links/listreload',
              });
            },
          });
        });
      },
      editLink(row) {
        this.$store.state.editLinkData = row;
        this.$router.push({
          path: `/links/edit/${row.id}`,
        });
      },
      handleCurrentChange(val) {
        this.query({
          page: val,
          limit: 10,
        });
      },
      query(sendData) {
        this.$store.dispatch(types.LINKSLIST_REQ, {
          sendData,
        });
      },
    },
    computed: {
      listData() {
        return this.$store.state.linkslist;
      },
    },
    data() {
      const s = this;
      return {
        sendData: {
          per_page: consts.PER_PAGE,
        },
        searchParams: {
          options: [
            {
              value: 'link_name',
              label: '名称',
            },
            {
              value: 'link_url',
              label: '链接',
            },
            {
              value: 'sort',
              label: '名称',
            },
            {
              value: 'link_logo',
              label: '图标',
            },
          ],
          select: 'id',
          input: '',
          commit: s.searchCommit,
        },
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.LINKSLIST_REQ, {
        sendData: {
          page: 1,
          limit: 10,
        },
      });
    },
  };
</script>
