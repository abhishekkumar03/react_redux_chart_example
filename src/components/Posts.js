import React from 'react'
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Posts = ({posts, hostFilter}) => (
    <Table responsive>
        <thead>
            <tr>
                <th>Name</th>
                <th>Process Name</th>
                <th>Container Name</th>
                <th>Severity</th>
            </tr>
        </thead>
        <tbody>
            {posts.filter(post => { return (!hostFilter || (post.process_name.toLowerCase().search(hostFilter) !== -1) || (post.container_name.toLowerCase().search(hostFilter) !== -1) || (post.memory_usage.toLowerCase().search(hostFilter) !== -1))}).map((post, i) =>
                <tr key={i}>
                    <td>{post.name}</td>
                    <td>{post.process_name}</td>
                    <td>{post.container_name}</td>
                    <td>{post.memory_usage}</td>
                </tr>
            )}
        </tbody>
    </Table>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  hostFilter: PropTypes.string.isRequired
}

export default Posts
