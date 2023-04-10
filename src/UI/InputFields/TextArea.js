import React from "react";
import styles from "./input.scss";

const TextArea = ({ value, field, disabled, onChange }) => {
  const { inputType, label, relation, ...rest } = field;
  // console.log("textAreaInput", field);

  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      <textarea
        className={styles.custom_textarea_field}
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

export default TextArea;
