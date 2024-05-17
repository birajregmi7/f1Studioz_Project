import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import { saveHeaderData } from "../../store/headerSlice";

const HomeHeader = () => {
  const [activeTab, setActiveTab] = useState("ActiveCards");
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeTab === "ActiveCards") {
      dispatch(saveHeaderData(true));
    } else if (activeTab === "ActivatedCards") {
      dispatch(saveHeaderData(false));
    }
  }, [activeTab, dispatch]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" bg-secondary">
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabClick}>
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex">
            <Nav.Item>
              <Nav.Link
                eventKey="ActiveCards"
                className={`border border-start-0 border-top-0 border-end-0 text-dark ${
                  activeTab === "ActiveCards"
                    ? "border-bottom border-warning bg-secondary text-white"
                    : "border-black-hover"
                }`}
              >
                CARTS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="ActivatedCards"
                className={`border border-start-0 border-top-0 border-end-0 text-dark ${
                  activeTab === "ActivatedCards"
                    ? "border-bottom border-warning bg-secondary text-white"
                    : "border-black-hover"
                }`}
              >
                FAVOURITES
              </Nav.Link>
            </Nav.Item>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default HomeHeader;
