import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from '../content'

const Layout = (props) => (
    <div>
        <Header {...props} />
        <Content {...props} />
    </div>
)

Layout.propTypes = {
  props: PropTypes.array
}

export default Layout
