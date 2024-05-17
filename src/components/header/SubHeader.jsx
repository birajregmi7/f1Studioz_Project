import React from "react";
import { useNavigate } from "react-router";

const SubHeader = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // This navigates to the previous page in the history stack
  };
  return (
    <div className="w-100 px-4 py-3 bg-secondary h-4 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <img
          onClick={handleBackClick}
          src="/header/subheader/LeftArrow.svg"
          alt=""
          style={{ cursor: "pointer" }}
        />
        <p className="text-white m-0">
          {currentPage === 1
            ? "Create a new Order"
            : currentPage === 2
            ? "Configure a new Door"
            : currentPage === 3
            ? "Configure a new Door"
            : currentPage === 4
            ? "Classic_John45012"
            : ""}
        </p>

        <p></p>
        {currentPage === 4 ? (
          <p className="text-white m-0">Cart #123456723</p>
        ) : (
          <p className="text-white m-0">
            {currentPage} of {totalPages}
          </p>
        )}
      </div>
      <div className="d-flex gap-3 align-items-center">
        <img src="/header/subheader/Options.svg" alt="" />
      </div>
    </div>
  );
};

export default SubHeader;
