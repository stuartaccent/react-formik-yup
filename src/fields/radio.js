import { ErrorMessage, Field } from "formik";

import React from "react";

export default function Radios(props) {
  return (
    <div>
      <label>{props.label}</label>
      <div className="radios">
        {props.options.map((item, index) => (
          <label 
            key={index}
          >
            <Field
              type="radio"
              name={props.id}
              value={item.value}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {item.label}
          </label>
        ))}
      </div>
      <ErrorMessage component="div" name={props.id} className="field-error" />
    </div>
  );
}
