// 项目管理
import Project from '../containers/Project';
import ProjectShow from '../containers/Project/Show';
import ProjectCreate from '../containers/Project/Create';

export default [
  {
    name: '项目管理',
    path: '/project',
    component: Project,
    redirect: '/project/show',
    children: [
      {
        name: '新建项目',
        path: 'create',
        component: ProjectCreate,
      },
      {
        name: '展示项目',
        path: 'show',
        component: ProjectShow,
      },
    ],
  },
];
