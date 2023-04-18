import React, { useEffect, useState, useContext } from "react";

import advImg from "../../src/assets/images/demo.jpg";
import { useNavigate } from "react-router-dom";
import OtherContent from "./OtherContent";

import { IntlContext } from "../../src/App";

import { Campaign } from "react-campaign";
import "react-campaign/dist/index.css";

const Campaigns = () => {
  const intlContext = useContext(IntlContext);
  const langData = intlContext?.messages;
  const [campaignList, setCampaignList] = useState([]);
  const [isActive, setIsActive] = useState("active");
  const navigate = useNavigate();

  useEffect(() => {
    setCampaignList([
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
    ]);
  }, []);

  const handleCreateCamp = () => {
    navigate("/campaign/create");
  };
  const viewCampSummary = (item) => {
    navigate(`/campaign/summary/${item?._id}`);
  };

  const handleTabChange = (type) => {
    setIsActive(type);
  };
  const suspendedInfo = `Campaign suspended due to declined payment <a href='/campaign/payment'>Click here to update credit card information.</a>`;
  const filterOption = [
    {
      id: 1,
      name: "Campaigns - Running",
      value: "active",
      bgColor: "RGB(28 154 108/10%)",
      color: "#1c9a6c",
    },
    {
      id: 2,
      name: "Campaigns - Scheduled",
      value: "scheduled",
      bgColor: "RGB(24 203 78/10%)",
      color: "#18cb4e",
    },
    {
      id: 3,
      name: "Campaigns - Pending",
      value: "pending",
      bgColor: "RGB(235 208 72/10%)",
      color: "#ebd048",
    },
    {
      id: 4,
      name: "Campaigns - Completed",
      value: "completed",
      bgColor: "RGB(102 102 102/10%)",
      color: "#666666",
    },
    {
      id: 5,
      name: "Campaigns - Declined",
      value: "declined",
      bgColor: "RGB(255 18 0/10%)",
      color: "#ff1200",
    },
  ];
  const content = <OtherContent />;
  return (
    <Campaign
      campCreateBtnName="Start a Campaign"
      handleCreateCamp={handleCreateCamp}
      filterOption={filterOption}
      campaignList={campaignList}
      summaryNavigate={viewCampSummary}
      suspendedInfo={suspendedInfo}
      handleTabChange={handleTabChange}
      isActive={isActive}
      className="main-content"
      content={content}
      langData={langData}
    />
  );
};

export default Campaigns;
