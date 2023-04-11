import React from "react";
import styles from "./input.scss";

const ImageInput = ({
  field,
  disabled,
  onChange,
  previewMedia,
  setPreviewMedia,
}) => {
  const { inputType, label, relation, ...rest } = field;
  // console.log("imageInput", field, previewMedia[0]);
  // URL.createObjectURL(previewMedia[0])
  const deletePreviewMedia = () => {
    setPreviewMedia("");
  };
  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      {!previewMedia ? (
        <input
          className={styles.custom_file_field}
          {...rest}
          // value={value[field?.name] || ""}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <div className={styles.camp_prev_media_content}>
          <div
            className={styles.camp_prev_media_delete}
            onClick={deletePreviewMedia}
          >
            &#9747;
          </div>
          <div className={styles.camp_prev_media}>
            <img src={URL.createObjectURL(previewMedia[0])} alt="not found" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageInput;
