// HomeTable.jsx
import React from "react";
import Table from "react-bootstrap/Table";
import AddButton from "./AddButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeTable = () => {
  const navigate = useNavigate();
  const formDataArray = useSelector((state) => state.form.formData);



  return (
    <div className="p-2 d-flex flex-column align-items-center position-relative">
      <Table className="table table-striped mt-5 border">
        <thead className="border-0">
          <tr className="border-0">
            <th scope="col" className="border-0">
              Product Information
            </th>
            <th scope="col" className="border-0">
              Cart Name
            </th>
            <th scope="col" className="border-0">
              Shipping Point
            </th>
            <th scope="col" className="border-0">
              Created by
            </th>
            <th scope="col" className="border-0">
              Expiry
            </th>
          </tr>
        </thead>
        <tbody className="border-0">
          {formDataArray.map((formData, index) => (
            <React.Fragment key={index}>
              <tr className="border-0">
                <td className="border-0">{formData.assemblyType}</td>
                <td className="border-0">{formData.framing}</td>
                <td className="border-0">{formData.trackSize}</td>
                <td className="border-0">{formData.lock}</td>
                <td className="border-0">
                  {formData.packaging}
                </td>
              </tr>
              <tr className="border-0">
                <td colSpan="5" className="border-0">
                  Additional Options: {formData.additionalOptions.join(", ")}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <div
        onClick={() => navigate("/configure")}
        className="position-absolute bottom-0 end-0 mb-2 me-3"
      >
        <AddButton />
      </div>
    </div>
  );
};

export default HomeTable;
