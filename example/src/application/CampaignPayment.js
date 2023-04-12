import React from "react";

import { PaymentMethod } from "react-campaign";
import "react-campaign/dist/index.css";

const CampaignPayment = () => {
  const cardList = [
    {
      _id: 39,
      identity: "kaushik12@yopmail.com",
      card_name: "Test card declined",
      card_no: "4000 **** **** 0341",
      card_type: "visa",
      cvv: "133",
      expiry_month: "05",
      expiry_year: "2025",
      status: "suspended",
      default: 1,
      advertiser_id: 121,
      createdAt: "2023-03-17T13:03:10.000Z",
      updatedAt: "2023-04-04T11:37:14.000Z",
      last_four: "0341",
      exp_date: "05/25",
      make_default: true,
    },
    {
      _id: 42,
      identity: "kaushik12@yopmail.com",
      card_name: "Decline",
      card_no: "4000 **** **** 0341",
      card_type: "visa",
      cvv: "111",
      expiry_month: "03",
      expiry_year: "2023",
      status: "suspended",
      default: 0,
      advertiser_id: 121,
      createdAt: "2023-03-21T09:17:34.000Z",
      updatedAt: "2023-04-04T11:37:00.000Z",
      last_four: "0341",
      exp_date: "03/23",
      make_default: false,
    },
    {
      _id: 29,
      identity: "kaushikghori123@yopmail.com",
      card_name: "decline",
      card_no: "4000 **** **** 5126",
      card_type: "visa",
      cvv: "122",
      expiry_month: "08",
      expiry_year: "2027",
      status: "active",
      default: 0,
      advertiser_id: 121,
      createdAt: "2023-03-01T06:12:32.000Z",
      updatedAt: "2023-04-04T11:37:14.000Z",
      last_four: "5126",
      exp_date: "08/27",
      make_default: false,
    },
    {
      _id: 25,
      identity: "kaushikghori123@yopmail.com",
      card_name: "Ghori",
      card_no: "4242 **** **** 4242",
      card_type: "visa",
      cvv: "333",
      expiry_month: "11",
      expiry_year: "2036",
      status: "active",
      default: 0,
      advertiser_id: 121,
      createdAt: "2023-02-28T17:33:24.000Z",
      updatedAt: "2023-02-28T17:33:24.000Z",
      last_four: "4242",
      exp_date: "11/36",
      make_default: false,
    },
    {
      _id: 24,
      identity: "kaushikghori123@yopmail.com",
      card_name: "kaushik",
      card_no: "4242 **** **** 4242",
      card_type: "visa",
      cvv: "123",
      expiry_month: "08",
      expiry_year: "2027",
      status: "active",
      default: 0,
      advertiser_id: 121,
      createdAt: "2023-02-28T14:53:37.000Z",
      updatedAt: "2023-02-28T14:53:37.000Z",
      last_four: "4242",
      exp_date: "08/27",
      make_default: false,
    },
  ];
  return (
    <PaymentMethod
      className=""
      campPaymentTitle="Payment Methods"
      addBtn="Add a new card"
      cardList={cardList}
    />
  );
};

export default CampaignPayment;
