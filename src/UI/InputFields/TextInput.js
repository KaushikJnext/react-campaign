import React from "react";
import styles from "./input.scss";

const TextInput = ({ value, field, disabled, onChange }) => {
  const { inputType, label, relation, ...rest } = field;
  // console.log("textInput", field);

  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      <input
        className={styles.custom_field}
        {...rest}
        value={value[field?.name] || ""}
        onChange={onChange}
        disabled={disabled}
      />
      {field?.maxLength && (
        <p>
          {value[field?.name]?.length
            ? value[field?.name]?.length + " / " + field?.maxLength
            : 0 + " / " + field?.maxLength}
        </p>
      )}
    </React.Fragment>
  );
};

export default TextInput;
