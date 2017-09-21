import React from 'react'
import PropTypes from 'prop-types'
import Posts from '../components/Posts'
import HostFilter from '../components/HostFilter'

const LeftContent = (props) => (
    <div className="col-lg-8">
        <div className="panel panel-default">
            <div className="panel-heading">
                <span className="panel-title">
                    <i className="fa fa-bar-chart-o fa-fw"></i> Table View | Json View
                </span>
            </div>
      
            <div className="panel-body">
                <div>
                    <HostFilter value={props.hostFilter} onChange={props.handleChangeFilter}/>
                    <div className="recharts-responsive-container" style={{width:'100%',height:'100%'}}>
                        {props.isEmpty
                          ? (props.isFetching ? <h5>Host data with table/json view</h5> : <h5>No Records.</h5>)
                          : <div style={{ opacity: props.isFetching ? 0.5 : 1 }}>
                              <Posts posts={props.posts} hostFilter={props.hostFilter.toLowerCase()} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
)

LeftContent.propTypes = {
    props: PropTypes.array
}

export default LeftContent
