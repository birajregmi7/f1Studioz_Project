import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import HomeTable from "./HomeTable";
import ActivatedCards from "./ActivatedCards";
import TableFilter from "./TableFilter";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ActiveCards");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-3">
      <Nav variant="tabs" defaultActiveKey="/">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex">
            <Nav.Item>
              <Nav.Link
                className={`border border-start-0 border-top-0 border-end-0 text-dark ${
                  activeTab === "ActiveCards"
                    ? "border-bottom border-black"
                    : "border-black-hover"
                }`}
                onClick={() => handleTabClick("ActiveCards")}
              >
                Active Cards
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`border border-start-0 border-top-0 border-end-0 text-dark ${
                  activeTab === "ActivatedCards"
                    ? "border-bottom border-black"
                    : "border-black-hover"
                }`}
                onClick={() => handleTabClick("ActivatedCards")}
              >
                Activated Cards
              </Nav.Link>
            </Nav.Item>
          </div>
          <div className="d-flex">
            <Search />
            <TableFilter />
          </div>
        </div>
      </Nav>
      {activeTab === "ActiveCards" && <HomeTable />}
      {activeTab === "ActivatedCards" && <ActivatedCards />}
    </div>
  );
};

export default Tabs;
