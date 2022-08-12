import React from "react";
import "../src/App.css";
import Page01 from "./components/Page01";
import TopLogo from "./components/TopLogo";
import "../src/styles/TopSubMenu.css";

const App = () => {
  return (
    <section className="container">
      <div classname="Main">
        <TopLogo className="TopLogoMenu" />
        <div>
          <Page01 classname="Page01Main" />
        </div>
      </div>
    </section>
  );
};

export default App;
