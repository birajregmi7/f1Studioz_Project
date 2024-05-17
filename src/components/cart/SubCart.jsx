import React from "react";
import DatePicker from "./DatePicker";
import Purchase from "./Purchase";
import BillSummary from "./BillSummary";
import BillAddress from "./BillAddress";

const SubCart = () => {
  return (
    <>
      <div className="container-lg mt-10">
        <div className="max-width-928 mx-auto border rounded p-4 shadow">
          <div className="d-flex flex-row">
            <div className="">
              <DatePicker />
              <Purchase />
            </div>
            <BillSummary />
          </div>
        </div>
          <BillAddress/>
      </div>
    </>
  );
};

export default SubCart;
