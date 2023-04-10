import React from "react";
import styles from "./input.scss";

const SelectInput = ({ value, field, disabled, onChange }) => {
  const { inputType, label, options, relation, ...rest } = field;
  // console.log("selectInput", field);

  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      <select
        className={styles.custom_select_field}
        {...rest}
        value={value[field?.name] || ""}
        onChange={onChange}
        disabled={disabled}
      >
        {field?.options?.map((option, i) => {
          return (
            <option key={i} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SelectInput;
