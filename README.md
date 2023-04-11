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
      campCreateBtnName="Start a Campaign"
      handleCreateCamp={handleCreateCamp}
      filterOption={filterOption}
      campaignList={campaignList}
      viewCampSummary={viewCampSummary}
      suspendedInfo={suspendedInfo}
      handleTabChange={handleTabChange}
      isActive={isActive}
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
> array/object required key
```
const filterOption = [
    {
      id: 1,
      name: "Campaigns - Running",
      value: "active",
    },
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
    },
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
      createCampTitle="Start a Campaign"
      submitCampBtn="Submit Campaign"
      fields={fields}
      className="custom-field"
    />
  }
}
```
> Campaign Props
* createCampTitle= campaign title
* submitCampBtn= campaign submit button name
* fields={fields}

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
      ]
    }
  ]
```
> inputType: input, textarea, image, select, radio, checkbox, static_content(for static info), policy_content 
## License

MIT © [KaushikJnext](https://github.com/KaushikJnext)
