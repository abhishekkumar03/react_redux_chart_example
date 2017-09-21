import React from 'react'
import PropTypes from 'prop-types'

const LeftSidebar = (props) => (
    <div className="navbar-default sidebar" style={{marginLeft:'-20px'}} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
            <ul className="nav in" id="side-menu">
                <li><a href=""><i className="fa fa-cloud" aria-hidden="true"></i> Alerts</a></li>
                <li><a href="">Vulnerabilities  </a></li>
            </ul>
        </div>
    </div>
)

LeftSidebar.propTypes = {
  posts: PropTypes.array
}

export default LeftSidebar
