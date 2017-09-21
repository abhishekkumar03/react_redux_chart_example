import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, filterHosts } from '../actions'
import Layout from '../layouts'

class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.hostName !== this.props.hostName) {
            const { dispatch, hostName } = nextProps
            dispatch(fetchPostsIfNeeded(hostName))
        }
    }

    handleChangeFilter = hostFilter => {
        this.props.dispatch(filterHosts(hostFilter))
    }

    render() {
        const isEmpty = this.props.posts.length === 0
        return (
            <Layout {...this.props} isEmpty={isEmpty} handleChangeFilter={this.handleChangeFilter}/>
        )
    }
}

const mapStateToProps = state => {
    const { selectHost, postsByHost, getSocketHosts, filterHosts } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByHost[selectHost] || {
        isFetching: true,
        items: []
    }
    const {
        hosts
    } = getSocketHosts || {
        hosts:[]
    }
    const hostName = selectHost || null
    const hostFilter = filterHosts || ''
    return {
        hostFilter,
        hostName,
        posts,
        hosts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
