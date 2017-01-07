export default [
  {
    name: 'Project',
    path: '/project',
    component: resolve => require(['../containers/Project'], resolve), // eslint-disable-line
    redirect: '/project/create',
    children: [
      {
        name: 'ProjectCreate',
        path: 'create',
        component: resolve => require(['../containers/Project/Create'], resolve), // eslint-disable-line
      },
      {
        name: 'ProjectRegister',
        path: 'register',
        component: resolve => require(['../containers/Project/Register'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    // 初始份额转让管理
    name: 'OriginShareTransfer',
    path: '/original',
    component: resolve => require(['../containers/Original/index.vue'], resolve), // eslint-disable-line
    redirect: '/original/list',
    children: [
      {
        name: 'OriginalList',
        path: 'list',
        component: resolve => require(['../containers/OriginalList/List.vue'], resolve), // eslint-disable-line
      },
      {
        name: 'OriginalDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/OriginalDetail/Detail.vue'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    // 影视类收益权转让管理
    name: 'Transfer',
    path: '/transfer',
    component: resolve => require(['../containers/Transfer'], resolve), // eslint-disable-line
    redirect: '/transfer/list',
    children: [
      {
        name: 'TransferList',
        path: 'list',
        component: resolve => require(['../containers/TransferList/List.vue'], resolve), // eslint-disable-line
      },
      {
        name: 'TransferDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/TransferDetail/Detail.vue'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    name: '投资人审核',
    path: '/investor',
    component: resolve => require(['../containers/Investor'], resolve), // eslint-disable-line
  }, {
    name: 'Order',
    path: '/order',
    component: resolve => require(['../containers/Order'], resolve), // eslint-disable-line
  },
];
