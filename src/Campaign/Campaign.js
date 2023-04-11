import React, { useState } from "react";
import styles from "./campaign.scss";
import CampaignList from "./CampaignList";

export const Campaign = ({
  campCreateBtnName,
  handleCreateCamp,
  filterOption,
  campaignList,
  summaryNavigate,
  suspendedInfo,
  handleTabChange,
  isActive,
}) => {
  // const [isActive, setIsActive] = useState("active");

  // const handleTabChange = (type) => {
  //   setIsActive(type);
  // };

  return (
    <div className={styles.camp_main_container}>
      {/* Create React Campaign Library Example 😄 */}
      {campCreateBtnName && (
        <React.Fragment>
          <button className={styles.camp_create_btn} onClick={handleCreateCamp}>
            {campCreateBtnName}
          </button>
          <hr className={styles.camp_devider} />
        </React.Fragment>
      )}

      {filterOption && (
        <div className={styles.camp_filter_options}>
          {filterOption &&
            filterOption?.map((item, i) => {
              return (
                <button
                  key={i}
                  className={
                    item?.value === isActive
                      ? styles.camp_filter_btn
                      : styles.camp_filter_btn + " " + styles.active
                  }
                  onClick={() => handleTabChange(item?.value)}
                >
                  {item?.name}
                </button>
              );
            })}
        </div>
      )}

      {campaignList && (
        <CampaignList
          campaignList={campaignList}
          summaryNavigate={summaryNavigate}
          suspendedInfo={suspendedInfo}
        />
      )}
    </div>
  );
};
