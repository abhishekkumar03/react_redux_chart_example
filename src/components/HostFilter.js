import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const HostFilter = ({ value = '', onChange }) => (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Filter</ControlLabel>
      {' '}
      <FormControl type="text" placeholder="Search hosts" value={value} onChange={e => onChange(e.target.value)} />
    </FormGroup>
  </Form>
);

HostFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

HostFilter.defaultProps = {
  value: ''
};

export default HostFilter;
