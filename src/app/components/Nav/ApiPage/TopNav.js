import React from "react";

//Component with links to divs displayed at top
const TopNav = () => {
  return (
    <div className="navbar">
      <a href="#api">Intro</a>
      <a href="#requests">Requests</a>
      <a href="#response-status-codes">Response Codes</a>
      <a href="#authorization">Authorization</a>
      <a href="#api-endpoints">API Endpoints</a>
    </div>
  );
};

export default TopNav;
