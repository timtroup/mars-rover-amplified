import React from 'react';
import PropTypes from 'prop-types';

const RoverPicker = ({ value, onChange, options }) => (
    <span>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
          <option value={option.name} key={option.name}>
              {option.name}
          </option>)
      }
    </select>
  </span>
);

RoverPicker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default RoverPicker