import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../store/formSlice";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const MultiForms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const formDataArray = useSelector((state) => state.form.formData);
  const [formData, setFormData] = useState({
    assemblyType: "",
    width: "",
    widthInches: "",
    height: "",
    heightInches: "",
    glassType: "",
    sectionGlazed: "",
    framing: "",
    spring: "",
    trackSize: "",
    trackMount: "",
    trackLift: "",
    trackRadius: "",
    lock: "",
    packaging: "",
    additionalOptions: [],
  });

  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        [name]: value,
      };

      if (
        name === "heightInches" &&
        updatedFormData.height &&
        updatedFormData.width &&
        updatedFormData.widthInches
      ) {
        handleSectionComplete();
      }

      return updatedFormData;
    });
  };

  const handlePreview = () => {
    setShowPreviewModal(true);
  };

  const handleAddToCart = () => {
    const requiredFields = [
      "assemblyType",
      "width",
      "widthInches",
      "height",
      "heightInches",
      "glassType",
      "sectionGlazed",
      "framing",
      "spring",
      "trackSize",
      "trackMount",
      "trackLift",
      "trackRadius",
      "lock",
      "packaging",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setValidationError(
        `Please fill out the following fields: ${missingFields.join(", ")}`
      );
      return;
    }

    setValidationError(""); // Clear any previous error
    console.log("dispatchhhhh");
    dispatch(saveFormData(formData));
    setProgress(100);
    navigate("/cart");
  };

  const handleSectionComplete = () => {
    setCurrentSection((prevSection) => {
      const newSection = prevSection + 1;
      // Assuming there are 4 sections indexed from 0 to 3
      const totalSections = 4;
      const newProgress = (newSection / totalSections) * 100;
      setProgress(newProgress);
      return newSection;
    });
  };

  const handleClosePreviewModal = () => {
    setShowPreviewModal(false);
  };

  return (
    <>
      <div className="p-2 w-100  d-flex flex-column justify-content-center border ">
        {/* <ProgressBar now={progress} label={`${progress}%`} className="mb-4" /> */}

        {/* {validationError && <Alert variant="danger">{validationError}</Alert>} */}

        <Form>
          <div className="border p-3 mb-4 rounded bg-light  ">
            <h5 className="bg-secondary text-white p-2 rounded">
              Layout Options
            </h5>
            <Form.Group controlId="assemblyType" className="my-3">
              <Form.Label>Assembly Type</Form.Label>
              <Form.Control
                as="select"
                name="assemblyType"
                value={formData.assemblyType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Complete Door">Complete Door</option>
                <option value="Partial Door">Partial Door</option>
              </Form.Control>
            </Form.Group>
            <div className="d-flex mb-3">
              <Form.Group controlId="measureSizeWidth" className="mr-2">
                <Form.Label>Width</Form.Label>
                <Form.Control
                  as="select"
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="8">8 ft.</option>
                  <option value="6">6 ft.</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="measureSizeWidthInches">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  as="select"
                  name="widthInches"
                  value={formData.widthInches}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="2">2 in.</option>
                  <option value="4">4 in.</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex mb-3">
              <Form.Group controlId="measureSizeHeight" className="mr-2">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  as="select"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="8">8 ft.</option>
                  <option value="6">6 ft.</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="measureSizeHeightInches">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  as="select"
                  name="heightInches"
                  value={formData.heightInches}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="2">2 in.</option>
                  <option value="4">4 in.</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>

          <div className="border p-3 mb-4 rounded bg-light">
            <h5 className="bg-secondary text-white p-2 rounded">
              Window Options
            </h5>
            <Form.Group controlId="glassType" className="my-3">
              <Form.Label>Glass Type</Form.Label>
              <Form.Control
                as="select"
                name="glassType"
                value={formData.glassType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Solid (No Windows)">Solid No Windows</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="sectionGlazed" className="my-3">
              <Form.Label>Section Glazed</Form.Label>
              <Form.Control
                as="select"
                name="sectionGlazed"
                value={formData.sectionGlazed}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Sections 4">Sections 4</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="framing" className="my-3">
              <Form.Label>Framing</Form.Label>
              <Form.Control
                as="select"
                name="framing"
                value={formData.framing}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Arch 1 Design">Arch 1 Design</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="border p-3 mb-4 rounded bg-light">
            <h5 className="bg-secondary text-white p-2 rounded">
              Track Options
            </h5>
            <Form.Group controlId="spring" className="my-3">
              <Form.Label>Spring</Form.Label>
              <Form.Control as="select" name="spring" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Galvanized Torsion">Galvanized Torsion</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="trackSize" className="my-3">
              <Form.Label>Track Size</Form.Label>
              <Form.Control
                as="select"
                name="trackSize"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="2” Flag & Jamb Brackets Loose">
                  2” Flag & Jamb Brackets Loose
                </option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="trackMount" className="my-3">
              <Form.Label>Track Mount</Form.Label>
              <Form.Control
                as="select"
                name="trackMount"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Bracket">Bracket</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="trackLift" className="my-3">
              <Form.Label>Track Lift</Form.Label>
              <Form.Control
                as="select"
                name="trackLift"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Standard">Standard</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="trackRadius" className="my-3">
              <Form.Label>Track Radius</Form.Label>
              <Form.Control
                as="select"
                name="trackRadius"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="12” Radius">12” Radius</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="border p-3 mb-4 rounded bg-light">
            <h5 className="bg-secondary text-white p-2 rounded">
              Other Options
            </h5>
            <Form.Group controlId="lock" className="my-3">
              <Form.Label>Lock</Form.Label>
              <Form.Control as="select" name="lock" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Inside Slide Lock (#2)">
                  Inside Slide Lock #2
                </option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="packaging" className="my-3">
              <Form.Label>Packaging</Form.Label>
              <Form.Control
                as="select"
                name="packaging"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="[x] Distributor">Distributor</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="additionalOptions" className="my-3">
              <Form.Label>Additional Options</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Extra Struts"
                  name="additionalOptions"
                  value="Extra Struts"
                  onChange={(e) => {
                    const options = [...formData.additionalOptions];
                    if (e.target.checked) {
                      options.push(e.target.value);
                    } else {
                      const index = options.indexOf(e.target.value);
                      if (index > -1) {
                        options.splice(index, 1);
                      }
                    }
                    setFormData({ ...formData, additionalOptions: options });
                  }}
                />
                <Form.Check
                  type="checkbox"
                  label="Spade Strap Hinges"
                  name="additionalOptions"
                  value="Spade Strap Hinges"
                  onChange={(e) => {
                    const options = [...formData.additionalOptions];
                    if (e.target.checked) {
                      options.push(e.target.value);
                    } else {
                      const index = options.indexOf(e.target.value);
                      if (index > -1) {
                        options.splice(index, 1);
                      }
                    }
                    setFormData({ ...formData, additionalOptions: options });
                  }}
                />
                <Form.Check
                  type="checkbox"
                  label="14 GA Quiet Hinge"
                  name="additionalOptions"
                  value="14 GA Quiet Hinge"
                  onChange={(e) => {
                    const options = [...formData.additionalOptions];
                    if (e.target.checked) {
                      options.push(e.target.value);
                    } else {
                      const index = options.indexOf(e.target.value);
                      if (index > -1) {
                        options.splice(index, 1);
                      }
                    }
                    setFormData({ ...formData, additionalOptions: options });
                  }}
                />
              </div>
            </Form.Group>
          </div>
          {validationError && <Alert variant="danger">{validationError}</Alert>}
          <div className="text-center">
            <Button variant="primary" onClick={handlePreview} className="mx-2">
              Preview
            </Button>
            <Button
              variant="success"
              onClick={handleAddToCart}
              className="mx-2"
            >
              Add to Cart
            </Button>
          </div>
        </Form>
        <Modal show={showPreviewModal} onHide={handleClosePreviewModal}>
          <Modal.Header closeButton>
            <Modal.Title>Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {Object.entries(formData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong>{" "}
                  {Array.isArray(value) ? value.join(", ") : value.toString()}
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePreviewModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default MultiForms;
