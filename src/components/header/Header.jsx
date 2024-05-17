import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-100 px-4 py-3 bg-dark h-10 d-flex justify-content-between">
        <img src="/header/Logo.svg" alt="" />
        <div className="d-flex gap-4"> 
          <img src="/header/Icon1.svg" alt="" style={{ marginRight: '10px' }} /> 
          <img src="/header/Icon2.svg" alt="" style={{ marginRight: '10px' }} /> 
          <img src="/header/Icon3.svg" alt="" style={{ marginRight: '10px' }} /> 
          <img src="/header/Icon4.svg" alt="" style={{ marginRight: '10px' }} /> 
        </div>
      </div>
    </>
  );
};

export default Header;
