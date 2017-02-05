<template>
  <el-tabs class="el-col-24" type="border-card"
           :active-name="curTab" @tab-click="tabchange">
    <el-tab-pane name="PENDING" label="待审核">
      <transfer-table :dataTable="PENDING" :dataChangePage="curChange"/>
    </el-tab-pane>
    <el-tab-pane name="LISTED" label="已挂牌">
      <transfer-table :dataTable="LISTED" :dataChangePage="curChange"/>
    </el-tab-pane>
    <el-tab-pane name="COMPLETE" label="已成交">
      <transfer-table :dataTable="COMPLETE" :dataChangePage="curChange"/>
    </el-tab-pane>
    <el-tab-pane name="INVALID" label="已失效">
      <transfer-table :dataTable="INVALID" :dataChangePage="curChange"/>
    </el-tab-pane>
    <el-tab-pane name="REJECT" label="已驳回">
      <transfer-table :dataTable="REJECT" :dataChangePage="curChange"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

  import { mapGetters } from 'vuex';
  import * as types from '../../store/types';
  import TransferTable from './tables/TransferTable';

  // 获取数据
  function getData(s, query) {
    // 设置 tab 高亮
    s.$set(s, 'curTab', query.type);
    // 触发 action
    s.$store.dispatch(types.TRANSFERLIST_REQ, {
      type: query.type,
      page: query.page,
      keyword: query.keyword,
    });
  }

  // 路由跳转
  function goto(s, params) {
    s.$router.push({
      path: '/transfer/list',
      query: {
        type: params.type,
      },
    });
  }

  // 初始化
  // 如果没有query 默认设置为‘待审核’
  function inits() {
    // debugger
    const s = this;
    const query = {
      type: s.$route.query.type,
      page: s.$route.query.page,
      keyword: s.$route.query.keyword,
    };
    if (!query.type) {
      query.type = 'PENDING';
    }
    if (!query.page) {
      query.page = 1;
    }
    if (!query.keyword) {
      query.keyword = '';
    }
    getData(s, query);
  }

  let curTabCache;

  export default {
    name: 'TransferList',
    props: {},
    methods: {
      // tab 点击事件
      tabchange(vuedom) {
        const params = {
          type: vuedom.name,
          page: 1,
          keyword: encodeURIComponent(this.keyword),
        };
        goto(this, params);
        getData(this, params);
      },
      curChange(cs) {
        if (curTabCache !== this.curTab) {
          curTabCache = this.curTab;
          return;
        }
        const params = {
          type: this.curTab,
          page: cs,
          keyword: encodeURIComponent(this.keyword),
        };
        goto(this, params);
        getData(this, params);
      },
      search() {
        const params = {
          type: this.curTab,
          page: 1,
          keyword: encodeURIComponent(this.keyword),
        };
        goto(this, params);
        getData(this, params);
      },
    },
    computed: {
      ...mapGetters({
        PENDING: [types.TransferListPENDING],
        LISTED: [types.TransferListLISTED],
        COMPLETE: [types.TransferListCOMPLETE],
        INVALID: [types.TransferListINVALID],
        REJECT: [types.TransferListREJECT],
      }),
    },
    data() {
      return {
        curTab: '',
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
      inits.call(this);
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {
      TransferTable,
    },
  };
</script>

<style lang="less" scoped>

</style>
