import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Content = props => (
  <div id="page-wrapper" className="page-wrapper">
    <div>
      <div className="row">
        <LeftContent {...props} />
        <RightContent {...props} />
      </div>
    </div>
  </div>
);

export default Content;
