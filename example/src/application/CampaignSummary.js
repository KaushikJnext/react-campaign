import React from "react";
import { CampSummary } from "react-campaign";
import "react-campaign/dist/index.css";
import advImg from "../../src/assets/images/demo.jpg";
import { useNavigate } from "react-router-dom";

const CampaignSummary = () => {
  const navigate = useNavigate();

  const summaryData = {
    _id: 59,
    adv_image: advImg,
    adv_text: "13/03/23 adv current Text",
    adv_title: "13/03/23 adv current",
    adv_url: "https://www.google.com",
    advertiser_id: 121,
    is_approved: 1,
    approved_timestamp: "2023-03-13T05:11:11.000Z",
    created: "2023-03-13T04:26:49.000Z",
    creditcard_id: 25,
    daily_limit: 0,
    is_enabled: 1,
    end_datetime: null,
    image_reject_reason: null,
    start_datetime: "2023-03-13T04:26:49.000Z",
    target_countries: [],
    target_gender: null,
    target_interests: [],
    target_max_age: 44,
    target_min_age: 13,
    text_reject_reason: null,
    title_reject_reason: null,
    total_clicks: 10,
    total_limit: 50,
    max_bid_limit: 1,
    url_reject_reason: null,
    admin_id: 1,
    status: "active",
    end_reason: null,
    pricing_id: 2,
    timezone: "(GMT-12:00) International Date Line West",
    target_countries_code: "",
    target_interests_code: "",
    billing_to_date: 0,
    total_click_date: 0,
    unique_click_date: 0,
    balance_owing: 0.17464999999999797,
    payments_received: 13.40535,
  };

  const campStatusOption = [
    {
      id: 1,
      name: "Current Campaign - Summary",
      value: "active",
    },
    {
      id: 2,
      name: "Scheduled Campaign - Summary",
      value: "scheduled",
    },
    {
      id: 3,
      name: "Pending Campaign - Summary",
      value: "pending",
    },
    {
      id: 4,
      name: "Completed Campaign - Summary",
      value: "completed",
    },
    {
      id: 5,
      name: "Declined Campaign - Summary",
      value: "declined",
    },
    {
      id: 6,
      name: "Suspended Campaign - Summary",
      value: "suspended",
    },
  ];

  const campStatus = campStatusOption?.filter(
    (ff) => ff?.value === summaryData?.status
  );

  let summaryDataList = [
    { name: "Date/Time Submitted", value: "Monday, March 13, 2023 09:56 AM" },
    { name: "Date/Time Approved", value: "Monday, March 13, 2023 10:41 AM" },
    { name: "Date/Time Commenced", value: "Monday, March 13, 2023 09:56 AM" },
    { name: "Date/Time Ended", value: "Continuous" },
    { name: "Maximum Bid", value: "$1" },
    { name: "Maximum Campaign Spend", value: "$50" },
    { name: "User Clicks To Date", value: "0" },
    { name: "Unique User Clicks To Date", value: "0" },
    { name: "Billings To Date", value: "0" },
    { name: "Payments Received", value: "$13.41" },
    { name: "Amount Owing", value: "$0.17" },
  ];

  const viewCampNav = (item) => {
    navigate(`/campaign/view/${item?._id}`);
  };

  const handleEndCamp = (item) => {
    navigate(`/campaign`);
  };
  return (
    <div>
      <CampSummary
        summaryData={summaryData}
        summaryDataList={summaryDataList}
        campStatus={campStatus}
        viewCampNav={viewCampNav}
        handleEndCamp={handleEndCamp}
      />
    </div>
  );
};

export default CampaignSummary;
