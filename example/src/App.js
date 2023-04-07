import React from "react";

import { useRoutes } from "react-router-dom";
import { userRoutes } from "../src/routes";
import "./assets/css/style.css";

const App = () => {
  const viewRoutes = userRoutes;
  const routing = useRoutes(viewRoutes);

  return <>{routing}</>;
};

export default App;
