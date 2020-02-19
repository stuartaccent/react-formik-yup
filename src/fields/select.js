import { ErrorMessage, Field } from "formik";

import React from "react";

export default function Select(props) {
  return (
    <div>
      <label>{props.label}</label>
      <Field
        component="select"
        name={props.id}
        value={props.values[props.id]}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      >
        {props.options.map(s => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </Field>
      <ErrorMessage component="div" name={props.id} className="field-error" />
    </div>
  );
}
