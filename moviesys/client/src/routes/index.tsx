import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import MovieList from '../pages/movie/MovieList';
import AddMovie from '../pages/movie/AddMovie';
import EditMovie from '../pages/movie/EditMovie';

const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/movie/list',
        element: <MovieList />,
      },
      {
        path: '/movie/add',
        element: <AddMovie />,
      },
      {
        path: '/movie/edit/:id',
        element: <EditMovie />,
      },
    ],
  },
];

export const GetRoutes = () => {
  return useRoutes(routerConfig);
};

export const menuConfig = [
  { label: '首页', key: 'home', url: '/' }, // 菜单项务必填写 key
  {
    label: '电影',
    key: 'movie',
    children: [
      { label: '电影列表', key: 'movie-list', url: '/movie/list' },
      { label: '电影添加', key: 'movie-add', url: '/movie/add' },
    ],
  },
];
