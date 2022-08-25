import React from "react";
import "../src/App.css";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";
import Page04 from "./components/Page04";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";
import Page08 from "./components/Page08";
import Page09 from "./components/Page09";
import Bottom from "./components/Bottom";
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
        <div>
          <Page02 classname="Page02Main" />
        </div>
        <div className="space"></div>
        <div>
          <Page03 classname="Page03Main" />
        </div>
        <div className="space"></div>
        <div>
          <Page04 classname="Page04Main" />
        </div>
        <div className="space"></div>
        <div>
          <Page05 classname="Page05Main" />
        </div>
        <div className="space"></div>
        <div>
          <Page06 classname="Page06Main" />
        </div>
        <div>
          <Page07 classname="Page07Main" />
        </div>
        <div>
          <Page08 classname="Page08Main" />
        </div>
        <div>
          <Page09 classname="Page09Main" />
        </div>
        <div>
          <Bottom classname="BottomMain" />
        </div>
      </div>
    </section>
  );
};

export default App;
