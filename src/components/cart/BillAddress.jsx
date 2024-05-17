import React from "react";
import { styles } from "../../utils/constant";

const BillAddress = () => {
  return (
    <div
      className="border rounded p-3 shadow-sm my-4 d-flex flex-row justify-content-between"
      style={styles}
    >
      <div className="">
        <p className="fw-bold">Billing to</p>
        <div className="d-flex flex-row">
          <div>
            <p>Bement Jared</p>
            <p>144 Curt Shores, 50, Madison Avenue</p>
            <p>Hixson - 42040</p>
            <p>Contact: (123) 456 7890</p>
          </div>
          <div>
            <button className="btn btn-link">CHANGE</button>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div>
        <p className="fw-bold">Shipping To</p>
        <div className="d-flex flex-row">
          <div>
            <p>Bement Jared</p>
            <p>144 Curt Shores, 50, Madison Avenue</p>
            <p>Hixson - 42040</p>
            <p>Contact: (123) 456 7890</p>
          </div>
          <div>
            <button className="btn btn-link">CHANGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillAddress;
