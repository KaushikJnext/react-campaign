import React, { useState } from "react";
import styles from "../campaign.scss";
import TextInput from "../../UI/InputFields/TextInput";
import TextArea from "../../UI/InputFields/TextArea";
import SelectInput from "../../UI/InputFields/SelectInput";
import ImageInput from "../../UI/InputFields/ImageInput";
import RadioInput from "../../UI/InputFields/RadioInput";
import CheckBoxInput from "../../UI/InputFields/CheckBoxInput";

export const CreateCampaign = ({
  createCampTitle,
  fields,
  submitCampBtn,
  className,
}) => {
  console.log("fields", fields);
  const [fieldValue, setFiledValue] = useState({});
  const [previewMedia, setPreviewMedia] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let values =
      type === "checkbox" ? checked : type === "file" ? files : value;
    setFiledValue({ ...fieldValue, [name]: values });
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
    setFiledValue({ ...fieldValue, [name]: selectedValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fieldValue1", fieldValue);
  };
  console.log("fieldValue0", fieldValue);

  return (
    <div className={styles.create_camp_main_container + " " + className}>
      {/* Create React Campaign Library Example 😄 */}
      <p className={styles.create_camp_title}>{createCampTitle}</p>

      {/* <p className={styles.create_camp_sub_title}>
        Campaign Display and Linking
      </p> */}
      <form onSubmit={handleSubmit}>
        {fields?.map((item) => {
          return (
            <div key={item?.id}>
              <div className={styles.create_camp_header}>
                <p className={styles.create_camp_sub_title}>{item?.title}</p>
                {item?.link && (
                  <a href="#" className={styles.create_camp_sub_title_link}>
                    {item?.link}
                  </a>
                )}
              </div>
              {item?.inputField?.map((field, i) => {
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
                      <ImageInput
                        field={field}
                        onChange={(e) => handleChange(e)}
                        disabled={
                          fieldValue[field?.relation] === true
                            ? true
                            : field?.disabled
                        }
                        previewMedia={previewMedia}
                        setPreviewMedia={setPreviewMedia}
                      />
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
              <hr className={styles.camp_create_divider} />
            </div>
          );
        })}
        <button className={styles.camp_submit_btn} type="submit">
          {submitCampBtn}
        </button>
      </form>
    </div>
  );
};