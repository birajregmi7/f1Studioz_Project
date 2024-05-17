import React from "react";
import { styles } from "../../utils/constant";

const DatePicker = () => {
  return (
    <div className="border rounded p-3 shadow-sm" style={styles}>
      <p className="fw-bold">Change Delivery Date</p>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="31-DEC-1999"
          aria-label="Date"
          aria-describedby="datePickerImage"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <img
              src="/cart/subHeader/DatePicker.svg"
              alt="Date Picker"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </span>
        </div>
      </div>
      <p className="text-muted">Standard Delivery: Tue May 28 - 2019</p>
    </div>
  );
};

export default DatePicker;
