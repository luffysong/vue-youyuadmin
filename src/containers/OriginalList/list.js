/**
 * External dependencies
 */
import { mapGetters } from 'vuex';
/**
 * Internal dependencies
 */
import * as types from '../../store/types';
import OriginForm from './tables/OriginForm.vue';

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

