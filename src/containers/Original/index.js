/**
 * External dependencies
 */
import { mapGetters } from 'vuex';
/**
 * Internal dependencies
 */
import * as types from '../../store/types';
import OriginForm from './tables/OriginForm.vue';

const ENUM_STATUS = {
  // 待审核
  PENDING: 'datapending',
  // 已挂牌
  LISTED: 'datalisted',
  // 已成交
  COMPLETE: 'datacomplete',
  // 已失效
  INVALID: 'datainvalid',
  // 已驳回
  REJECT: 'datareject',
  // list 类型
  TYPE: 'type',
  // 页码
  PAGE: 'page',
  // 搜索词
  KEY_WORD: 'keyword',
};

const dataStore = {};

// 获取数据
function getData(s, query) {
  // 当前标签
  dataStore.curTab = query[ENUM_STATUS.TYPE];
  // 设置 tab 高亮
  s.$set(s, 'curTab', dataStore.curTab);
  // 触发 action
  s.$store.dispatch(types.ORIGINLIST_REQ, {
    TYPEVAL: query[ENUM_STATUS.TYPE],
    TYPE: ENUM_STATUS.TYPE,
  });

  // const url = `http://localhost:10001/static/origin.json?${ENUM_STATUS[query.type]}`;
  // Vue.http.get(url, {
  //   emulateJSON: true,
  // }).then((data) => {
  //   dataStore[query.type].body = data.body;
  //   s.$set(s, query.type, dataStore[query.type].body);
  // });
}

// 路由跳转
function goto(s, type) {
  s.$router.push({
    path: '/original',
    query: {
      [ENUM_STATUS.TYPE]: type,
    },
  });
}

// 初始化
// 如果没有query 默认设置为‘待审核’
function inits() {
  // debugger
  const s = this;
  const query = {
    [ENUM_STATUS.TYPE]: s.$route.query[ENUM_STATUS.TYPE],
    [ENUM_STATUS.PAGE]: s.$route.query[ENUM_STATUS.PAGE],
    [ENUM_STATUS.KEY_WORD]: s.$route.query[ENUM_STATUS.KEY_WORD],
  };
  if (!query[ENUM_STATUS.TYPE]) {
    query[ENUM_STATUS.TYPE] = 'PENDING';
  }
  // Object.keys(ENUM_STATUS).forEach((val) => {
  //   if (ENUM_STATUS[val] === type) {
  //     query.type = val;
  //   }
  // });
  getData(s, query);
}

export default {
  name: 'Original',
  methods: {
    // tab 点击事件
    tabchange(vuedom) {
      goto(this, vuedom.name);
      getData(this, {
        type: vuedom.name,
      });
    },
    curChange() {
      console.log(1);
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
    // Object.keys(ENUM_STATUS).forEach((val) => {
    //   // 初始化 dataStore
    //   dataStore[val] = {};
    //   dataStore[val].body = [];
    // });

    return {
      curTab: dataStore.curTab,
      // PENDING: dataStore.PENDING.body,
      // LISTED: dataStore.LISTED.body,
      // COMPLETE: dataStore.COMPLETE.body,
      // INVALID: dataStore.INVALID.body,
      // REJECT: dataStore.REJECT.body,
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
    console.log('create');
  },
  beforeUpdate() {
    console.log('before');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  updated() {
    console.log('updated');
  },
  components: {
    OriginForm,
  },
};

