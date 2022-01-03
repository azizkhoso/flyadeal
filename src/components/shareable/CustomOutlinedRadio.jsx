import React from 'react';
import PropTypes from 'prop-types';

export default function CustomOutlinedRadio({ checked, onChange }) {
  return (
    <span
      className={`flex items-center justify-center w-7 h-7 border-2 rounded-full ${checked && 'border-primary'}`}
      onClick={onChange}
    >
      <span className={`w-4 h-4 border-2 rounded-full ${checked && 'border-primary'}`} />
    </span>
  );
}

CustomOutlinedRadio.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}
