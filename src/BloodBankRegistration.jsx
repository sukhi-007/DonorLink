import React, { useState } from "react";
import "./BloodBankRegistration.css";

const BloodBankRegistration = () => {
  const [formData, setFormData] = useState({
    bloodBankName: "",
    parentHospital: "",
    shortName: "",
    category: "",
    type: "",
    contactPerson: "",
    email: "",
    contactNo: "",
    firstRegDate: "",
    licenceNo: "",
    fromDate: "",
    toDate: "",
    componentFacility: "",
    apheresisFacility: "",
    helplineNo: "",
    address1: "",
    address2: "",
    pincode: "",
    latitude: "",
    longitude: "",
    website: "",
    noOfBeds: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Blood Bank Registration</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <input type="text" name="bloodBankName" placeholder="Blood Bank Name*" required className="form-input" onChange={handleChange} />
        <input type="text" name="parentHospital" placeholder="Parent Hospital Name" className="form-input" onChange={handleChange} />
        <input type="text" name="shortName" placeholder="Short Name" className="form-input" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category*" required className="form-input" onChange={handleChange} />
        <input type="text" name="type" placeholder="Select Type" className="form-input" onChange={handleChange} />
        <input type="text" name="contactPerson" placeholder="Contact Person*" required className="form-input" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="form-input" onChange={handleChange} />
        <input type="text" name="contactNo" placeholder="Contact No.*" required className="form-input" onChange={handleChange} />
        <input type="date" name="firstRegDate" placeholder="First Registration Date*" required className="form-input" onChange={handleChange} />
        <input type="text" name="licenceNo" placeholder="Licence No." className="form-input" onChange={handleChange} />
        <input type="date" name="fromDate" placeholder="From Date" className="form-input" onChange={handleChange} />
        <input type="date" name="toDate" placeholder="To Date" className="form-input" onChange={handleChange} />
        <input type="text" name="componentFacility" placeholder="Component Facility" className="form-input" onChange={handleChange} />
        <input type="text" name="apheresisFacility" placeholder="Apheresis Facility" className="form-input" onChange={handleChange} />
        <input type="text" name="helplineNo" placeholder="Helpline No." className="form-input" onChange={handleChange} />
        <input type="text" name="address1" placeholder="Address1*" required className="form-input" onChange={handleChange} />
        <input type="text" name="address2" placeholder="Address2" className="form-input" onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode*" required className="form-input" onChange={handleChange} />
        <input type="text" name="latitude" placeholder="Latitude" className="form-input" onChange={handleChange} />
        <input type="text" name="longitude" placeholder="Longitude" className="form-input" onChange={handleChange} />
        <input type="text" name="website" placeholder="Website" className="form-input" onChange={handleChange} />
        <input type="text" name="noOfBeds" placeholder="No of Bed Hospital" className="form-input" onChange={handleChange} />
        <input type="text" name="location" placeholder="Enter a location" className="form-input" onChange={handleChange} />
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default BloodBankRegistration;
