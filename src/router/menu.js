import permissionCheck from '../utils/permissionCheck';

export default [
  {
    // 项目管理
    name: 'Project',
    meta: {
      label: '项目管理',
    },
    path: '/project',
    component: resolve => require(['../containers/Project/index'], resolve), // eslint-disable-line
    redirect: '/project/list/unregistered',
    children: [
      {
        name: 'ProjectList',
        meta: {
          label: '列表',
        },
        path: 'list',
        component: resolve => require(['../containers/Project/list/index'], resolve), // eslint-disable-line
        redirect: '/project/list/unregistered',
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.movie.index'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
        children: [
          {
            name: 'ProjectListUnregistered',
            meta: {
              label: '草稿',
            },
            path: 'unregistered',
            component: resolve => require(['../containers/Project/list/unregistered'], resolve), // eslint-disable-line
          },
          {
            name: 'ProjectListRegistered',
            meta: {
              label: '已登记',
            },
            path: 'registered',
            component: resolve => require(['../containers/Project/list/registered'], resolve), // eslint-disable-line
          },
          {
            name: 'ProjectListRelease',
            meta: {
              label: '已上映',
            },
            path: 'release',
            component: resolve => require(['../containers/Project/list/release'], resolve), // eslint-disable-line
          },
          {
            name: 'ProjectListLiquidation',
            meta: {
              label: '已清算',
            },
            path: 'liquidation',
            component: resolve => require(['../containers/Project/list/liquidation'], resolve), // eslint-disable-line
          },
        ],
      },
      {
        name: 'ProjectDetail',
        path: 'detail',
        meta: {
          label: '项目明细',
        },
        component: resolve => require(['../containers/Project/detail/index'], resolve), // eslint-disable-line
        redirect: '/project/list/unregistered',
        children: [
          {
            name: 'ProjectCreate',
            meta: {
              label: '新建项目',
            },
            path: 'create',
            component: resolve => require(['../containers/Project/detail/create'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie.store'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
          {
            name: 'ProjectDetailDesc',
            meta: {
              label: '项目详情',
            },
            path: 'desc/:id',
            component: resolve => require(['../containers/Project/detail/desc'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie.show'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
          {
            name: 'ProjectDetailOriginShare',
            meta: {
              label: '原始份额',
            },
            path: 'originShare/:id',
            component: resolve => require(['../containers/Project/detail/originShare'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie-initial-share.show'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
          {
            name: 'ProjectDetailTransferShare',
            meta: {
              label: '可转让份额',
            },
            path: 'transferShare/:id',
            component: resolve => require(['../containers/Project/detail/transferShare'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie.show'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
          {
            name: 'ProjectDetailTransferEarn',
            meta: {
              label: '可转让收益',
            },
            path: 'transferEarn/:id',
            component: resolve => require(['../containers/Project/detail/transferEarn'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie.show'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
          {
            name: 'ProjectDetailProgress',
            meta: {
              label: '进度',
            },
            path: 'projectProgress/:id',
            component: resolve => require(['../containers/Project/detail/projectProgress'], resolve), // eslint-disable-line
            beforeEnter: (to, from, next) => {
              if (permissionCheck(['api.movie-progress.index'])) {
                next();
              } else {
                next({
                  path: '/noauth',
                });
              }
            },
          },
        ],
      },
    ],
  },
  // 初始份额转让管理
  {
    name: 'OriginShareTransfer',
    path: '/original',
    component: resolve => require(['../containers/Original/index'], resolve), // eslint-disable-line
    redirect: '/original/list/pending',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.movie-listing.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
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
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.movie-listing.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 可转让影视收益权
  {
    name: 'Transfer',
    path: '/transfer',
    component: resolve => require(['../containers/Transfer/index'], resolve), // eslint-disable-line
    redirect: '/transfer/list/pending',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.movie-listing.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
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
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.movie-listing.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 投资人审核
  {
    name: 'Investor',
    path: '/investor',
    component: resolve => require(['../containers/Investor/index'], resolve), // eslint-disable-line
    redirect: '/investor/list/pending',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.audit.user-real-info.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
    children: [
      {
        name: 'InvestorList',
        path: 'list',
        component: resolve => require(['../containers/Investor/list'], resolve), // eslint-disable-line
        redirect: '/investor/list/pending',
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.audit.user-real-info.index'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
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
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.audit.user-real-info.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 订单管理
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
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.movie-order.index'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
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
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.movie-order.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 收款管理
  {
    name: 'Trade',
    path: '/trade',
    component: resolve => require(['../containers/Trade/index'], resolve), // eslint-disable-line
    redirect: '/trade/list/unpaid',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.financial.trade.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
    children: [
      {
        name: 'TradeList',
        path: 'list',
        component: resolve => require(['../containers/Trade/list/listindex'], resolve), // eslint-disable-line
        children: [
          {
            name: 'TradeListUnpaid',
            path: 'unpaid',
            component: resolve => require(['../containers/Trade/list/unpaid'], resolve), //eslint-disable-line
          },
          {
            name: 'TradeListPaid',
            path: 'paid',
            component: resolve => require(['../containers/Trade/list/paid'], resolve), //eslint-disable-line
          },
        ],
      },
      {
        name: 'TradeDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Trade/detail'], resolve), // eslint-disable-line
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.financial.trade.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 退款管理
  {
    name: 'Refund',
    path: '/refund',
    component: resolve => require(['../containers/Refund/index'], resolve), // eslint-disable-line
    redirect: '/refund/list/unrefund',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.financial.trade-refund.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
    children: [
      {
        name: 'RefundList',
        path: 'list',
        component: resolve => require(['../containers/Refund/list/listindex'], resolve), // eslint-disable-line
        children: [
          {
            name: 'TradeListUnrefund',
            path: 'unrefund',
            component: resolve => require(['../containers/Refund/list/unrefund'], resolve), //eslint-disable-line
          },
          {
            name: 'TradeListRefund',
            path: 'refund',
            component: resolve => require(['../containers/Refund/list/refund'], resolve), //eslint-disable-line
          },
        ],
      },
      {
        name: 'RefundDetail',
        path: 'detail/:id',
        component: resolve => require(['../containers/Refund/detail'], resolve), // eslint-disable-line
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.financial.trade-refund.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
    ],
  },
  // 权限管理
  {
    name: 'Permission',
    path: '/permission',
    component: resolve => require(['../containers/Permission/index'], resolve), // eslint-disable-line
    redirect: '/permission/usermanage',
    beforeEnter: (to, from, next) => {
      if (permissionCheck(['api.system.user.index'])) {
        next();
      } else {
        next({
          path: '/noauth',
        });
      }
    },
    children: [
      {
        name: 'UserManage',
        path: 'usermanage',
        component: resolve => require(['../containers/Permission/usermanage'], resolve), // eslint-disable-line
      },
      {
        name: 'UserPermissionDetail',
        path: 'userpermissiondetail/:id',
        component: resolve => require(['../containers/Permission/userpermissiondetail'], resolve), // eslint-disable-line
        beforeEnter: (to, from, next) => {
          if (permissionCheck(['api.system.user.show'])) {
            next();
          } else {
            next({
              path: '/noauth',
            });
          }
        },
      },
      {
        name: 'RoleManage', // 角色管理
        path: 'rolemanage',
        component: resolve => require(['../containers/Permission/rolemanage'], resolve), // eslint-disable-line
      },
    ],
  },
  // 友情链接
  {
    name: 'Links',
    path: '/links',
    meta: {
      label: 'test',
    },
    component: resolve => require(['../containers/Links/index'], resolve), // eslint-disable-line
    redirect: '/links/list',
    children: [
      {
        name: 'LinksCreate',
        path: 'create',
        meta: {
          label: '添加链接',
        },
        component: resolve => require(['../containers/Links/customParts/createForm'], resolve), // eslint-disable-line
      },
      {
        name: 'LinksList',
        path: 'list',
        meta: {
          label: '链接列表',
        },
        component: resolve => require(['../containers/Links/list/list'], resolve), // eslint-disable-line
      },
      {
        name: 'LinksEdit',
        path: 'edit/:id',
        meta: {
          label: '链接修改',
        },
        component: resolve => require(['../containers/Links/customParts/editForm'], resolve), // eslint-disable-line
      },
      {
        name: 'LinksListReload',
        path: 'listreload',
        meta: {
          label: '重新加载list',
        },
        component: resolve => require(['../containers/Links/list/listReload'], resolve), // eslint-disable-line
      },
      {
        name: 'linksDetail',
        path: 'detail/:id',
        meta: {
          label: '链接详情',
        },
        component: resolve => require(['../containers/Links/detail/index'], resolve), // eslint-disable-line
      },
    ],
  },
];
