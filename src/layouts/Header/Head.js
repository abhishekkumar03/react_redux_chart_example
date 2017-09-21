import React from 'react'
import PropTypes from 'prop-types'

const Head = (props) => (
    <span className="navbar-brand">
        <span className="logo">Logo</span>
        <button type="button" className="navbar-toggle" style={{position:'absolute',right:0,top:0}}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            
        </button>
        
    </span>
    
)

Head.propTypes = {
  props: PropTypes.array
}

export default Head
