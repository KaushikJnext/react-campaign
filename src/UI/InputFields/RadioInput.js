import React from "react";
import styles from "./input.scss";

const RadioInput = ({ field, value, disabled, onChange }) => {
  const { inputType, label, options, or, relation, ...rest } = field;
  // console.log("radioInput", field, value);

  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      {field?.options?.map((item, i) => {
        return (
          <div className={styles.camp_radio_content} key={i}>
            <input
              className={styles.custom_radio_field}
              {...rest}
              value={item?.value || ""}
              checked={value[field?.name] === item?.value}
              onChange={onChange}
              id={`radio-${i}`}
              disabled={disabled}
            />
            <label htmlFor={`radio-${i}`}>{item?.label}</label>
          </div>
        );
      })}
      {field?.or && (
        <p style={{ marginTop: "5px", marginBottom: "-13px" }}>Or</p>
      )}
    </React.Fragment>
  );
};

export default RadioInput;
