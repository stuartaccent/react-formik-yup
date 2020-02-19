import { ErrorMessage, Field, FieldArray } from "formik";

import React from "react";

export default function Tags(props) {
  const errType = typeof props.errors[props.id];
  return (
    <div>
      <label>{props.label}</label>
      <FieldArray
        name={props.id}
        render={arrayHelpers => (
          <div className="tags">
            {
              props.values[props.id].map((value, index) => (
                <div
                  key={index}
                  className="tag"
                >
                  <Field
                    type="text"
                    name={`${props.id}.${index}`}
                    placeholder={props.placeholder}
                  />
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                    className="button"
                  >-</button>
                  {errType === "object" ? <ErrorMessage component="div" name={`${props.id}.${index}`} className="field-error" /> : ""}
                </div>
              ))
            }
            <button
              type="button"
              onClick={() => arrayHelpers.push('')}
              className="button"
            >+</button>
          </div>
        )}
      />
      {errType === "string" ? <ErrorMessage component="div" name={props.id} className="field-error" /> : ""}
    </div>
  );
}
