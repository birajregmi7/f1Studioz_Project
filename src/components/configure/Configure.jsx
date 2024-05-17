import React from "react";
import ConfigureCards from "./ConfigureCards";
import { configure_data } from "../../utils/constant";
import { useNavigate } from "react-router";
const Configure = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/selection");
  };
  return (
    <div className=" container d-flex-column justify-content-center align-content-center ">
      {configure_data.jobs.map((job, index) => (
        <>
          <ConfigureCards
            key={index}
            options={job.responsibilities.options}
            task={job.responsibilities.task}
            onClick={index === 0 ? handleClick : undefined}
          />
        </>
      ))}
    </div>
  );
};

export default Configure;
