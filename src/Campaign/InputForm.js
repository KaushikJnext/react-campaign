import React, { useEffect, useState } from "react";
import TextInput from "../UI/InputFields/TextInput";
import TextArea from "../UI/InputFields/TextArea";
import SelectInput from "../UI/InputFields/SelectInput";
import ImageInput from "../UI/InputFields/ImageInput";
import RadioInput from "../UI/InputFields/RadioInput";
import CheckBoxInput from "../UI/InputFields/CheckBoxInput";
import styles from "./campaign.scss";

const InputForm = ({ fields, fieldValue, setFieldValue }) => {
  const [previewMedia, setPreviewMedia] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let values =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFieldValue({ ...fieldValue, [name]: values });
    if (type === "file") {
      setPreviewMedia(files);
    }
  };

  const handleMultipleOptionChange = (e) => {
    const { name } = e.target;
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    // const selectedValues = Array.from(options, (option) => option.value);

    setFieldValue({ ...fieldValue, [name]: selectedValues });
  };

  return (
    <div>
      {fields &&
        fields?.map((field, i) => {
          return (
            <div key={i} className={styles.camp_input_field}>
              {field?.inputType === "input" ? (
                <TextInput
                  field={field}
                  value={fieldValue ? fieldValue : ""}
                  onChange={(e) => handleChange(e)}
                  disabled={
                    fieldValue[field?.relation] === true
                      ? true
                      : field?.disabled
                  }
                />
              ) : field?.inputType === "textarea" ? (
                <TextArea
                  field={field}
                  value={fieldValue ? fieldValue : ""}
                  onChange={(e) => handleChange(e)}
                  disabled={
                    fieldValue[field?.relation] === true
                      ? true
                      : field?.disabled
                  }
                />
              ) : field?.inputType === "select" ? (
                <SelectInput
                  field={field}
                  value={fieldValue ? fieldValue : ""}
                  onChange={(e) =>
                    field?.multiple
                      ? handleMultipleOptionChange(e)
                      : handleChange(e)
                  }
                  disabled={
                    fieldValue[field?.relation] === true
                      ? true
                      : field?.disabled
                  }
                />
              ) : field?.inputType === "image" ? (
                <React.Fragment>
                  <ImageInput
                    field={field}
                    onChange={(e) => handleChange(e)}
                    disabled={
                      fieldValue[field?.relation] === true
                        ? true
                        : field?.disabled
                    }
                    fieldValue={fieldValue}
                    previewMedia={previewMedia}
                    setPreviewMedia={setPreviewMedia}
                    setFieldValue={setFieldValue}
                  />
                </React.Fragment>
              ) : field?.inputType === "radio" ? (
                <RadioInput
                  field={field}
                  value={fieldValue ? fieldValue : ""}
                  onChange={(e) => handleChange(e)}
                  disabled={
                    fieldValue[field?.relation] === true
                      ? true
                      : field?.disabled
                  }
                />
              ) : field?.inputType === "checkbox" ? (
                <CheckBoxInput
                  field={field}
                  value={fieldValue ? fieldValue : ""}
                  onChange={(e) => handleChange(e)}
                  disabled={
                    fieldValue[field?.relation] === true
                      ? true
                      : field?.disabled
                  }
                />
              ) : field?.inputType === "static_content" ? (
                field?.content?.map((obj, i) => {
                  return (
                    <div key={i} className={styles.camp_static_info}>
                      <span>&#9432;</span>
                      <p className={styles.camp_static_info_text}>
                        {obj?.info}
                      </p>
                    </div>
                  );
                })
              ) : field?.inputType === "policy_content" ? (
                <div className={styles.camp_policy_content}>
                  {field?.content}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
    </div>
  );
};

export default InputForm;
