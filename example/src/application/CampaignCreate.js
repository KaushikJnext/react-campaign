import React, { useEffect, useState } from "react";

import Policy from "./Policy";
import OtherContent from "./OtherContent";
import { useNavigate, useParams } from "react-router-dom";

import { CreateCampaign } from "react-campaign";
import "react-campaign/dist/index.css";

const CampaignCreate = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState("");
  const navigate = useNavigate();

  // Age Options
  var end = 120;
  var start = 13;
  var ageRestriction = [];
  for (var j = start; j <= end; j++) {
    ageRestriction.push({ label: j, value: j });
  }
  // Time Options
  var x = 15; //minutes interval
  var times = []; // time array
  var timesWithoutAMPM = [];
  var tt = 0; // start time
  var ap = [" AM", " PM"]; // AM-PM
  let timeOption = [];
  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] =
      ("0" + (hh % 12)).slice(-2) +
      ":" +
      ("0" + mm).slice(-2) +
      ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    timesWithoutAMPM[i] = ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
    timeOption.push({ label: times[i], value: timesWithoutAMPM[i] });
  }

  let data = {
    _id: 59,
    adv_image:
      "https://t4.ftcdn.net/jpg/03/17/25/45/240_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg",
    adv_text: "13/03/23 adv current Text",
    adv_title: "13/03/23 adv current",
    adv_url: "https://www.google.com",
    advertiser_id: 121,
    is_approved: 1,
    approved_timestamp: "2023-03-13T05:11:11.000Z",
    created: "2023-03-13T04:26:49.000Z",
    creditcard_id: 2,
    daily_limit: 5,
    is_enabled: 1,
    end_time_status: true,
    end_datetime: null,
    image_reject_reason: null,
    start_time_status: false,
    start_datetime: "2023-03-13T04:26",
    target_countries_status: false,
    target_countries: ["AFG"],
    target_gender: "1",
    target_interests: [],
    target_max_age: 44,
    target_min_age: 13,
    text_reject_reason: null,
    title_reject_reason: null,
    total_clicks: 10,
    total_limit: 50,
    max_bid_limit: 100,
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
  useEffect(() => {
    if (id) {
      setEditData(data);
    }
    // eslint-disable-next-line
  }, [id]);

  const fields = [
    {
      id: 1,
      title: "Campaign Display and Linking",
      inputField: [
        {
          inputType: "input",
          type: "text",
          label: "Campaign Title",
          name: "adv_title",
          placeholder: "Campaign Title",
          required: true,
          maxLength: 40,
        },
        {
          inputType: "textarea",
          type: "textarea",
          label: "Campaign Text",
          name: "adv_text",
          placeholder: "Campaign Text",
          rows: "5",
          maxLength: 140,
        },
        {
          inputType: "image",
          type: "file",
          label: "Campaign Image",
          name: "adv_image",
          placeholder: "Campaign Image",
          accept: "image/*",
          multiple: true,
        },
        {
          inputType: "input",
          type: "input",
          label: "Destination URL",
          name: "adv_url",
          placeholder: "Destination URL",
        },
      ],
    },
    {
      id: 2,
      title: "Campaign Target Audience",
      inputField: [
        {
          inputType: "select",
          type: "select",
          label: "Minimum Age",
          name: "target_min_age",
          placeholder: "Minimum Age",
          required: true,
          options: ageRestriction,
        },
        {
          inputType: "select",
          type: "select",
          label: "Maximum Age",
          name: "target_max_age",
          required: true,
          options: ageRestriction,
        },
        {
          inputType: "radio",
          type: "radio",
          label: "Gender",
          name: "target_gender",
          checked: "1",
          options: [
            { label: "Male", value: "1" },
            { label: "Female", value: "2" },
            { label: "Neutral", value: "0" },
          ],
        },
        {
          inputType: "checkbox",
          type: "checkbox",
          label: "Location",
          name: "target_countries_status",
          options: [{ label: "Worldwide", value: 1 }],
          or: true,
        },
        {
          inputType: "select",
          label: "Limited Countries",
          name: "target_countries",
          multiple: true,
          relation: "target_countries_status",
          options: [
            { label: "Select", value: "" },
            { label: "Afghanistan", value: "AFG" },
            { label: "Albania", value: "ALB" },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Campaign Schedule",
      inputField: [
        {
          inputType: "checkbox",
          type: "checkbox",
          label: "Start",
          name: "start_time_status",
          options: [{ label: "Immediately, once approved", value: 1 }],
          or: true,
        },
        {
          inputType: "input",
          type: "datetime-local",
          name: "start_datetime",
          placeholder: "Start",
          required: true,
          relation: "start_time_status",
        },
        {
          inputType: "checkbox",
          type: "checkbox",
          label: "End",
          name: "end_time_status",
          options: [
            {
              label:
                "Continuous until cancelled or Maximum Campaign Spend reached",
              value: 1,
            },
          ],
          or: true,
        },
        {
          inputType: "input",
          type: "datetime-local",
          name: "end_datetime",
          required: true,
          relation: "end_time_status",
        },
      ],
    },
    {
      id: 4,
      title: "Campaign Financials",
      inputField: [
        {
          inputType: "static_content",
          name: "Static Content",
          content: [
            {
              info: `advertising charges at Cost Per Unique Click (CPUC). That is, you will only be charged when a user clicks on your ad, if they haven't clicked on your ad previously.`,
            },
            {
              info: `Given the Target Campaign Audience details you have selected above, we have entered a suggested Maximum Bid for you in the field below. This is a bid that is currently likely to give your ad maximum exposure on the platform. Remember, you are only charged if a user clicks on your ad.`,
            },
            {
              info: `You can reduce your Maximum Bid to as low as $0.60, however your ad is likely to get less exposure on the platform with a lower bid.`,
            },
          ],
        },
        {
          inputType: "input",
          type: "input",
          label: "Maximum Bid",
          name: "daily_limit",
          placeholder: "Maximum Bid",
          required: true,
        },
        {
          inputType: "input",
          type: "input",
          label: "Maximum Campaign Spend",
          name: "max_bid_limit",
          placeholder: "Maximum Campaign Spend",
          required: true,
        },
      ],
    },
    {
      id: 5,
      title: "Payment Method",
      link: `<a href='/campaign/payment' >Go to Payment Methods</a>`,
      inputField: [
        {
          inputType: "select",
          name: "creditcard_id",
          options: [
            { label: "Select", value: "" },
            { label: "Payment1", value: "1" },
            { label: "Payment2", value: "2" },
            { label: "Payment3", value: "3" },
            { label: "Payment4", value: "4" },
            { label: "Payment5", value: "5" },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Advertising Policy",
      inputField: [
        {
          inputType: "checkbox",
          type: "checkbox",
          name: "Policy",
          options: [
            {
              label:
                "I have read and agree to the following Advertising Policy",
              value: 1,
            },
          ],
          required: true,
        },
        {
          inputType: "policy_content",
          name: "Policy Content",
          content: <Policy />,
        },
      ],
    },
  ];

  const handleSubmit = (e, fieldValue) => {
    e.preventDefault();
    console.log("fieldValue10", fieldValue);
    navigate(`/campaign`);
  };
  const content = <OtherContent />;

  const campStatusOption = [
    {
      id: 1,
      name: "Current Campaign - Details",
      value: "active",
    },
    {
      id: 2,
      name: "Scheduled Campaign - Details",
      value: "scheduled",
    },
    {
      id: 3,
      name: "Pending Campaign - Details",
      value: "pending",
    },
    {
      id: 4,
      name: "Completed Campaign - Details",
      value: "completed",
    },
    {
      id: 5,
      name: "Declined Campaign - Details",
      value: "declined",
    },
    {
      id: 6,
      name: "Suspended Campaign - Details",
      value: "suspended",
    },
  ];

  const campStatus = campStatusOption?.filter(
    (ff) => ff?.value === editData?.status
  );

  return (
    <CreateCampaign
      createCampTitle="Start a Campaign"
      submitCampBtn="Submit Campaign"
      fields={fields}
      className="custom-field"
      handleSubmit={handleSubmit}
      content={content}
      editData={editData}
      campStatus={campStatus}
    />
  );
};

export default CampaignCreate;
