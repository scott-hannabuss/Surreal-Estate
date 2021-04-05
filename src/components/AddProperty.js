import React, { useState } from "react";
import Button from "react-uikit-button";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bathrooms: "",
      bedrooms: "",
      email: "",
      price: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (e) => {
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(
        `https://surrealestatedatabase.herokuapp.com/PropertyListing`,
        fields
      )
      .then(() =>
        setAlert({
          message: "",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="addproperty">
      <h1 className="header_addproperty">Add Property</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="add-property_form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input
            placeholder="Property Title"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
            placeholder="city"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          <select
            placeholder="Property Type"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End Terraced">End Terraced</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label data-testid="test-bathroom-label" htmlFor="bathroom">
          <select
            placeholder="Number of bathrooms"
            id="bathroom"
            name="bathroom"
            value={fields.bathroom}
            onChange={handleFieldChange}
          >
            <option value="1 Bathroom">1 Bathroom</option>
            <option value="2 Bathroom">2 Bathroom</option>
            <option value="3 Bathroom">3 Bathroom</option>
          </select>
        </label>
        <label data-testid="test-bedroom-label" htmlFor="bedrooms">
          <select
            placeholder="Number of bedrooms"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1 Bedrooms">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="5 Bedrooms">5 Bedrooms</option>
          </select>
        </label>
        <label htmlFor="email">
          <input
            placeholder="Email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          <input
            placeholder="Price"
            id="price"
            name="price"
            type="text"
            inputMode="numeric"
            pattern="[0-9]+"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <Button className="add-property-button" type="submit">
          Add Property!
        </Button>
      </form>
    </div>
  );
};

export default AddProperty;
