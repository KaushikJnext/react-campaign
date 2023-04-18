import React, { createContext, useState, useEffect } from "react";

import { useRoutes } from "react-router-dom";
import { userRoutes } from "../src/routes";

import messagesEn from "../src/helpers/locales/en.json";
import messagesDe from "../src/helpers/locales/de.json";

import "./assets/css/style.css";

const Context = createContext();

const App = () => {
  const viewRoutes = userRoutes;
  const routing = useRoutes(viewRoutes);

  const menuMessages = {
    en: { ...messagesEn },
    de: { ...messagesDe },
    // fr: { ...messagesFr },
    // pt: { ...messagesPt },
  };

  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(menuMessages["en"]);

  const switchLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLocale(lang);
    setMessages(menuMessages[lang]);
  };

  useEffect(() => {
    var defaultLang =
      localStorage.getItem("language") !== null
        ? localStorage.getItem("language")
        : "en";
    setLocale(defaultLang);
    setMessages(menuMessages[defaultLang]);
    localStorage.setItem("language", defaultLang);
    // saveToStorage("language", defaultLang);
    // eslint-disable-next-line
  }, [locale, localStorage.getItem("language")]);

  return (
    <>
      <Context.Provider value={{ locale, switchLanguage, messages }}>
        {routing}
        <div className="lang-change-content">
          <select
            className="lang-change-input"
            value={locale || ""}
            // value={
            //   field?.multiple ? value[field?.name] || [] : value[field?.name] || ""
            // }
            onChange={(e) => switchLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
export { Context as IntlContext };
