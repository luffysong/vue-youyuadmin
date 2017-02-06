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
    component: resolve => require(['../containers/Original/index'], resolve), // eslint-disable-line
    redirect: '/original/list/pending',
    children: [
      {
        name: 'OriginalList',
        path: 'list',
        component: resolve => require(['../containers/Original/list/listindex'], resolve), // eslint-disable-line
        redirect: '/original/list/pending',
        children: [
          {
            name: 'OriginListPending',
            path: 'pending',
            component: resolve => require(['../containers/Original/list/pending'], resolve), // eslint-disable-line
          },
          {
            name: 'OriginListListed',
            path: 'listed',
            component: resolve => require(['../containers/Original/list/listed'], resolve), // eslint-disable-line
          },
          {
            name: 'OriginListComplete',
            path: 'complete',
            component: resolve => require(['../containers/Original/list/complete'], resolve), // eslint-disable-line
          },
          {
            name: 'OriginListInvalid',
            path: 'invalid',
            component: resolve => require(['../containers/Original/list/invalid'], resolve), // eslint-disable-line
          },
          {
            name: 'OriginListReject',
            path: 'reject',
            component: resolve => require(['../containers/Original/list/reject'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'OriginDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Original/Detail'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    // 影视类收益权转让管理
    name: 'Transfer',
    path: '/transfer',
    component: resolve => require(['../containers/Transfer/index'], resolve), // eslint-disable-line
    redirect: '/transfer/list/pending',
    children: [
      {
        name: 'TransferList',
        path: 'list',
        component: resolve => require(['../containers/Transfer/list/listindex.vue'], resolve), // eslint-disable-line
        redirect: '/transfer/list/pending',
        children: [
          {
            name: 'TransferListPending',
            path: 'pending',
            component: resolve => require(['../containers/Transfer/list/pending'], resolve), //eslint-disable-line
          },
          {
            name: 'TransferListListed',
            path: 'listed',
            component: resolve => require(['../containers/Transfer/list/listed'], resolve), //eslint-disable-line
          },
          {
            name: 'TransferListComplete',
            path: 'complete',
            component: resolve => require(['../containers/Transfer/list/complete'], resolve), //eslint-disable-line
          },
          {
            name: 'TransferListInvalid',
            path: 'invalid',
            component: resolve => require(['../containers/Transfer/list/invalid'], resolve), //eslint-disable-line
          },
          {
            name: 'TransferListReject',
            path: 'reject',
            component: resolve => require(['../containers/Transfer/list/reject'], resolve), //eslint-disable-line
          },
        ],
      },
      {
        name: 'TransferDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Transfer/Detail.vue'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    name: 'Investor',
    path: '/investor',
    component: resolve => require(['../containers/Investor/index'], resolve), // eslint-disable-line
    redirect: '/investor/list/pending',
    children: [
      {
        name: 'InvestorList',
        path: 'list',
        component: resolve => require(['../containers/Investor/list'], resolve), // eslint-disable-line
        redirect: '/investor/list/pending',
        children: [
          {
            name: 'InvestorPending',
            path: 'pending',
            component: resolve => require(['../containers/Investor/pending'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorPass',
            path: 'pass',
            component: resolve => require(['../containers/Investor/pass'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorReject',
            path: 'reject',
            component: resolve => require(['../containers/Investor/reject'], resolve), // eslint-disable-line
          },
          {
            name: 'InvestorAll',
            path: 'all',
            component: resolve => require(['../containers/Investor/all'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'InvestorDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Investor/detail'], resolve), // eslint-disable-line
      },
    ],
  },
  {
    name: 'Order',
    path: '/order',
    component: resolve => require(['../containers/Order/index'], resolve), // eslint-disable-line
    redirect: '/order/list/unpaidDeposit',
    children: [
      {
        name: 'OrderList',
        path: 'list',
        component: resolve => require(['../containers/Order/list/listindex'], resolve), // eslint-disable-line
        redirect: '/order/list/unpaidDeposit',
        children: [
          {
            name: 'orderUnpaidDeposit',
            path: 'unpaidDeposit',
            component: resolve => require(['../containers/Order/list/unpaidDeposit'], resolve), // eslint-disable-line
          },
          {
            name: 'orderPaidDeposit',
            path: 'paidDeposit',
            component: resolve => require(['../containers/Order/list/paidDeposit'], resolve), // eslint-disable-line
          },
          {
            name: 'orderUnpaidBalance',
            path: 'unpaidBalance',
            component: resolve => require(['../containers/Order/list/unpaidBalance'], resolve), // eslint-disable-line
          },
          {
            name: 'orderPaid',
            path: 'paid',
            component: resolve => require(['../containers/Order/list/paid'], resolve), // eslint-disable-line
          },
          {
            name: 'orderClosed',
            path: 'closed',
            component: resolve => require(['../containers/Order/list/closed'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'OrderDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Order/detail'], resolve), // eslint-disable-line
      },
    ],
  },
];
