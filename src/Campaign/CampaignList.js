import React, { useState } from "react";
import styles from "./campaign.scss";
import moment from "moment";
// import Pagination from "../UI/Pagination/Pagination";

const CampaignList = ({ campaignList, summaryNavigate, suspendedInfo }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(2);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = campaignList.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div>
      {campaignList &&
        campaignList?.map((item, i) => (
          <div key={i}>
            <div
              className={styles.adv_campaign_list}
              onClick={() => summaryNavigate(item)}
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
                    ? "Active"
                    : item?.status === "scheduled"
                    ? "Scheduled"
                    : item?.status === "admin_suspended"
                    ? "Suspended"
                    : item?.status}
                </p>
              </div>
              <div className={styles.adv_campaign_action}>
                <p
                  className={styles.adv_campaign_view_btn}
                  onClick={() => summaryNavigate(item)}
                >
                  {/* <ViewIcon /> */}
                  <span className={styles.color_blue}>view</span>
                </p>
              </div>
            </div>
            {item?.status === "suspended" && (
              <div className={styles.adv_suspended_content}>
                {/* <AlertIcon /> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: suspendedInfo,
                  }}
                  className={styles.adv_suspended_content_text}
                />
              </div>
            )}
            <hr className={styles.adv_campaign_list_divider} />
          </div>
        ))}
      {/* {
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={campaignList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      } */}
      {campaignList?.length === 0 && (
        <div className={styles.not_found}>
          <p>No Campaign</p>
        </div>
      )}
    </div>
  );
};

export default CampaignList;
