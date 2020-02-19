import { ErrorMessage, Field } from "formik";

import React from "react";

export default function Checkbox(props) {
  return (
    <div className="checkbox">
      <label>
        <Field
          type="checkbox"
          name={props.id}
          value={true}
          checked={props.values[props.id]}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        /> {props.label}
      </label>
      <ErrorMessage component="div" name={props.id} className="field-error" />
    </div>
  );
}