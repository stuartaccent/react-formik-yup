import { ErrorMessage, Field } from "formik";

import React from "react";

export default function Checkboxes(props) {
  return (
    <div>
      <label>{props.label}</label>
      <div className="checkboxes">
        {props.options.map(s => (
          <label 
            key={s.value}
          >
            <Field
              type="checkbox"
              name={props.id}
              value={s.value}
              checked={props.values[props.id].includes(s.value)}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            /> {s.label}
          </label>
        ))}
      </div>
      <ErrorMessage component="div" name={props.id} className="field-error" />
    </div>
  );
}
