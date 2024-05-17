import React from "react";
import { styles } from "../../utils/constant";

const Purchase = () => {
  return (
    <div className="border rounded p-3 shadow-sm my-4" style={styles}>
      <p className="fw-bold">Purchase Order Number</p>
      <input
        type="text"
        className="form-control"
        placeholder="Enter PO Number"
      />
      <p className="text-muted">
        This PO will be useful to track this order items{" "}
      </p>
    </div>
  );
};

export default Purchase;
