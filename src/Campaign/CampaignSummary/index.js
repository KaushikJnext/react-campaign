import React from "react";
import styles from "../campaign.scss";

import { CampSummarys } from "./CampSummarys";

export const CampSummary = ({
  summaryData,
  summaryDataList,
  campStatus,
  className,
  viewCampNav,
  handleEndCamp,
  content,
}) => {
  return (
    <div className={styles.camp_main_container + " " + className}>
      <CampSummarys
        summaryData={summaryData}
        summaryDataList={summaryDataList}
        campStatus={campStatus}
        viewCampNav={viewCampNav}
        handleEndCamp={handleEndCamp}
        content={content}
      />
    </div>
  );
};
