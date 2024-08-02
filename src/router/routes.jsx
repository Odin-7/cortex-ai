import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // 该组件需要登录才能访问

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard',
    element: <ProtectedRoute element={Dashboard} />, // React Router v6 这里不需要使用 JSX 元素
  },
];

export default routes;
