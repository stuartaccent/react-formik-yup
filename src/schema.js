import * as yup from "yup";

export function createSchema(schema, config) {
  const { id, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validator = addValidators(validator, validations);
  schema[id] = validator;
  return schema;
}

function addValidators(validator, validations) {
  validations.forEach(validation => {
    const { params, type, subType } = validation;
    if (!validator[type]) {
      return;
    }
    if (type === "of") {
      if (!yup[subType]) {
        return;
      }
      let subValidator = yup[subType]()
      subValidator = addValidators(subValidator, params);
      validator = validator[type](subValidator)
    } else {
      validator = validator[type](...params);
    }
  });
  return validator;
};
