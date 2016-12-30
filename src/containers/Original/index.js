/**
 * External dependencies
 */
import Vue from 'vue';
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
};

const dataStore = {};

// 获取数据
function getData(s, query) {
  // 当前标签
  dataStore.curTab = query.type;
  s.$set(s, 'curTab', dataStore.curTab);

  const url = `http://localhost:10001/static/origin.json?${ENUM_STATUS[query.type]}`;
  Vue.http.get(url, {
    emulateJSON: true,
  }).then((data) => {
    dataStore[query.type].body = data.body;
    s.$set(s, query.type, dataStore[query.type].body);
  });
}

// 路由跳转
function goto(s, type) {
  s.$router.push({
    path: '/original',
    query: {
      type,
    },
  });
}

// 初始化
// 如果没有query 默认设置为‘待审核’
function inits() {
  // debugger
  const s = this;
  const query = {};
  // 判断进入页面时的tab
  let type = s.$route.query.type;
  if (!type) {
    type = 'PENDING';
  }
  query.type = type;
  // Object.keys(ENUM_STATUS).forEach((val) => {
  //   if (ENUM_STATUS[val] === type) {
  //     query.type = val;
  //   }
  // });
  getData(s, query);
}

export default {
  name: 'Original',
  route: {
    canReuse: true,
  },
  methods: {
    ...mapMutations([
      'hideSidebar',
    ]),
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
  data() {
    Object.keys(ENUM_STATUS).forEach((val) => {
      // 初始化 dataStore
      dataStore[val] = {};
      dataStore[val].body = [];
    });

    return {
      curTab: dataStore.curTab,
      PENDING: dataStore.PENDING.body,
      LISTED: dataStore.LISTED.body,
      COMPLETE: dataStore.COMPLETE.body,
      INVALID: dataStore.INVALID.body,
      REJECT: dataStore.REJECT.body,
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
    this.$store.dispatch('hideSidebar');
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

