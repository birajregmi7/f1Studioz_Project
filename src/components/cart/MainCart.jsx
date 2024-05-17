import React from "react";
import { styles } from "../../utils/constant";

const MainCart = () => {
  return (
    <>
      <div className="container-lg">
        <div
          className="max-width-928 mx-auto border rounded p-4 shadow"
          style={styles}
        >
          <div>
            <p className="fw-bold">
              10 0 X 10 0.0 CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH
              GENERATION FINISH WALDER DOOR
            </p>
          </div>
          <p>
            <span className="fw-bold">Job Name:</span> Front door with glass{" "}
            <b>Change</b>{" "}
          </p>
          <p>
            <span className="fw-bold">Product #:</span> CWD • Garage Door
          </p>
          <p>
            <span className="fw-bold">Availability:</span> IN STOCK (Available
            for Pickup)
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex-row">
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
            <div className="d-flex flex-column">
              <p>
                <span className="fw-bold">Standard Multiplier:</span> .432{" "}
              </p>
              <p>Secondary Multipliers Applied</p>
              <div className="d-flex align-items-center">
                <img src="/cart/mainHeader/DiscountLogo.svg" alt="" />
                <p className="mb-0 ml-2">Apply MPQ</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p>
                <span className="fw-bold">Net Price:</span> $4500.00
              </p>
              <p>
                <span className="fw-bold">Unit Price:</span> $4800.00
              </p>
              <p>View Price Details</p>
            </div>
          </div>
          <div className="border d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center px-3 border-start">
              <img src="/cart/mainHeader/Favourites.svg" alt="" />
              <p className="mb-0 ms-2">Favorites</p>
            </div>
            <div className="d-flex align-items-center px-3 border-start">
              <img src="/cart/mainHeader/Edit.svg" alt="" />
              <p className="mb-0 ms-2">EDIT</p>
            </div>
            <div className="d-flex align-items-center px-3 border-start">
              <img src="/cart/mainHeader/Copy.svg" alt="" />
              <p className="mb-0 ms-2">COPY</p>
            </div>
            <div className="d-flex align-items-center px-3">
              <img src="/cart/mainHeader/Delete.svg" alt="" />
              <p className="mb-0 ms-2">DELETE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCart;
