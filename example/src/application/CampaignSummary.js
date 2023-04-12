import React from "react";
import advImg from "../../src/assets/images/demo.jpg";
import { useNavigate, useParams } from "react-router-dom";
import OtherContent from "./OtherContent";

import { CampSummary } from "react-campaign";
import "react-campaign/dist/index.css";

const CampaignSummary = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const listData = [
    {
      _id: 59,
      adv_image: advImg,
      adv_text: "13/03/23 adv current Text",
      adv_title: "13/03/23 adv current",
      adv_url: "https://www.google.com",
      created: "2023-03-13T04:26:49.000Z",
      status: "active",
      is_approved: 1,
      timezone: "(GMT-12:00) International Date Line West",
    },
    {
      _id: 20,
      adv_image: advImg,
      adv_text: "test status for adv",
      adv_title: "test status",
      adv_url: "https://google.com",
      created: "2023-02-28T06:24:00.000Z",
      status: "pending",
      is_approved: 0,
      timezone: null,
    },
    {
      _id: 21,
      adv_image: advImg,
      adv_text: "Approved: Scheduled adv",
      adv_title: "Approved: Scheduled",
      adv_url: "https://www.google.com",
      created: "2023-02-28T06:36:31.000Z",
      status: "completed",
      is_approved: 1,
      timezone: null,
    },
    {
      _id: 56,
      adv_image: advImg,
      adv_text: "Test Timezone text",
      adv_title: "Test Timezone Title",
      adv_url: "https://www.google.com",
      created: "2023-03-10T05:32:57.000Z",
      status: "declined",
      is_approved: 1,
      timezone: "(GMT-01:00) Cape Verde Islands",
    },
    {
      _id: 60,
      adv_image: advImg,
      adv_text: "13/03/23 adv add scheduled for 14/03/23",
      adv_title: "14/03/23 adv scheduled",
      adv_url: "https://www.google.com",
      created: "2023-03-13T04:29:50.000Z",
      status: "scheduled",
      is_approved: 1,
      timezone: "(GMT-12:00) International Date Line West",
    },
    {
      _id: 25,
      adv_image: advImg,
      adv_text: "test status for adv",
      adv_title: "Test status",
      adv_url: "https://google.com",
      created: "2023-02-28T06:24:00.000Z",
      status: "suspended",
      is_approved: 1,
      timezone: null,
    },
  ];
  const data = listData?.filter((item, i) => item?._id === Number(id));

  const summaryData = data[0];

  const campStatusOption = [
    {
      id: 1,
      name: "Current Campaign - Summary",
      value: "active",
      bgColor: "RGB(28 154 108/10%)",
      color: "#1c9a6c",
    },
    {
      id: 2,
      name: "Scheduled Campaign - Summary",
      value: "scheduled",
      bgColor: "RGB(24 203 78/10%)",
      color: "#18cb4e",
    },
    {
      id: 3,
      name: "Pending Campaign - Summary",
      value: "pending",
      bgColor: "RGB(235 208 72/10%)",
      color: "#ebd048",
    },
    {
      id: 4,
      name: "Completed Campaign - Summary",
      value: "completed",
      bgColor: "RGB(102 102 102/10%)",
      color: "#666666",
    },
    {
      id: 5,
      name: "Declined Campaign - Summary",
      value: "declined",
      bgColor: "RGB(255 18 0/10%)",
      color: "#ff1200",
    },
    {
      id: 6,
      name: "Suspended Campaign - Summary",
      value: "suspended",
      bgColor: "RGB(226 102 44 / 10%)",
      color: "#e2662c",
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

  const content = <OtherContent />;
  return (
    <div>
      <CampSummary
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

export default CampaignSummary;
