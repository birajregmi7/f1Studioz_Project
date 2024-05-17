import React from "react";
import Button from "react-bootstrap/Button";
const AddButton = () => {
  return (
    <Button
      className="rounded-circle p-0 border-0"
      style={{
        width: "72px",
        height: "72px",
        backgroundColor: "#66332B",
      }}
    >
      <img src="/home/AddButton.svg" />
    </Button>
  );
};

export default AddButton;
