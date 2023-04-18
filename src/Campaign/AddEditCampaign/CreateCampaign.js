import React, { useEffect, useState } from "react";

import InputForm from "../InputForm";

import styles from "../campaign.scss";

export const CreateCampaign = ({
  createCampTitle,
  fields,
  submitCampBtn,
  className,
  handleSubmit,
  content,
  editData,
  campStatus,
}) => {
  const [fieldValue, setFieldValue] = useState({});

  useEffect(() => {
    setFieldValue(editData);
  }, [editData]);

  return (
    <React.Fragment>
      {fields && (
        <div className={styles.create_camp_main_container + " " + className}>
          <p className={styles.create_camp_title}>
            {editData ? campStatus?.[0]?.name : createCampTitle}
          </p>
          <form onSubmit={(e) => handleSubmit(e, fieldValue)}>
            {fields?.map((item) => {
              return (
                <div key={item?.id}>
                  <div className={styles.create_camp_header}>
                    <p className={styles.create_camp_sub_title}>
                      {item?.title}
                    </p>
                    {item?.link && (
                      <p
                        dangerouslySetInnerHTML={{ __html: item?.link }}
                        className={styles.create_camp_sub_title_link}
                      />
                    )}
                  </div>
                  <InputForm
                    fields={item?.inputField}
                    fieldValue={fieldValue}
                    setFieldValue={setFieldValue}
                  />
                  <hr className={styles.camp_create_divider} />
                </div>
              );
            })}
            {content && content}
            {submitCampBtn && (
              <button className={styles.camp_submit_btn} type="submit">
                {submitCampBtn}
              </button>
            )}
          </form>
        </div>
      )}
    </React.Fragment>
  );
};
