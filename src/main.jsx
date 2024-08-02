// main中 配置一些全局的设置，例如路由、状态管理、主题等
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 导入路由库，放在main里面，确保所有子组件都能访问路由功能，并且只有一个路由实例，避免重复
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
