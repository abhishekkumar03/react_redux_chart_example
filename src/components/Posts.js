import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Posts = ({posts, hostFilter, isFetching}) => (
  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
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
        {posts.filter(post =>
          (
            !hostFilter ||
            (post.process_name.toLowerCase().search(hostFilter) !== -1) ||
            (post.container_name.toLowerCase().search(hostFilter) !== -1) ||
            (post.memory_usage.toLowerCase().search(hostFilter) !== -1)
          )).map(post =>
          (
            <tr key={`row_${post.process_name}`}>
              <td>{post.name}</td>
              <td>{post.process_name}</td>
              <td>{post.container_name}</td>
              <td>{post.memory_usage}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  </div>
);

Posts.propTypes = {
  hostFilter: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Posts;
