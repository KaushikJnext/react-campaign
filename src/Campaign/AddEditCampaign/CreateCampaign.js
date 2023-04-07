import React, { useState } from "react";
import styles from "../campaign.scss";

export const CreateCampaign = ({
  createCampTitle,
  fields,
  submitCampBtn,
  className,
}) => {
  console.log("fields", fields);
  const [fieldValue, setFiledValue] = useState({});
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFiledValue({ ...fieldValue, [name]: value });
    console.log("hello", name, value);
  };
  return (
    <div className={styles.create_camp_main_container}>
      {/* Create React Campaign Library Example 😄 */}
      <p className={styles.create_camp_title}>{createCampTitle}</p>

      {/* <p className={styles.create_camp_sub_title}>
        Campaign Display and Linking
      </p> */}
      <form>
        {fields?.map((item) => {
          return (
            <div key={item?.id}>
              <div>
                <p className={styles.create_camp_sub_title}>{item?.title}</p>
              </div>

              {item?.inputField?.map((field, i) => {
                let campName = field?.name;
                return (
                  <div key={i} className={styles.cmap_input_field}>
                    <label
                      className={styles.cmap_input_label}
                      htmlFor={field && field?.for ? field?.for : ""}
                    >
                      {field?.name}
                    </label>

                    {field?.inputType === "input" ? (
                      <input
                        className={styles.custom_field}
                        name={field && field?.name ? campName : ""}
                        type={field && field?.type ? field?.type : ""}
                        value={fieldValue ? fieldValue?.campName : ""}
                        readOnly={
                          field && field?.readonly ? field?.readonly : false
                        }
                        disabled={
                          field && field?.disabled ? field?.disabled : false
                        }
                        size={field && field?.size ? field?.size : ""}
                        maxLength={
                          field && field?.maxlength ? field?.maxlength : null
                        }
                        min={field && field?.min ? field?.min : null}
                        max={field && field?.max ? field?.max : null}
                        multiple={
                          field && field?.multiple ? field?.multiple : ""
                        }
                        pattern={
                          field && field?.pattern ? field?.pattern : null
                        }
                        placeholder={
                          field && field?.placeholder ? field?.placeholder : ""
                        }
                        required={
                          field && field?.required ? field?.required : false
                        }
                        step={field && field?.step ? field?.step : null}
                        autoFocus={
                          field && field?.autofocus ? field?.autofocus : ""
                        }
                        height={field && field?.height ? field?.height : null}
                        width={field && field?.width ? field?.width : null}
                        autoComplete={
                          field && field?.autocomplete
                            ? field?.autocomplete
                            : null
                        }
                        onChange={(e) => handleChange(e)}
                      />
                    ) : field?.inputType === "textarea" ? (
                      <textarea
                        className={styles.custom_field}
                        name={field && field?.name ? campName : ""}
                        type={field && field?.type ? field?.type : ""}
                        value={fieldValue ? fieldValue?.campName : ""}
                        readOnly={
                          field && field?.readonly ? field?.readonly : false
                        }
                        disabled={
                          field && field?.disabled ? field?.disabled : false
                        }
                        size={field && field?.size ? field?.size : ""}
                        maxLength={
                          field && field?.maxlength ? field?.maxlength : null
                        }
                        min={field && field?.min ? field?.min : null}
                        max={field && field?.max ? field?.max : null}
                        multiple={
                          field && field?.multiple ? field?.multiple : ""
                        }
                        pattern={
                          field && field?.pattern ? field?.pattern : null
                        }
                        placeholder={
                          field && field?.placeholder ? field?.placeholder : ""
                        }
                        required={
                          field && field?.required ? field?.required : false
                        }
                        step={field && field?.step ? field?.step : null}
                        autoFocus={
                          field && field?.autofocus ? field?.autofocus : ""
                        }
                        height={field && field?.height ? field?.height : null}
                        width={field && field?.width ? field?.width : null}
                        autoComplete={
                          field && field?.autocomplete
                            ? field?.autocomplete
                            : null
                        }
                        rows={field && field?.rows ? field?.rows : "5"}
                        cols={field && field?.cols ? field?.cols : ""}
                        onChange={(e) => handleChange(e)}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
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
