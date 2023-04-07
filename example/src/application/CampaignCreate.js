import React from "react";

import { CreateCampaign } from "react-campaign";
import "react-campaign/dist/index.css";

const CampaignCreate = () => {
  const fields = [
    {
      id: 1,
      order: 1,
      title: "Campaign Display and Linking",
      inputField: [
        {
          inputType: "input",
          type: "text",
          name: "Campaign Title",
          placeholder: "Campaign Title",
          required: true,
        },
        {
          inputType: "textarea",
          type: "text",
          name: "Campaign Text",
          placeholder: "Campaign Text",
          rows: "10",
        },
        {
          inputType: "input",
          type: "text",
          name: "Destination URL",
          placeholder: "Destination URL",
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
