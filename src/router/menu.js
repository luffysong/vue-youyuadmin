// 项目管理
import Project from '../containers/Project';
import ProjectCreate from '../containers/Project/Create';
import ProjectRegister from '../containers/Project/Register';

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
];
