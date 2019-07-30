import React from 'react';
import PropTypes from 'prop-types';

const CameraPicker = ({ value, onChange, options }) => (
    <span>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
          <option value={option.name} key={option.name}>
              {option.full_name}
          </option>)
      }
    </select>
  </span>
);

CameraPicker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CameraPicker