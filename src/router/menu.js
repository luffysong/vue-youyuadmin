// 项目管理
import Project from '../containers/Project';
import ProjectCreate from '../containers/Project/Create';
import ProjectRegister from '../containers/Project/Register';

// 初始份额转让管理
import Original from '../containers/Original';

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
];
