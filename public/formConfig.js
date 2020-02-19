window.formConfig = {
  title: "My Awesome Form",
  submitButtonText: "Submit",
  fields: [
    {
      id: "name",
      label: "Name",
      placeholder: "eg: Jon Doe",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
        {
          type: "max",
          params: [50, "Cannot be more than 50 characters"]
        }
      ]
    },
    {
      id: "email",
      label: "Email",
      placeholder: "eg: jon@example.com",
      type: "email",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
        {
          type: "email",
          params: ["Please enter a valid email"]
        }
      ]
    },
    {
      id: "age",
      label: "Age",
      placeholder: "eg: 50",
      type: "number",
      validationType: "number",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
        {
          type: "integer",
          params: ["Whole numbers only"]
        },
        {
          type: "min",
          params: [18, "Must be at least 18"]
        }
      ]
    },
    {
      id: "sex",
      label: "Sex",
      type: "select",
      validationType: "string",
      value: "",
      options: [
        { value: '', label: 'Please select...' },
        { value: 'm', label: 'Male' },
        { value: 'f', label: 'Female' }
      ],
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        }
      ]
    },
    {
      id: "phone_number",
      label: "Phone number",
      placeholder: "eg: 01234567890",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
        {
          type: "matches",
          params: [/^[\d\s]+$/, "Please enter numbers and spaces only"]
        }
      ]
    },
    {
      id: "website",
      label: "Favourite Website",
      placeholder: "eg: https://example.com",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
        {
          type: "url",
          params: ["Must be a valid url"]
        }
      ]
    },
    {
      id: "interests",
      label: "Interests",
      type: "selectmultiple",
      validationType: "string",
      value: [],
      options: [
        { value: "1", label: "First Option" },
        { value: "2", label: "Second Option" },
        { value: "3", label: "Third Option" },
      ],
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        }
      ]
    },
    {
      id: "comments",
      label: "Comments",
      placeholder: "eg: Some comment",
      type: "textarea",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        },
      ]
    },
    {
      id: "one",
      label: "Choose one of",
      type: "radios",
      validationType: "string",
      value: "",
      options: [
        { value: "1", label: "First Option" },
        { value: "2", label: "Second Option" },
      ],
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        }
      ]
    },
    {
      id: "choose",
      label: "Choose any",
      type: "checkboxes",
      validationType: "string",
      value: [],
      options: [
        { value: "1", label: "First Option" },
        { value: "2", label: "Second Option" },
        { value: "3", label: "Third Option" },
      ],
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        }
      ]
    },
    {
      id: "date",
      label: "The date",
      placeholder: "eg: Tag 1",
      type: "date",
      validationType: "date",
      value: "",
      validations: [
        {
          type: "required",
          params: ["This field is required"]
        }
      ]
    },
    {
      id: "tags",
      label: "Add some tags",
      placeholder: "eg: Tag 1",
      type: "tags",
      validationType: "array",
      value: [],
      validations: [
        {
          type: "of",
          subType: "string",
          params: [
            {
              type: "required",
              params: ["This field is required"]
            },
            {
              type: "max",
              params: [20, "Cannot be more than 20 characters"]
            }
          ]
        },
        {
          type: "min",
          params: [1, "Must have at least 1 item"]
        },
        {
          type: "max",
          params: [2, "Must have no more than 2 items"]
        }
      ]
    },
    {
      id: "accept",
      label: "You must agree to the terms and conditions",
      type: "checkbox",
      validationType: "boolean",
      value: false,
      validations: [
        {
          type: "oneOf",
          params: [[true], "This field is required"]
        }
      ]
    }
  ]
};
