import React from "react";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { saveConfigureFormData } from "../../store/formSlice";
import { useNavigate } from "react-router";

const CategorySelectionForm = () => {
  const dispatch = useDispatch();
  const selectOne = useRef();
  const selectTwo = useRef();
  const selectThree = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveConfigureFormData({
        categoryOne: selectOne.current.value,
        categoryTwo: selectTwo.current.value,
        categoryThree: selectThree.current.value,
      })
    );
    navigate("/multiform");
  };

  return (
    <div style={{ padding: "20px", margin: "20px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", backgroundColor: "#ccc" }}></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSelectOne" style={{ marginBottom: "15px" }}>
          <Form.Label>Select Category One</Form.Label>
          <Form.Select ref={selectOne} aria-label="Select Category One">
            <option value="Residential Door">Residential Door</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSelectTwo" style={{ marginBottom: "15px" }}>
          <Form.Label>Select Category Two</Form.Label>
          <Form.Select ref={selectTwo} aria-label="Select Category Two">
            <option value="Canyon Ridge® Collection">Canyon Ridge® Collection</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSelectThree" style={{ marginBottom: "15px" }}>
          <Form.Label>Select Category Three</Form.Label>
          <Form.Select ref={selectThree} aria-label="Select Category Three">
            <option value="CAN212">CAN212</option>
          </Form.Select>
        </Form.Group>
        <div style={{ textAlign: "right" }}>
          <hr />
          <div>
            <button style={{ backgroundColor: 'brown' }} className="btn">CONFIGURE</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CategorySelectionForm;
