import { default as Checkbox } from './checkbox';
import { default as Checkboxes } from './checkboxes';
import { default as Date } from './date';
import { default as Email } from './email';
import { default as Number } from './number';
import { default as Radios } from './radio';
import { default as Select } from './select';
import { default as SelectMultiple } from './selectmulti';
import { default as Tags } from './tags';
import { default as Text } from './text';
import { default as TextArea } from './textarea';
import { default as Url } from './url';

export {
  Checkbox,
  Checkboxes,
  Date,
  Email,
  Number,
  Radios,
  Select,
  SelectMultiple,
  Tags,
  Text,
  TextArea,
  Url,
}

export const fieldMap = {
  checkbox: Checkbox,
  checkboxes: Checkboxes,
  date: Date,
  email: Email,
  number: Number,
  radios: Radios,
  select: Select,
  selectmultiple: SelectMultiple,
  tags: Tags,
  text: Text,
  textarea: TextArea,
  url: Url,
};
