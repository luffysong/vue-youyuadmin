export default [
  {
    name: 'Demo',
    path: '/demo',
    component: resolve => require(['../containers/Demo/demo'], resolve), // eslint-disable-line
  },
  {
    // 项目管理
    name: 'Project',
    path: '/project',
    component: resolve => require(['../containers/Project/index'], resolve), // eslint-disable-line
    redirect: '/project/list/unregistered',
    children: [
      {
        name: 'List',
        path: 'list',
        component: resolve => require(['../containers/Project/list/index'], resolve), // eslint-disable-line
        redirect: '/project/list/unregistered',
        children: [
          {
            name: 'unregistered',
            path: 'unregistered',
            component: resolve => require(['../containers/Project/list/unregistered'], resolve), // eslint-disable-line
          },
          {
            name: 'registered',
            path: 'registered',
            component: resolve => require(['../containers/Project/list/registered'], resolve), // eslint-disable-line
          },
          {
            name: 'release',
            path: 'release',
            component: resolve => require(['../containers/Project/list/release'], resolve), // eslint-disable-line
          },
          {
            name: 'liquidation',
            path: 'liquidation',
            component: resolve => require(['../containers/Project/list/liquidation'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'detail',
        path: 'detail',
        component: resolve => require(['../containers/Project/detail/index'], resolve), // eslint-disable-line
        redirect: '/project/list/unregistered',
        children: [
          {
            name: 'create',
            path: 'create',
            component: resolve => require(['../containers/Project/detail/create'], resolve), // eslint-disable-line
          },
          {
            name: 'desc',
            path: 'desc/:id',
            component: resolve => require(['../containers/Project/detail/desc'], resolve), // eslint-disable-line
          },
          {
            name: 'originShare',
            path: 'originShare/:id',
            component: resolve => require(['../containers/Project/detail/originShare'], resolve), // eslint-disable-line
          },
          {
            name: 'transferShare',
            path: 'transferShare/:id',
            component: resolve => require(['../containers/Project/detail/transferShare'], resolve), // eslint-disable-line
          },
          {
            name: 'transferEarn',
            path: 'transferEarn/:id',
            component: resolve => require(['../containers/Project/detail/transferEarn'], resolve), // eslint-disable-line
          },
          {
            name: 'projectProgress',
            path: 'projectProgress/:id',
            component: resolve => require(['../containers/Project/detail/projectProgress'], resolve), // eslint-disable-line
          },
        ],
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
    name: 'Investor',
    path: '/investor',
    component: resolve => require(['../containers/Investor/index.vue'], resolve), // eslint-disable-line
    redirect: '/investor/list/pending',
    children: [
      {
        name: 'InvestorList',
        path: 'list',
        component: resolve => require(['../containers/InvestorList/list'], resolve), // eslint-disable-line
        redirect: '/investor/list/pending',
        children: [
          {
            name: 'InvestorPending',
            path: 'pending',
            component: resolve => require(['../containers/InvestorListPending/pending'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorPass',
            path: 'pass',
            component: resolve => require(['../containers/InvestorListPass/pass'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorReject',
            path: 'reject',
            component: resolve => require(['../containers/InvestorListReject/reject.vue'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorAll',
            path: 'all',
            component: resolve => require(['../containers/InvestorListAll/all.vue'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'InvestorDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/InvestorDetail/detail.vue'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    name: 'Order',
    path: '/order',
    component: resolve => require(['../containers/Order/index'], resolve), // eslint-disable-line
    redirect: '/order/unpaidDeposit',
    children: [
      {
        name: 'orderUnpaidDeposit',
        path: 'unpaidDeposit',
        component: resolve => require(['../containers/Order/unpaidDeposit'], resolve), // eslint-disable-line
      },
      {
        name: 'orderPaidDeposit',
        path: 'paidDeposit',
        component: resolve => require(['../containers/Order/paidDeposit'], resolve), // eslint-disable-line
      },
      {
        name: 'orderUnpaidBalance',
        path: 'unpaidBalance',
        component: resolve => require(['../containers/Order/unpaidBalance'], resolve), // eslint-disable-line
      },
      {
        name: 'orderPaid',
        path: 'paid',
        component: resolve => require(['../containers/Order/paid'], resolve), // eslint-disable-line
      },
      {
        name: 'orderClosed',
        path: 'closed',
        component: resolve => require(['../containers/Order/closed'], resolve), // eslint-disable-line
      },
      {
        name: 'orderDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Order/detail'], resolve), // eslint-disable-line
      },
    ],
  },
];
