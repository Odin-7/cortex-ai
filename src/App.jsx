import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //路由器和定义路由
import routes from './router/routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
