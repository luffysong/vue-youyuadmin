// 项目管理
import Project from '../containers/Project';
import ProjectCreate from '../containers/Project/Create';
import ProjectRegister from '../containers/Project/Register';

// 初始份额转让管理
import Original from '../containers/Original';

// 影视收益权转让管理
import Transfer from '../containers/Transfer';

// 投资人审核
import Investor from '../containers/Investor';

// 订单管理
import Order from '../containers/Order';

export default [
  {
    name: '项目管理',
    path: '/project',
    component: Project,
    redirect: '/project/create',
    children: [
      {
        name: '新建项目',
        path: 'create',
        component: ProjectCreate,
      },
      {
        name: '项目登记',
        path: 'register',
        component: ProjectRegister,
      },
    ],
  },
  {
    name: '初始份额转让管理',
    path: '/original',
    component: Original,
  },
  {
    name: '影视收益权转让管理',
    path: '/transfer',
    component: Transfer,
  },
  {
    name: '投资人审核',
    path: '/investor',
    component: Investor,
  }, {
    name: '订单管理',
    path: '/order',
    component: Order,
  },
];
