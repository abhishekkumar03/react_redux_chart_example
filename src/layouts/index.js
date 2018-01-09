import React from 'react';
import Header from './Header';
import Content from '../content';

const Layout = props => (
  <div>
    <Header {...props} />
    <Content {...props} />
  </div>
);

export default Layout;
