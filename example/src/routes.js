import React from "react";
import { Navigate } from "react-router-dom";

import Campaigns from "./application/Campaign";
import CampaignCreate from "./application/CampaignCreate";

// USER ROUTES
export const userRoutes = [
  {
    path: "/",
    element: "",
    children: [
      { path: "/", element: <Navigate to="/campaign" /> },
      { path: "/campaign", element: <Campaigns /> },
      { path: "/campaign/create", element: <CampaignCreate /> },
      { path: "*", element: <Navigate to="/campaign" /> },
    ],
  },
];
