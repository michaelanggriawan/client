import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

export default function TextArea({
  css = '',
  hidden = '',
  disabled,
  id,
  value,
  label,
  ...props
}) {
  return (
    <div className={`todo__textAreaContainer ${value ? 'active' : ''}`}>
      {label && (
        <label
          htmlFor={id}
          className="todo__textAreaLabel"
          style={{ marginLeft: value ? '-6px' : '6px' }}
        >
          {label}
        </label>
      )}
      <textarea
        value={value}
        id={id}
        className={`todo__textArea ${css} ${hidden}`}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  disabled: false,
};
