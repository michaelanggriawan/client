import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default function Button({
  children,
  disabled,
  styled = true,
  block,
  css,
  size,
  onClick,
  secondary,
}) {
  switch (size) {
    case 'sm':
      size = 'sm';
      break;
    default:
      size = 'default';
      break;
  }
  return (
    <button
      className={`${size}${styled ? ' todo__buttonShadow' : ''} ${
        secondary ? 'todo__buttonSecondary' : 'todo__buttonActive'
      }${block ? ' w-full' : ''} ${css || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  styled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm']),
  css: PropTypes.string,
  secondary: false,
};

Button.defaultProps = {
  disabled: false,
  block: false,
  styled: false,
  handleClick: () => {},
  css: '',
};
