import React, { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

function TranslatedCode() {
  const [lng, setLng] = useState("en");
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng) => {
    setLng(lng);
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <I18nextProvider i18n={i18n}>
        <div
          className="App-header "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3 style={{ margin: "0" }}>{t("Welcome_to_React")}</h3>

          <select
            name="lng"
            id=""
            value={lng}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="tr">Turkish</option>
            <option value="en">English</option>
            <option value="hn">Hindi</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        <div
          className="app"
          style={{
            textAlign: "center",
          }}
        >
          <h1>{t("projct_main_heading")}</h1>
          <p>{t("projct_main_motive")}</p>
          <div className="btn-group">
            <button>{t("learn_more")}</button>
          </div>
        </div>
      </I18nextProvider>
    );
  }
  return <span>Loading...</span>;
}

export default TranslatedCode;
