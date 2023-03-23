import React, { useEffect, useState } from "react";

import { Campaign } from "react-campaign";
import "react-campaign/dist/index.css";

const App = () => {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
    setCampaignList([
      {
        _id: 20,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/3OHJ4-1677565357474.png",
        adv_text: "test status for adv",
        adv_title: "test status",
        adv_url: "https://google.com",
        created: "2023-02-28T06:24:00.000Z",
        status: "suspended",
        is_approved: 1,
        timezone: null,
      },
      {
        _id: 34,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/0LMpv-1677821875603.png",
        adv_text:
          "New Campaign 15/03/23 11:30 AM Start and Campaign 30/03/23 05:30 PM End Date",
        adv_title: "Scheduled Campaign Start and End Date",
        adv_url: "https://www.jnext.co.in/",
        created: "2023-03-03T05:44:58.000Z",
        status: "active",
        is_approved: 1,
        timezone: null,
      },
      {
        _id: 35,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/CRMYV-1677822521267.png",
        adv_text:
          "campaign Immediately, once approved with Continuous until cancelled or Maximum Campaign Spend reached",
        adv_title: "Immediately Campaign",
        adv_url: "https://www.google.com",
        created: "2023-03-03T05:50:37.000Z",
        status: "active",
        is_approved: 1,
        timezone: null,
      },
      {
        _id: 45,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/OWHEs-1678258535166.png",
        adv_text: "create new adv schedule text",
        adv_title: "create new adv schedule",
        adv_url: "https://www.google.com",
        created: "2023-03-08T06:56:38.000Z",
        status: "active",
        is_approved: 1,
        timezone: null,
      },
      {
        _id: 56,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/E9Gj3-1678425941513.png",
        adv_text: "Test Timezone text",
        adv_title: "Test Timezone Title",
        adv_url: "https://www.google.com",
        created: "2023-03-10T05:32:57.000Z",
        status: "active",
        is_approved: 1,
        timezone: "(GMT-01:00) Cape Verde Islands",
      },
      {
        _id: 59,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/Mn1L0-1678681544578.png",
        adv_text: "13/03/23 adv current Text",
        adv_title: "13/03/23 adv current",
        adv_url: "https://www.google.com",
        created: "2023-03-13T04:26:49.000Z",
        status: "active",
        is_approved: 1,
        timezone: "(GMT-12:00) International Date Line West",
      },
      {
        _id: 60,
        adv_image:
          "https://staging.sezzyou.com/api/v1/public/user/files/redirect/hZ1Dk-1678681704470.png",
        adv_text: "13/03/23 adv add scheduled for 14/03/23",
        adv_title: "14/03/23 adv scheduled",
        adv_url: "https://www.google.com",
        created: "2023-03-13T04:29:50.000Z",
        status: "active",
        is_approved: 1,
        timezone: "(GMT-12:00) International Date Line West",
      },
    ]);
  }, []);

  const handleCreateCamp = () => {
    console.log("create camp");
  };

  const filterOption = [
    {
      id: 1,
      name: "Campaigns - Approved: Running",
      value: "active",
    },
    {
      id: 2,
      name: "Campaigns - Approved: Scheduled",
      value: "scheduled",
    },
    {
      id: 3,
      name: "Campaigns - Pending Approval",
      value: "pending",
    },
    {
      id: 4,
      name: "Campaigns - Completed",
      value: "completed",
    },
    {
      id: 5,
      name: "Campaigns - Declined",
      value: "declined",
    },
  ];

  return (
    <Campaign
      campCreateBtnName="Start a Campaign"
      handleCreateCamp={handleCreateCamp}
      filterOption={filterOption}
      campaignList={campaignList}
    />
  );
};

export default App;
