import React, { useState } from "react";
import styles from "../campaign.scss";
import { CampSummaryTable } from "./CampSummaryTable";

export const CampSummarys = ({
  summaryData,
  summaryDataList,
  campStatus,
  viewCampNav,
  handleEndCamp,
}) => {
  console.log("summaryData", summaryData);
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      {summaryData && (
        <div className={styles.summary_camp_main_container}>
          <p className={styles.summary_camp_title}>{campStatus?.[0]?.name}</p>
          <div className={styles.summary_camp_header}>
            <p className={styles.summary_camp_header_title}>
              {summaryData?.adv_title}
            </p>
            <div className={styles.summary_camp_header_status}>
              <p className={styles.summary_camp_header_title}>
                Campaign Status
              </p>
              <div className={styles.adv_campaign_status}>
                <p
                  className={
                    summaryData?.status === "active"
                      ? styles.status_active
                      : summaryData?.status === "scheduled"
                      ? styles.status_scheduled
                      : summaryData?.status === "pending"
                      ? styles.status_pending
                      : summaryData?.status === "completed"
                      ? styles.status_completed
                      : summaryData?.status === "declined"
                      ? styles.status_declined
                      : summaryData?.status === "suspended" ||
                        summaryData?.status === "admin_suspended"
                      ? styles.status_suspended
                      : ""
                  }
                >
                  {summaryData?.status === "active"
                    ? "Active"
                    : summaryData?.status === "scheduled"
                    ? "Scheduled"
                    : summaryData?.status === "admin_suspended"
                    ? "Suspended"
                    : summaryData?.status}
                </p>
              </div>
            </div>
          </div>
          <CampSummaryTable summaryDataList={summaryDataList} />
          <div className={styles.summary_btn_content}>
            <button
              className={styles.btn_blue}
              onClick={() => viewCampNav(summaryData)}
            >
              View Campaign Detail
            </button>
            <button className={styles.b_btn_blue} onClick={() => setOpen(true)}>
              End Campaign
            </button>
          </div>
          <dialog className={styles.custom_dialog} open={open}>
            <div className={styles.dialog_content}>
              <p className={styles.dialog_content_msg}>
                Are you sure to end this campaign?
              </p>
              <div className={styles.summary_btn_content}>
                <button
                  className={styles.b_btn_blue}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={styles.btn_blue}
                  onClick={() => {
                    handleEndCamp(summaryData);
                    setOpen(false);
                  }}
                >
                  Okay
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </React.Fragment>
  );
};
