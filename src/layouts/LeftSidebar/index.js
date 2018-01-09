import React from 'react';

const LeftSidebar = () => (
  <div className="navbar-default sidebar" style={{marginLeft: '-20px'}} role="navigation">
    <div className="sidebar-nav navbar-collapse collapse">
      <ul className="nav in" id="side-menu">
        <li style={{cursor: 'pointer'}}><a href="/"><i className="fa fa-cloud" aria-hidden="true" /> Alerts</a></li>
        <li style={{cursor: 'pointer'}}><a href="/">Vulnerabilities</a></li>
      </ul>
    </div>
  </div>
);

export default LeftSidebar;
