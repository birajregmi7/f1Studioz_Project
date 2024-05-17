import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const ConfigureCards = ({ options, task, onClick }) => {
  console.log("option", options);
  return (
    <div
      onClick={onClick}
      className="p-2 container d-flex justify-content-center"
      style={{
        cursor: "pointer",
        margin: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <div className="p-2 w-75 d-flex justify-content-between ">
        <div className="">
          <h3>{task}</h3>
          <p>{options}</p>
        </div>
        <img src="/configure/RightArrow.svg" alt="" />
      </div>
    </div>
  );
};

export default ConfigureCards;
