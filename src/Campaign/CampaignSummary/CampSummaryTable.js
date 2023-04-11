import React, { useState } from "react";
import styles from "../campaign.scss";

export const CampSummaryTable = ({ summaryDataList }) => {
  console.log("summaryDataList", summaryDataList);

  return (
    <React.Fragment>
      <table className={styles.summary_camp_table}>
        <tbody>
          {summaryDataList?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item?.name}</td>
                <td>{item?.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
