import React from "react";
import { styles } from "../../utils/constant";
import { useNavigate } from "react-router";

const Order = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="container-lg">
      <div
        className="max-width-928 mx-auto border rounded p-4 shadow align-items-center"
        style={styles}
      >
        <div className="d-flex flex-row justify-content-between">
          <div>
            <p>1 ITEM</p>
            <p> $5061.11</p>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary d-flex align-items-center me-2">
              <img
                src="/cart/order/Add.svg"
                alt=""
                style={{ maxWidth: "100%", height: "auto", marginRight: "5px" }}
              />
              ADD MORE
            </button>
            <button
              onClick={handleSubmit}
              className="btn"
              style={{ backgroundColor: "#8B4513", color: "#fff" }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
