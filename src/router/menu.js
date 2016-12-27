export default [
  {
    name: '项目管理',
    path: '/project',
    component: resolve => require(['../containers/Project'], resolve), // eslint-disable-line
    redirect: '/project/create',
    children: [
      {
        name: '新建项目',
        path: 'create',
        component: resolve => require(['../containers/Project/Create'], resolve), // eslint-disable-line
      },
      {
        name: '项目登记',
        path: 'register',
        component: resolve => require(['../containers/Project/Register'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    name: '初始份额转让管理',
    path: '/original',
    component: resolve => require(['../containers/Original'], resolve), // eslint-disable-line
  },
  {
    name: '影视收益权转让管理',
    path: '/transfer',
    component: resolve => require(['../containers/Transfer'], resolve), // eslint-disable-line
  },
  {
    name: '投资人审核',
    path: '/investor',
    component: resolve => require(['../containers/Investor'], resolve), // eslint-disable-line
  }, {
    name: '订单管理',
    path: '/order',
    component: resolve => require(['../containers/Order'], resolve), // eslint-disable-line
  },
];
