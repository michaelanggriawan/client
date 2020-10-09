import React from 'react';
import PropTypes from 'prop-types';
import info from './info.png';

import './Alert.css';

export default function Alert({ type = 'info', message, children, css }) {
  let img;
  switch (type) {
    case 'info':
      img = info;
      break;
    default:
      img = info;
      break;
  }

  return (
    <div className={`todo__alertContainer ${css} `}>
      <img src={img} alt="Info" className="todo__alertImage" />
      <div className="todo__alertMessage">{message || children}</div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['info']),
  message: PropTypes.string,
  css: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
  css: '',
};
