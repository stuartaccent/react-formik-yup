import * as yup from "yup";

import { Form, Formik } from "formik";
import React, { Component } from "react";

import { createSchema } from "./schema";
import { fieldMap } from "./fields";

class DynamicForm extends Component {
  render() {
    const initialValues = {};
    window.formConfig.fields.forEach(item => initialValues[item.id] = item.value === undefined ? null : item.value);

    const schema = window.formConfig.fields.reduce(createSchema, {});
    const validateSchema = yup.object().shape(schema);

    return (
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, actions) => {
            console.log("values", values);
            console.log("actions", actions);
          }}
        >
          {props => (
            <div>
              <Form onSubmit={props.handleSubmit}>
                <h1>{window.formConfig.title}</h1>
                <p>Built using Formik validated by Yup. All fields and validation are passed in as a json config file see 'public/formConfig.js'.</p>
                {window.formConfig.fields.map((item, index) => {
                  if (item.type) {
                    const Field = fieldMap[item.type];
                    return (
                      <Field
                        key={index}
                        id={item.id}
                        label={item.label}
                        placeholder={item.placeholder}
                        options={item.options}
                        {...props}
                      />
                    );
                  }
                  return "";
                })}
                <div className="form-actions">
                  <button type="submit" className="button button-primary">{window.formConfig.submitButtonText}</button>
                </div>
              </Form>
              <h3>Form Value</h3>
              <pre>{JSON.stringify(props.values, null, 2)}</pre>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default DynamicForm;
