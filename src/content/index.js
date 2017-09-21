import React from 'react'
import PropTypes from 'prop-types'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => (
    <div id="page-wrapper" className="page-wrapper">
        <div>
            <div className="row">
                <LeftContent {...props} />
                <RightContent {...props} />
            </div>
        </div>
    </div>
)

Content.propTypes = {
    props: PropTypes.array
}

export default Content
