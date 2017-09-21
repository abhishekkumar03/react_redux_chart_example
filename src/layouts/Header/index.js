import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head'
import LeftSidebar from '../LeftSidebar'

const Header = (props) => (
    <div id="wrapper" className="content">
        <nav style={{margin:0}} className="navbar navbar-default">
            <div className="container-fluid">
                <Head {...props} />
                <LeftSidebar {...props} />
            </div>
        </nav>
    </div>
)

Header.propTypes = {
  props: PropTypes.array
}

export default Header
