import React from "react";

import { CreateCampaign } from "react-campaign";
import "react-campaign/dist/index.css";
import Policy from "./Policy";

const CampaignCreate = () => {
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
          options: [
            { label: "Select", value: "" },
            { label: "13", value: "13" },
            { label: "14", value: "14" },
          ],
        },
        {
          inputType: "select",
          type: "select",
          label: "Maximum Age",
          name: "Maximum Age",
          required: true,
          options: [{ label: "Select", value: "" }],
        },
        {
          inputType: "radio",
          type: "radio",
          label: "Gender",
          name: "Gender",
          options: [
            { label: "Male", value: "1" },
            { label: "Female", value: "2" },
            { label: "Neutral", value: "0" },
          ],
        },
        {
          inputType: "select",
          label: "Location",
          name: "Location",
          multiple: true,
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
          inputType: "select",
          label: "User Interests",
          name: "User Interests",
          multiple: true,
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
          required: true,
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
          options: [
            { label: "Time", value: "" },
            { label: "Time1", value: "1" },
          ],
          relation: "Start",
        },
        {
          inputType: "select",
          type: "select",
          name: "Start Timezone",
          required: true,
          options: [{ label: "Timezone", value: "" }],
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
          required: true,
        },
        {
          inputType: "input",
          type: "date",
          name: "End Date",
          required: true,
          options: [{ label: "Select", value: "" }],
          relation: "End",
        },
        {
          inputType: "select",
          type: "select",
          name: "End Time",
          required: true,
          options: [{ label: "Time", value: "" }],
          relation: "End",
        },
        {
          inputType: "select",
          type: "select",
          name: "End Timezone",
          required: true,
          options: [{ label: "Timezone", value: "" }],
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
          label: "Maximum Bid*",
          name: "Maximum Bid*",
          placeholder: "Maximum Bid*",
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
            { label: "Location1", value: "1" },
            { label: "Location2", value: "2" },
            { label: "Location3", value: "3" },
            { label: "Location4", value: "4" },
            { label: "Location5", value: "5" },
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

  return (
    <CreateCampaign
      createCampTitle="Start a Campaign"
      submitCampBtn="Submit Campaign"
      fields={fields}
      className="custom-field"
    />
  );
};

export default CampaignCreate;
