import React from "react";

const Search = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex"
        role="search"
        style={{ position: "relative" }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ paddingRight: "2.5rem" }} 
        />
        <button
          type="submit"
          onClick={() => {
            console.log("Submit button clicked!");
          }}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src="/home/Search.svg" alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
