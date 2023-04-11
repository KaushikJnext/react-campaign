import React from "react";

import { CreateCampaign } from "react-campaign";
import "react-campaign/dist/index.css";
import Policy from "./Policy";

const CampaignCreate = () => {
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

  const fields = [
    {
      id: 1,
      title: "Campaign Display and Linking",
      inputField: [
        {
          inputType: "input",
          type: "input",
          label: "Campaign Title",
          name: "Campaign Title",
          placeholder: "Campaign Title",
          required: true,
          maxLength: 40,
        },
        {
          inputType: "textarea",
          type: "textarea",
          label: "Campaign Text",
          name: "Campaign Text",
          placeholder: "Campaign Text",
          rows: "5",
          maxLength: 140,
        },
        {
          inputType: "image",
          type: "file",
          label: "Campaign Image",
          name: "Campaign Image",
          placeholder: "Campaign Image",
          accept: "image/*",
        },
        {
          inputType: "input",
          type: "input",
          label: "Destination URL",
          name: "Destination URL",
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
          name: "Minimum Age",
          placeholder: "Minimum Age",
          required: true,
          options: ageRestriction,
        },
        {
          inputType: "select",
          type: "select",
          label: "Maximum Age",
          name: "Maximum Age",
          required: true,
          options: ageRestriction,
        },
        {
          inputType: "radio",
          type: "radio",
          label: "Gender",
          name: "Gender",
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
          name: "Worldwide",
          options: [{ label: "Worldwide", value: 1 }],
          or: true,
        },
        {
          inputType: "select",
          label: "Limited Countries",
          name: "Location",
          multiple: true,
          relation: "Worldwide",
          options: [
            { label: "Select", value: "" },
            { label: "Location1", value: "1" },
            { label: "Location2", value: "2" },
            { label: "Location3", value: "3" },
            { label: "Location4", value: "4" },
            { label: "Location5", value: "5" },
          ],
        },
        {
          inputType: "checkbox",
          type: "checkbox",
          label: "User Interests",
          name: "All Interests",
          options: [{ label: "All Interests", value: 1 }],
          or: true,
        },
        {
          inputType: "select",
          label: "User Interests",
          name: "Specific",
          multiple: true,
          relation: "All Interests",
          options: [
            { label: "Select", value: "" },
            { label: "Interests1", value: "1" },
            { label: "Interests2", value: "2" },
            { label: "Interests3", value: "3" },
            { label: "Interests4", value: "4" },
            { label: "Interests5", value: "5" },
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
          name: "Start",
          options: [{ label: "Immediately, once approved", value: 1 }],
          or: true,
        },
        {
          inputType: "input",
          type: "date",
          name: "Start Date",
          placeholder: "Start",
          required: true,
          relation: "Start",
        },
        {
          inputType: "select",
          type: "select",
          name: "Start Time",
          required: true,
          options: timeOption,
          relation: "Start",
        },
        {
          inputType: "select",
          type: "select",
          name: "Start Timezone",
          required: true,
          options: [
            { label: "Timezone", value: "" },
            { label: "Timezone1", value: "1" },
            { label: "Timezone2", value: "2" },
          ],
          relation: "Start",
        },
        {
          inputType: "checkbox",
          type: "checkbox",
          label: "End",
          name: "End",
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
          type: "date",
          name: "End Date",
          required: true,
          relation: "End",
        },
        {
          inputType: "select",
          type: "select",
          name: "End Time",
          required: true,
          options: timeOption,
          relation: "End",
        },
        {
          inputType: "select",
          type: "select",
          name: "End Timezone",
          required: true,
          options: [
            { label: "Timezone", value: "" },
            { label: "Timezone1", value: "1" },
            { label: "Timezone2", value: "2" },
          ],
          relation: "End",
        },
      ],
    },
    {
      id: 4,
      title: "Campaign Financials",
      inputField: [
        {
          inputType: "static_content",
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
          name: "Maximum Bid",
          placeholder: "Maximum Bid",
          required: true,
        },
        {
          inputType: "input",
          type: "input",
          label: "Maximum Campaign Spend",
          name: "Maximum Campaign Spend",
          placeholder: "Maximum Campaign Spend",
          required: true,
        },
      ],
    },
    {
      id: 5,
      title: "Payment Method",
      link: "Go to Payment Methods",
      inputField: [
        {
          inputType: "select",
          name: "Payment",
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
          content: <Policy />,
        },
      ],
    },
  ];

  const handleSubmit = (e, fieldValue) => {
    e.preventDefault();
    console.log("fieldValue10", fieldValue);
  };
  return (
    <CreateCampaign
      createCampTitle="Start a Campaign"
      submitCampBtn="Submit Campaign"
      fields={fields}
      className="custom-field"
      handleSubmit={handleSubmit}
    />
  );
};

export default CampaignCreate;
