/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './inputControl.css';

function InputControl({ label, ...props }) {
  return (
    <div className="input-container">

      {label && <label>{label}</label>}
      <input type="text" {...props} />

    </div>
  );
}

export default InputControl;
