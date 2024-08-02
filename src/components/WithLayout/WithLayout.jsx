// 高阶组件

import React from 'react';
import Header from './Header/Header';

const withLayout = (WrappedComponent) => {
  return (props) => (
    <div>
      <Header />
      <WrappedComponent {...props} />
    </div>
  );
};

export default withLayout;
