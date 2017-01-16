<template>
  <div class="origin-share-transfer">
    <div class="search">
      <el-form :inline="true">
        <el-form-item>
          <el-select class="select" v-model="searchType" placeholder="请选择">
            <el-option
              v-for="item in searchOptions"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            class="input"
            placeholder="请输入内容"
            v-model="keyword">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-tabs class="el-col-24" type="border-card"
             :active-name="curTab" @tab-click="tabchange">
      <el-tab-pane label="待审核" name="PENDING">
        <div v-if="curTab === 'PENDING'">
          <origin-form :dataTable="PENDING" :dataChangePage="curChange"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已挂牌" name="LISTED">
        <div v-if="curTab === 'LISTED'">
          <origin-form :dataTable="LISTED" :dataChangePage="curChange"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已成交" name="COMPLETE">
        <div v-if="curTab === 'COMPLETE'">
          <origin-form :dataTable="COMPLETE" :dataChangePage="curChange"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已失效" name="INVALID">
        <div v-if="curTab === 'INVALID'">
          <origin-form :dataTable="INVALID" :dataChangePage="curChange"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已驳回" name="REJECT">
        <div v-if="curTab === 'REJECT'">
          <origin-form :dataTable="REJECT" :dataChangePage="curChange"/>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>

</template>
<script>
  /**
   * External dependencies
   */
  import { mapGetters } from 'vuex';
  /**
   * Internal dependencies
   */
  import * as types from '../../store/types';
  import OriginForm from './tables/OriginForm';

  // 获取数据
  function getData(s, query) {
    // 设置 tab 高亮
    s.$set(s, 'curTab', query.type);
    // 触发 action
    s.$store.dispatch(types.ORIGINLIST_REQ, {
      type: query.type,
      page: query.page,
      keyword: query.keyword,
    });
  }

  // 路由跳转
  function goto(s, params) {
    s.$router.push({
      path: '/original/list',
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
    name: 'Original',
    props: {

    },
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
        PENDING: [types.OriginListPENDING],
        LISTED: [types.OriginListLISTED],
        COMPLETE: [types.OriginListCOMPLETE],
        INVALID: [types.OriginListINVALID],
        REJECT: [types.OriginListREJECT],
      }),
    },
    data() {
      return {
        curTab: '',
        searchOptions: [
          {
            label: '项目名称',
            value: 'projectName',
          },
          {
            label: '制片方',
            value: 'producer',
          },
          {
            label: '转让人',
            value: 'assignor',
          },
          {
            label: '受让人',
            value: 'assignee',
          },
          {
            label: '份额ID',
            value: 'quotientId',
          },
        ],
        searchType: '',
        keyword: '',
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
      OriginForm,
    },
  };

</script>

