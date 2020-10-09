/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css';

export default function Dropdown({
  isOpen,
  setIsOpen,
  options,
  value,
  setValue,
}) {
  return (
    <div className="todo__dropdownContainer">
      <button
        className={`todo__dropdownButton is-filled ${
          isOpen ? 'todo__dropdownButton is-open' : ''
        }`}
        onClick={() => setIsOpen()}
      >
        <span
          className={`${
            isOpen ? 'todo__dropdownValueOpen' : 'todo__dropdownValue'
          }`}
        >
          {value}
        </span>
        <i
          className={`fa ${
            isOpen ? 'fa-angle-up' : 'fa-angle-down'
          }  todo_dropdownHeaderList`}
        ></i>
      </button>
      {isOpen && (
        <div className="todo__dropdownList">
          {options.map((option, i) => {
            return (
              <a
                className="todo__list"
                key={i}
                onClick={() => {
                  setValue(option.status);
                  setIsOpen();
                }}
              >
                {option.status}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
