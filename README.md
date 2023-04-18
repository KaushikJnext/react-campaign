# react-campaign

> React Campaign for react module

[![NPM](https://img.shields.io/npm/v/react-campaign.svg)](https://www.npmjs.com/package/react-campaign) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-campaign
```

## Usage

Campaign List
```jsx
import React, { Component } from 'react'

import { Campaign } from "react-campaign";
import 'react-campaign/dist/index.css'

class Example extends Component {
  render() {
    return <Campaign 
      className=''
      campCreateBtnName="Start a Campaign"
      handleCreateCamp={handleCreateCamp}
      filterOption={filterOption}
      campaignList={campaignList}
      viewCampSummary={viewCampSummary}
      suspendedInfo={suspendedInfo}
      handleTabChange={handleTabChange}
      isActive={isActive}
      content={content}
      langData={langData}
    />
  }
}
```
> Campaign Props
* campCreateBtnName : add your create button name
* handleCreateCamp: redirect create account screen routes set
* filterOption: add your tab filter option
* campaignList: campaign list data
* viewCampSummary: redirect to summary page
* suspendedInfo: suspended Info text
* handleTabChange: tab value change
* isActive: active tabe value
* content: add your other content
* langData: add your language data

>Language file look like
```
{
  "rc": {
    "VIEW": "View",
    "NO_CAMPAIGN": "No Campaign",
    "CAMPAIGN_STATUS": "Campaign Status",
    "VIEW_CAMP_DETAIL": "View Campaign Detail",
    "END_CAMP": "End Campaign",
    "ARE_YOU_SURE_END_CAMAPIGN": "Are you sure to end this campaign?",
    "CANCEL": "Cancel",
    "OKAY": "Okay",
    "EXPIRY": "Expiry",
    "DEFAULT_CARD": "Default Card",
    "ADD_CARD": "Add Card",
    "EDIT_CARD": "Edit Card",
    "DELETE_CARD": "Delete Card",
    "ARE_YOU_SURE_DELETE_CARD": "Are you sure to delete this card?"
  }
}
```
> array/object required key
```
const filterOption = [
    {
      id: 1,
      name: "Campaigns - Running",
      value: "active",
      bgColor: "RGB(28 154 108/10%)",
      color: "#1c9a6c",
    },
    ....
]

const campaignList =[
    {
      _id: 20,
      adv_image: advImg,
      adv_text: "test status for adv",
      adv_title: "Test status",
      adv_url: "https://google.com",
      created: "2023-02-28T06:24:00.000Z",
      status: "suspended",
      is_approved: 1,
      timezone: null,
      ....
    },
    ....
]
```

Campaign Create
```jsx
import React, { Component } from 'react'

import { CreateCampaign } from "react-campaign";
import 'react-campaign/dist/index.css'

class Example extends Component {
  render() {
    return <CreateCampaign
      className=""
      createCampTitle="Start a Campaign"
      submitCampBtn="Submit Campaign"
      fields={fields}
      content={content}
      langData={langData}
    />
  }
}
```
> Create Campaign Props
* createCampTitle= campaign title
* submitCampBtn= campaign submit button name
* fields={fields}
* content: add your other content

> array/object required key
```
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
          inputType: "select",
          type: "select",
          label: "Minimum Age",
          name: "Minimum Age",
          placeholder: "Minimum Age",
          required: true,
          options: [
            { label: "Select", value: "" },
          ],
        },
        {
          inputType: "static_content",
          content: [
            {
              info: `advertising charges at Cost Per Unique Click (CPUC). That is, you will only be charged when a user clicks on your ad, if they haven't clicked on your ad previously.`,
            }
          ],
        },
        {
          inputType: "policy_content",
          content: <Policy />,
        },
        ....
      ]
    },
    ....
  ]
```
> inputType: input, textarea, image, select, radio, checkbox, static_content(for static info), policy_content 

Campaign Summary
```jsx
import React, { Component } from 'react'

import { CampSummary } from "react-campaign";
import 'react-campaign/dist/index.css'

class Example extends Component {
  render() {
    return <CampSummary
      summaryData={summaryData}
      summaryDataList={summaryDataList}
      campStatus={campStatus}
      viewCampNav={viewCampNav}
      handleEndCamp={handleEndCamp}
      content={content}
      langData={langData}
    />
  }
}
```
> Campaign Payment Props
* summaryData= summary data object
* summaryDataList= show table data
* campStatus = campaign status 
* viewCampNav = navigate your own path
* handleEndCamp = end campaign 
* content: add your other content
```
  let summaryDataList = [
    { name: "Date/Time Ended", value: "Continuous" },
    { name: "Maximum Bid", value: "$1" },
   ....
  ];

  let campStatus =  {
    "id": 1,
    "name": "Current Campaign - Summary",
    "value": "active",
    "bgColor": "RGB(28 154 108/10%)",
    "color": "#1c9a6c"
}
```

Campaign Payment
```jsx
import React, { Component } from 'react'

import { PaymentMethod } from "react-campaign";
import 'react-campaign/dist/index.css'

class Example extends Component {
  render() {
    return <PaymentMethod
      className=""
      campPaymentTitle="Payment Methods"
      addBtn="Add a new card"
      cardList={cardList}
      fields={fields}
      handleSubmit={handleSubmit}
      handleDeleteCard={handleDeleteCard}
      content={content}
      langData={langData}
    />
  }
}
```
> Campaign Payment Props
* campPaymentTitle= campaign Payment title
* addBtn= add card button name
* cardList = added your card list
* handleSubmit = submit card details
* handleDeleteCard = delete card details
* content: add your other content

```
  let cardList = [
     {
      _id: 39,
      card_name: "Test card declined",
      card_no: "4000 **** **** 0341",
      card_type: "visa",
      cvv: "133",
      default: 1,
      exp_date: "2025-05",
      make_default: true,
      ....
    },
   ....
  ];


```

## License

MIT © [KaushikJnext](https://github.com/KaushikJnext)
