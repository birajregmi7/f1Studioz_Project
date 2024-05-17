import React from "react";
import Header from "./header/Header";
import { Outlet, useLocation } from "react-router";
import SubHeader from "./header/SubHeader";
import HomeHeader from "./header/HomeHeader";

const Body = () => {
  const location = useLocation();

  let currentPage;
  if (location.pathname === "/") {
    currentPage = 0;
  } else if (location.pathname === "/configure") {
    currentPage = 1;
  } else if (location.pathname === "/selection") {
    currentPage = 2;
  } else if (location.pathname === "/multiform") {
    currentPage = 3;
  }else if (location.pathname === "/cart") {
    currentPage = 4;
  }
  return (
    <div>
      <Header />
      {currentPage !== 0 ? (
        <SubHeader currentPage={currentPage} totalPages={3} />
      ) : (
        <HomeHeader />
      )}

      <Outlet />
    </div>
  );
};

export default Body;
