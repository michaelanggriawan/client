import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

export default function Input(props) {
  const {
    id = '',
    label = '',
    type = '',
    value = '',
    placeholder = '',
    onChange,
    error,
    css,
    disabled,
  } = props;
  return (
    <div className={`todo__inputContainer ${value ? 'active' : ''}`}>
      {label && (
        <label
          htmlFor={id}
          className="todo__label"
          style={{ marginLeft: value ? '-6px' : '6px' }}
        >
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        type={type}
        id={id}
        size={18}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${error ? ' todo__inputError' : ''} ${css}`}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
  ]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  css: '',
};
