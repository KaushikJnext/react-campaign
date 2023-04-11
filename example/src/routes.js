import React from "react";
import { Navigate } from "react-router-dom";

import Campaigns from "./application/Campaign";
import CampaignCreate from "./application/CampaignCreate";
import CampaignSummary from "./application/CampaignSummary";
import CampaignPayment from "./application/CampaignPayment";

// USER ROUTES
export const userRoutes = [
  {
    path: "/",
    element: "",
    children: [
      { path: "/", element: <Navigate to="/campaign" /> },
      { path: "/campaign", element: <Campaigns /> },
      { path: "/campaign/create", element: <CampaignCreate /> },
      { path: "/campaign/summary/:id", element: <CampaignSummary /> },
      { path: "/campaign/payment", element: <CampaignPayment /> },
      { path: "*", element: <Navigate to="/campaign" /> },
    ],
  },
];
