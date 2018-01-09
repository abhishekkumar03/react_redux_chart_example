import React from 'react';
import Head from './Head';
import LeftSidebar from '../LeftSidebar';

const Header = props => (
  <div id="wrapper" className="content">
    <nav style={{margin: 0}} className="navbar navbar-default">
      <div className="container-fluid">
        <Head {...props} />
        <LeftSidebar {...props} />
      </div>
    </nav>
  </div>
);

export default Header;
