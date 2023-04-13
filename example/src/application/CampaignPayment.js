import React from "react";

import OtherContent from "./OtherContent";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { PaymentMethod } from "react-campaign";
import "react-campaign/dist/index.css";

const CampaignPayment = () => {
  const navigate = useNavigate();
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
      exp_date: "2025-05",
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
      exp_date: "2023-03",
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
      exp_date: "2027-08",
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
      exp_date: "2036-11",
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
      exp_date: "2027-08",
      make_default: false,
    },
  ];
  const content = <OtherContent />;

  const fields = [
    {
      inputType: "input",
      type: "text",
      label: "Name on card",
      name: "card_name",
      placeholder: "Name on card",
    },
    {
      inputType: "input",
      type: "text",
      label: "Card number",
      name: "card_no",
      placeholder: "Card number",
      required: true,
      pattern: "[0-9]{13,16}",
      isEditable: false,
    },
    {
      inputType: "input",
      type: "month",
      label: "Expiry date",
      name: "exp_date",
      placeholder: "Expiry date",
      min: moment(new Date()).format("yyyy-MM"),
      required: true,
    },
    {
      inputType: "input",
      type: "text",
      label: "CVC",
      name: "cvv",
      placeholder: "CVC",
      required: true,
      // maxLength: 3,
      pattern: "[0-9]{1,3}",
    },
    {
      inputType: "checkbox",
      type: "checkbox",
      name: "default_card",
      options: [{ label: "Make default card", value: 1 }],
    },
  ];

  const handleSubmit = (e, fieldValue) => {
    e.preventDefault();
    console.log("cardFieldValue", fieldValue);
    navigate("/campaign/payment");
  };

  const handleDeleteCard = (fieldValue) => {
    console.log("carddelete", fieldValue);
    navigate("/campaign/payment");
  };
  return (
    <PaymentMethod
      className=""
      campPaymentTitle="Payment Methods"
      addBtn="Add a new card"
      cardList={cardList}
      content={content}
      fields={fields}
      handleSubmit={handleSubmit}
      handleDeleteCard={handleDeleteCard}
    />
  );
};

export default CampaignPayment;
