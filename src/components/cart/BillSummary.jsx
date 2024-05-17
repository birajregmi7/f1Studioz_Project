import React from "react";
import { styles } from "../../utils/constant";
const BillSummary = () => {
  return (
    <div className="border p-3 shadow-sm mx-4" style={styles}>
      <p className="fw-bold">Bill Summary</p>
      <div className="d-flex justify-content-between">
        <p>Sub Total</p>
        <p>$4500.00</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Energy Surcharge</p>
        <p>$ 70.18</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Sales Tax</p>
        <p>$ 490.93</p>
      </div>
      <hr />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="applyTax"
        />
        <label className="form-check-label fw-bold" htmlFor="applyTax">
          Apply Tax
        </label>
      </div>
      <p className="text-muted">
        The 1% iStore discount is calculated into the total price for all doors
        and door parts. Please refer to the quote or order acknowledgment for
        details.
      </p>
    </div>
  );
};

export default BillSummary;
