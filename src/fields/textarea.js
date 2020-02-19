import { ErrorMessage, Field } from "formik";

import React from "react";

export default function TextArea(props) {
  return (
    <div>
      <label>{props.label}</label>
      <Field
        component="textarea"
        name={props.id}
        placeholder={props.placeholder}
        value={props.values[props.id]}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      <ErrorMessage component="div" name={props.id} className="field-error" />
    </div>
  );
}
