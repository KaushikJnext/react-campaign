import React, { useState } from "react";
import styles from "./campaign.scss";
import moment from "moment";
const CampaignList = ({ campaignList }) => {
  return (
    <div>
      {campaignList &&
        campaignList?.map((item, i) => (
          <div key={i}>
            <div
              className={styles.adv_campaign_list}
              //   onClick={() =>
              //     navigate(`/sezzyou/adv/campaign/summary/${item?._id}`)
              //   }
            >
              <div className={styles.adv_campaign_img_name}>
                <div className={styles.adv_campaign_img}>
                  <img src={item?.adv_image || noAdvertise} alt="" />
                </div>
                <div className={styles.adv_camp_content}>
                  <p className={styles.adv_campaign_name}>{item?.adv_title}</p>
                </div>
              </div>

              <div className={styles.adv_campaign_date}>
                <p>
                  {moment.utc(item?.created).local().format("DD MMMM YYYY")}
                </p>
              </div>
              <div className={styles.adv_campaign_status}>
                <p
                  className={
                    item?.status === "active"
                      ? styles.status_active
                      : item?.status === "scheduled"
                      ? styles.status_scheduled
                      : item?.status === "pending"
                      ? styles.status_pending
                      : item?.status === "completed"
                      ? styles.status_completed
                      : item?.status === "declined"
                      ? styles.status_declined
                      : item?.status === "suspended" ||
                        item?.status === "admin_suspended"
                      ? styles.status_suspended
                      : ""
                  }
                >
                  {item?.status === "active"
                    ? "Approved Running"
                    : item?.status === "scheduled"
                    ? "Approved Scheduled"
                    : item?.status === "admin_suspended"
                    ? "Suspended"
                    : item?.status}
                </p>
              </div>
              <div className={styles.adv_campaign_action}>
                <p
                  className={styles.adv_campaign_action_btn}
                  //   onClick={() =>
                  //     navigate(`/sezzyou/adv/campaign/summary/${item?._id}`)
                  //   }
                >
                  {/* <ViewIcon /> */}
                  <span className="color_blue">view</span>
                </p>
              </div>
            </div>
            {item?.status === "suspended" && (
              <div className={styles.adv_suspended_content}>
                {/* <AlertIcon /> */}
                <p className={styles.adv_suspended_content_text}>
                  Campaign suspended due to declined payment{" "}
                  <a href="#"> Click here to update credit card information.</a>
                </p>
              </div>
            )}
            <hr className={styles.adv_campaign_list_divider} />
          </div>
        ))}
      {campaignList?.length === 0 && (
        <div className={styles.not_found}>
          <p>No Campaign</p>
        </div>
      )}
    </div>
  );
};

export default CampaignList;
