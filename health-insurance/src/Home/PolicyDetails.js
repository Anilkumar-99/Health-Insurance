import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Headercopy from "./Header copy";
import Footer from './Footer';
import './PolicyDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

function PolicyDetails() {
  const location = useLocation();
  const { values1 } = location.state;
  const [values, setValues] = useState({});
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [policyType, setPolicyType] = useState("");
  const [familyMembers, setFamilyMembers] = useState({
    mother: false,
    father: false,
    children: ""
  });
  const [individual, setIndividual] = useState("");
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-20deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`;

const ShakingIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: yellow;
  animation: ${shake} 1s infinite;
`;

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handlePolicyTypeChange = (e) => {
    const type = e.target.value;
    setPolicyType(type);
    if (type !== "family") {
      setFamilyMembers({
        mother: false,
        father: false,
        children: ""
      });
      setCheckboxValues([]);
    }
  };

  const handleIndividualTypeChange = (e) => {
    const value = e.target.value;
    setIndividual(value);
  };

  const handleChildrenCountChange = (e) => {
    const { name } = e.target;
    setFamilyMembers(prevState => {
      const currentCount = parseInt(prevState.children.split(" ")[1] || 0, 10);
      const newCount = name === "add1" ? currentCount + 1 : currentCount - 1;
      const newChildren = newCount > 0 ? `children ${newCount}` : "";
      setCheckboxValues(prevValues => {
        const filteredValues = prevValues.filter(item => !item.startsWith("children"));
        return newChildren ? [...filteredValues, newChildren] : filteredValues;
      });
      return {
        ...prevState,
        children: newChildren,
      };
    });
  };

  const handleFamilyMemberChange = (e) => {
    const { name, checked } = e.target;
    if (name === "children") {
      if (checked) {
        setFamilyMembers({ ...familyMembers, children: "children 1" });
        setCheckboxValues(prevValues => [...prevValues, "children 1"]);
      } else {
        setFamilyMembers({ ...familyMembers, children: "" });
        setCheckboxValues(prevValues => prevValues.filter(item => !item.startsWith("children")));
      }
    } else {
      setFamilyMembers({ ...familyMembers, [name]: checked });
      setCheckboxValues(prevValues => checked ? [...prevValues, name] : prevValues.filter(item => item !== name));
    }
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!policyType) {
      newErrors.policyType = "Policy type is required.";
    }
    if (policyType === "family" && checkboxValues.length === 0) {
      newErrors.familyMembers = "At least one family member should be selected.";
    }
    if (policyType === "individual" && !individual) {
      newErrors.individual = "Individual type is required.";
    }
    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/Plan", {
        state: {
          policyType,
          values,
          individual,
          familyMembers,
          checkboxValues,
        },
      });
    }
  };

  useEffect(() => {
    axios.get(`http://192.168.1.2:9098/register/getById/${values1}`)
      .then(response => {
        console.log('Response from backend:', response.data);
        setValues(response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }, [values1]);

  return (
    <div>
      <Headercopy/>
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="container-fluid text-light">
              <header className="text-center">
                <h1 className="lig"><i class="animation"></i>Policy Details<i class="animation"></i></h1>
              </header>
            </div>
            <br /> 
          </div>
          <div className="row m-2">

            <div className="col-sm-12" >
              {/* <h3 className="text-success name">Hello, {values.firstname}</h3> */}
              <h3 className="fw-bold mb-4">Hello<br/> &nbsp; &nbsp;<span className="text-primary">{values.firstname}</span>&nbsp;<ShakingIcon icon={faHandPaper} />!</h3>
            </div>

          </div>
          <div className="row m-2 d-flex justify-content-center">
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="fw-bold">Select plan type:</label>
                      </div>
                      <div className="col-sm-6">
                        <select
                          className="form-control text-primary"
                          id="poliselect"
                          name="policyType"
                          value={policyType}
                          onChange={handlePolicyTypeChange}
                          required
                        >
                          <option value="">Select...</option>
                          <option name="individual" value="individual" className="text-dark">Individual</option>
                          <option name="family" value="family" className="text-dark">Family</option>
                        </select>
                        {errors.policyType && <span className="text-danger">{errors.policyType}</span>}
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="fw-bold">Select Relationship :</label>
                      </div>
                      <div className="col-sm-6">
                        {policyType === "family" && values.maritual === "married" && (
                          <div>
                            <h4>Select Family Members:</h4>
                            <label>
                              <input
                                type="checkbox"
                                name="mother"
                                checked={familyMembers.mother}
                                onChange={handleFamilyMemberChange}
                                value={familyMembers.mother}
                              />
                              Mother
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="father"
                                checked={familyMembers.father}
                                onChange={handleFamilyMemberChange}
                                value={familyMembers.father}
                              />
                              Father
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="children"
                                value={familyMembers.children}
                                checked={Boolean(familyMembers.children)}
                                onChange={handleFamilyMemberChange}
                              />
                              Children
                              {Boolean(familyMembers.children) && (
                                <span className="form-check-sm ms-5">
                                  <button
                                    onClick={handleChildrenCountChange}
                                    className="form-control-sm border-0"
                                    name="sub1"
                                    disabled={parseInt(familyMembers.children.split(" ")[1], 10) <= 1}
                                  >
                                    -
                                  </button>
                                  <button className="form-control-sm border-0">
                                    {familyMembers.children.split(" ")[1]}
                                  </button>
                                  <button
                                    onClick={handleChildrenCountChange}
                                    className="form-control-sm border-0"
                                    name="add1"
                                  >
                                    +
                                  </button>
                                </span>
                              )}
                            </label>
                            <br />
                          </div>
                        )}
                        {policyType === "family" && values.maritual === "single" && (
                          <div>
                            <h4>Select Family Members:</h4>
                            <label>
                              <input
                                type="checkbox"
                                name="mother"
                                checked={familyMembers.mother}
                                onChange={handleFamilyMemberChange}
                              />
                              Mother
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="father"
                                checked={familyMembers.father}
                                onChange={handleFamilyMemberChange}
                              />
                              Father
                            </label>
                            <br />
                          </div>
                        )}
                        {policyType === "individual" && values.maritual === "single" && (
                          <div>
                            <h4>Select Relation Type:</h4>
                            <select
                              name="individual"
                              className="form-control-sm w-100 text-primary"
                              required
                              value={individual}
                              id="poliselect"
                              onChange={handleIndividualTypeChange}
                            >
                              <option value="">-Select option-</option>
                              <option value="father" className="text-dark">Father</option>
                              <option value="mother" className="text-dark">Mother</option>
                              <option value="self" className="text-dark">Self</option>
                            </select>
                          </div>
                        )}
                        {policyType === "individual" && values.maritual === "married" && (
                          <div>
                            <h4>Select Relation Type:</h4>
                            <select
                              name="individual"
                              className="form-control-sm w-100"
                              value={individual}
                              id="poliselect"
                              onChange={handleIndividualTypeChange}
                              required
                            >
                              <option value="">-Select option-</option>
                              <option value="father">Father</option>
                              <option value="mother">Mother</option>
                              <option value="self">Self</option>
                              <option value="son">Son</option>
                              <option value="daughter">Daughter</option>
                            </select>
                          </div>
                        )}
                        {errors.familyMembers && <span className="text-danger">{errors.familyMembers}</span>}
                        {errors.individual && <span className="text-danger">{errors.individual}</span>}
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="fw-bold">Date of Birth (Your father's DOB):</label>
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="date"
                          className="form-control text-primary"
                          id="dobField"
                          name="dateOfBirth"
                          min="1900-01-01"
                          max="2004-12-31"
                          value={dateOfBirth}
                          onChange={handleDateChange}
                        />
                        {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth}</span>}
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="fw-bold">Does any of the insured member/members have existing illness:</label>
                      </div>
                      <div className="col-sm-6">
                        <input type="radio" name="option" value="yes"/>
                        <label htmlFor="yes" className="text-primary">Yes</label>&nbsp; &nbsp;&nbsp;
                        <input type="radio" name="option" value="no" />
                        <label htmlFor="no" className="text-primary">No</label>
                      </div>
                    </div>
                    <br />
                    <div className="row mt-3">
                      <div className="col-sm-12 d-flex justify-content-center">
                        {/* <input
                          type="submit"
                          className="btn btn-primary btn-block w-25 fw-bold"
                          id="btnn"
                          value="Submit"
                        /> */}
                        <button type="submit" className="sp-submit-button px-5 py-2 rounded fw-bold text-light">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PolicyDetails;