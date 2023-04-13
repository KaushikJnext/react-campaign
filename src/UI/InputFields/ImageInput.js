import React, { useEffect, useState } from "react";
import styles from "./input.scss";

const ImageInput = ({
  field,
  disabled,
  onChange,
  fieldValue,
  previewMedia,
  setPreviewMedia,
  setFieldValue,
}) => {
  const { inputType, label, relation, isEditable, ...rest } = field;

  // URL.createObjectURL(previewMedia[0])
  const [preview, setPreview] = useState("");
  useEffect(() => {
    setPreview(
      previewMedia[0]
        ? URL.createObjectURL(previewMedia[0])
        : fieldValue[field?.name]
        ? fieldValue[field?.name]
        : preview
        ? preview
        : ""
    );
    let name = fieldValue[field?.name];
    if (name && preview === "") {
      setFieldValue({ ...fieldValue, name: "" });
    }
  }, [fieldValue]);

  // useEffect(()=>{},[])

  const deletePreviewMedia = () => {
    setPreviewMedia("");
    setPreview("");
    let name = field?.name;
    setFieldValue({ ...fieldValue, [name]: "" });
  };
  return (
    <React.Fragment>
      {field?.label && (
        <label className={styles.camp_input_label}>
          {field?.label}{" "}
          {field?.required && <span className={styles.color_red}>*</span>}
        </label>
      )}
      {previewMedia || preview ? (
        <div className={styles.camp_prev_media_content}>
          <div
            className={styles.camp_prev_media_delete}
            onClick={() => deletePreviewMedia(field?.name)}
          >
            &#9747;
            {/* &#x2715; */}
          </div>
          <div className={styles.camp_prev_media}>
            <img src={preview} alt="not found" />
          </div>
        </div>
      ) : (
        <input
          className={styles.custom_file_field}
          {...rest}
          // value={value[field?.name] || ""}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </React.Fragment>
  );
};

export default ImageInput;
